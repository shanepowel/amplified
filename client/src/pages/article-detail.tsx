'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Download, Share2, BookOpen, TrendingUp, Users, Shield, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { StructuredData } from "@/components/structured-data";
import { createArticleSchema, createBreadcrumbSchema, createFAQSchema } from "@/lib/schemas";
import DOMPurify from 'isomorphic-dompurify';

interface FAQItem {
  question: string;
  answer: string;
}

interface RelatedService {
  label: string;
  href: string;
}

interface ArticleContent {
  id: string;
  type: string;
  title: string;
  slug: string;
  content: {
    description?: string;
    body?: string;
    image?: string;
    date?: string;
    readTime?: string;
    author?: string;
    keyTakeaways?: string[];
    sources?: string;
    faq?: FAQItem[];
    tags?: string[];
    relatedServices?: RelatedService[];
  };
  status: string;
  lastModified: string;
  modifiedBy: string;
  version: number;
}

interface ArticleDetailProps {
  onOpenConsultation: (serviceType?: string) => void;
}

function formatArticleContent(content: string): string {
  let html = content;
  
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/```([\s\S]+?)```/g, '<pre><code>$1</code></pre>');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  
  const lines = html.split('\n');
  const processedLines: string[] = [];
  let inUnorderedList = false;
  let inOrderedList = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isUnorderedItem = /^. (.+)$/.test(line);
    const isOrderedItem = /^\d+\. (.+)$/.test(line);
    
    if (isUnorderedItem) {
      if (inOrderedList) { processedLines.push('</ol>'); inOrderedList = false; }
      if (!inUnorderedList) { processedLines.push('<ul>'); inUnorderedList = true; }
      processedLines.push(line.replace(/^. (.+)$/, '<li>$1</li>'));
    } else if (isOrderedItem) {
      if (inUnorderedList) { processedLines.push('</ul>'); inUnorderedList = false; }
      if (!inOrderedList) { processedLines.push('<ol>'); inOrderedList = true; }
      processedLines.push(line.replace(/^\d+\. (.+)$/, '<li>$1</li>'));
    } else {
      if (inUnorderedList) { processedLines.push('</ul>'); inUnorderedList = false; }
      if (inOrderedList) { processedLines.push('</ol>'); inOrderedList = false; }
      processedLines.push(line);
    }
  }
  
  if (inUnorderedList) processedLines.push('</ul>');
  if (inOrderedList) processedLines.push('</ol>');
  
  html = processedLines.join('\n');
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.split('\n\n').map(para => {
    if (para.startsWith('<') || para.trim() === '') return para;
    return `<p>${para.replace(/\n/g, '<br />')}</p>`;
  }).join('\n');
  
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'p', 'strong', 'em', 'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'br', 'a'],
    ALLOWED_ATTR: ['href', 'target', 'rel']
  });
}

function getTypeIcon(type: string) {
  switch (type.toLowerCase()) {
    case "white paper":
    case "research synthesis": return BookOpen;
    case "research report": return TrendingUp;
    case "thought leadership": return Users;
    case "emergency guide": return Shield;
    default: return BookOpen;
  }
}

const defaultRelatedServices: RelatedService[] = [
  { label: "AI Governance", href: "/ai-governance" },
  { label: "AI Implementation", href: "/ai-implementation" },
  { label: "Structured Delivery", href: "/structured-delivery" },
  { label: "Capability Building", href: "/capability" },
];

function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden"
          style={{ border: "1px solid #E5E3EE", backgroundColor: "#FFFFFF" }}
        >
          <button
            className="amp-focus-ring-on-light w-full text-left px-6 py-5 flex items-start justify-between gap-4 transition-colors duration-150 hover:bg-gray-50"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-sans text-base font-semibold leading-snug" style={{ color: "#181F4F" }}>
              {faq.question}
            </span>
            <span className="flex-shrink-0 mt-0.5" style={{ color: "#F85C70" }}>
              {openIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5 border-t" style={{ borderColor: "#E5E3EE" }}>
              <p className="font-sans text-sm leading-relaxed pt-4" style={{ color: "#65677B" }}>
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ArticleDetail({ onOpenConsultation }: ArticleDetailProps) {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const [article, setArticle] = useState<ArticleContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;
      try {
        setIsLoading(true);
        const response = await fetch(`/api/cms/content/slug/${slug}`);
        const data = await response.json();
        if (!data.success) { setError("Article not found"); return; }
        setArticle(data.data);
      } catch (err) {
        console.error("Error fetching article:", err);
        setError("Failed to load article");
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticle();
  }, [slug]);

  const articleUrl = article ? `https://amplified.co.uk/insights/${article.slug}` : undefined;
  const articleTags = article?.content?.tags || [];
  const articleFaqs = article?.content?.faq || [];
  const articleRelatedServices = article?.content?.relatedServices || defaultRelatedServices;


  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        text: article?.content?.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({ title: "Link copied", description: "Article link copied to clipboard" });
    }
  };

  const handleDownload = () => {
    toast({ title: "Download initiated", description: "Your article download will begin shortly" });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-muted rounded w-1/4"></div>
            <div className="h-12 bg-muted rounded w-3/4"></div>
            <div className="h-64 bg-muted rounded"></div>
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            The article you are looking for does not exist or has been removed.
          </p>
          <Link href="/insights">
            <Button data-testid="button-back-to-insights">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = getTypeIcon(article.type);
  const dateIso = article.content?.date ? new Date(article.content.date).toISOString() : new Date().toISOString();
  const dateDisplay = article.content?.date
    ? new Date(article.content.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  const articleSchema = createArticleSchema({
    headline: article.title,
    description: article.content?.description || '',
    url: `https://amplified.co.uk/insights/${article.slug}`,
    datePublished: dateIso,
    dateModified: article.lastModified ? new Date(article.lastModified).toISOString() : dateIso,
    authorName: article.content?.author || 'Amplified',
    image: article.content?.image || undefined,
    keywords: articleTags.length > 0
      ? articleTags
      : ['AI governance', 'digital transformation', 'regulated industries', 'structured delivery'],
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://amplified.co.uk/' },
    { name: 'Insights', url: 'https://amplified.co.uk/insights' },
    { name: article.title, url: `https://amplified.co.uk/insights/${article.slug}` },
  ]);

  const faqSchema = articleFaqs.length > 0 ? createFAQSchema(articleFaqs) : null;

  return (
    <div className="min-h-screen py-20 bg-background relative overflow-hidden">
      <StructuredData data={articleSchema} id="article-schema" />
      <StructuredData data={breadcrumbSchema} id="article-breadcrumb" />
      {faqSchema && <StructuredData data={faqSchema} id="article-faq-schema" />}

      <div className="absolute inset-0 modern-pattern opacity-5"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/insights" className="hover:text-foreground transition-colors">Insights</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground truncate max-w-[200px] sm:max-w-none">
              {article.title}
            </li>
          </ol>
        </nav>

        {/* Back Button */}
        <Link href="/insights">
          <Button variant="ghost" className="mb-8 hover:bg-primary/5" data-testid="button-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Insights
          </Button>
        </Link>

        {/* Article Header */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-primary/90 text-white backdrop-blur-sm border-0">
              <Icon className="h-4 w-4 mr-2" />
              {article.type}
            </Badge>
            {articleTags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs border-primary/20 text-muted-foreground">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl text-foreground mb-8 leading-tight" data-testid="text-article-title">
            {article.title}
          </h1>

          {article.content?.description && (
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              {article.content.description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border/50">
            {dateDisplay && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <time dateTime={dateIso} className="font-medium">{dateDisplay}</time>
              </div>
            )}
            {article.content?.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-medium">{article.content.readTime}</span>
              </div>
            )}
            {article.content?.author && (
              <div className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full" aria-hidden="true"></span>
                <span>
                  By{' '}
                  <Link href="/about/team" className="amp-focus-ring-on-light font-semibold text-foreground hover:text-primary transition-colors">
                    {article.content.author}
                  </Link>
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button 
              onClick={handleDownload} 
              className="shadow-soft hover-lift bg-gradient-to-r from-primary to-primary/90"
              data-testid="button-download-article"
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button 
              variant="outline" 
              onClick={handleShare} 
              className="shadow-soft hover-lift border-primary/20"
              data-testid="button-share-article"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button 
              variant="outline" 
              onClick={() => onOpenConsultation()} 
              className="shadow-soft hover-lift border-primary/20"
              data-testid="button-discuss-article"
            >
              Discuss with Expert
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        {article.content?.image && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-medium crystalline-border bg-muted">
            <Image
              src={article.content.image}
              alt={article.title}
              className="w-full h-auto object-cover"
              data-testid="img-article-featured"
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 800px"
              width={800}
              height={600}
            />
          </div>
        )}

        {/* Key Takeaways */}
        {article.content?.keyTakeaways && article.content.keyTakeaways.length > 0 && (
          <Card className="mb-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 shadow-soft crystalline-border">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl text-foreground mb-6">Key Points</h2>
              <div className="space-y-4 text-base text-foreground leading-relaxed">
                {article.content.keyTakeaways.map((takeaway, index) => (
                  <p key={index} className="flex items-start gap-4">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true"></span>
                    <span>{takeaway}</span>
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Article Body */}
        {article.content?.body && (
          <div className="prose prose-lg prose-headings:font-bold prose-headings:text-foreground prose-h2:text-2xl md:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl md:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-foreground prose-p:leading-relaxed prose-p:text-base prose-p:mb-6 prose-strong:text-foreground prose-strong:font-semibold prose-ul:text-foreground prose-ul:my-6 prose-ol:text-foreground prose-ol:my-6 prose-li:text-foreground prose-li:text-base prose-li:leading-relaxed prose-li:mb-2 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:text-foreground prose-blockquote:italic prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:my-6 prose-code:text-accent prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:overflow-x-auto prose-pre:my-6 prose-hr:my-8 prose-hr:border-border max-w-none mb-12" data-testid="text-article-body">
            <div 
              className="article-content [&_h2]:scroll-mt-20 [&_h3]:scroll-mt-20"
              dangerouslySetInnerHTML={{ __html: formatArticleContent(article.content.body) }}
            />
          </div>
        )}

        {/* FAQ Section */}
        {articleFaqs.length > 0 && (
          <div className="mb-12">
            <div className="mb-6">
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2" style={{ color: "#F85C70" }}>
                Frequently Asked Questions
              </p>
              <h2 className="font-display text-2xl md:text-3xl" style={{ color: "#181F4F", fontWeight: 400 }}>
                Common Questions
              </h2>
            </div>
            <FAQAccordion faqs={articleFaqs} />
          </div>
        )}

        {/* Related Services */}
        <div className="mb-12 rounded-2xl p-6 border border-border/50" style={{ backgroundColor: "#F2F0F7" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#F85C70", fontFamily: "monospace" }}>Related Services</p>
          <div className="flex flex-wrap gap-3">
            {articleRelatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="amp-focus-ring-on-light inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:opacity-80"
                style={{ backgroundColor: "#181F4F", color: "#ffffff" }}
              >
                {s.label}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Sources */}
        {article.content?.sources && (
          <Card className="mb-12 border-border/50 shadow-soft">
            <CardContent className="p-6 bg-muted/30">
              <h3 className="text-lg font-bold text-foreground mb-3 uppercase tracking-wider">Research Sources</h3>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                {article.content.sources}
              </p>
            </CardContent>
          </Card>
        )}

        {/* CTA Section */}
        <Card className="mt-16 bg-gradient-to-r from-primary/5 via-primary/10 to-accent/10 border-primary/20 shadow-medium crystalline-border">
          <CardContent className="p-12 text-center">
            <h2 className="text-2xl md:text-3xl text-foreground mb-6">
              Ready to implement this?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Our partners can help you apply these ideas inside your programme. Book a consultation to discuss your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => onOpenConsultation()} 
                className="shadow-soft hover-lift bg-gradient-to-r from-primary to-primary/90"
                data-testid="button-book-consultation"
              >
                Book a Consultation
              </Button>
              <Link href="/insights">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="shadow-soft hover-lift border-primary/20"
                  data-testid="button-more-insights"
                >
                  Explore More Insights
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
