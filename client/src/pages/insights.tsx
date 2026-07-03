'use client';

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StructuredData } from "@/components/structured-data";
import { insightsHubSchema } from "@/lib/schemas";
import { Calendar, ArrowRight, BookOpen, TrendingUp, Users, Shield, Clock, Lightbulb, Code2, Search, Filter } from "lucide-react";
import dynamic from "next/dynamic";
const NewsletterModal = dynamic(() => import("@/components/newsletter-modal"), { ssr: false });
import Image from "next/image";
import type { ContentItem } from "@shared/schema";

interface InsightsProps {
  onOpenConsultation: (serviceType?: string) => void;
}

interface ArticleContent {
  type?: string;
  description?: string;
  image?: string;
  date?: string;
  readTime?: string;
  author?: string;
  keyTakeaways?: string[];
  sources?: string;
}

export default function Insights({ onOpenConsultation }: InsightsProps) {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [newsletterMounted, setNewsletterMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("date-desc");

  const { data: response, isLoading } = useQuery<{ success: boolean; data: ContentItem[] }>({
    queryKey: ["/api/cms/content", "insight"],
  });

  const articles = response?.data || [];

  const filteredArticles = useMemo(() => {
    let filtered = [...articles];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((article) => {
        const content = article.content as ArticleContent;
        return (
          article.title.toLowerCase().includes(query) ||
          content.description?.toLowerCase().includes(query) ||
          content.author?.toLowerCase().includes(query)
        );
      });
    }

    if (selectedType && selectedType !== "all") {
      filtered = filtered.filter((article) => {
        const content = article.content as ArticleContent;
        return content.type?.toLowerCase() === selectedType.toLowerCase();
      });
    }

    filtered.sort((a, b) => {
      const aContent = a.content as ArticleContent;
      const bContent = b.content as ArticleContent;
      if (sortBy === "date-desc") {
        return new Date(bContent.date || 0).getTime() - new Date(aContent.date || 0).getTime();
      } else if (sortBy === "date-asc") {
        return new Date(aContent.date || 0).getTime() - new Date(bContent.date || 0).getTime();
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    return filtered;
  }, [articles, searchQuery, selectedType, sortBy]);

  const articleTypes = useMemo(() => {
    const types = new Set<string>();
    articles.forEach((article) => {
      const content = article.content as ArticleContent;
      if (content.type) types.add(content.type);
    });
    return Array.from(types).sort();
  }, [articles]);

  const featuredArticles = filteredArticles?.slice(0, 2) || [];
  const regularArticles = filteredArticles?.slice(2) || [];

  useEffect(() => {
    const win = window as Window & { _hsq?: Array<[string, string?]> };
    if (typeof window !== "undefined" && win._hsq) {
      win._hsq.push(["setPath", "/insights"]);
      win._hsq.push(["trackPageView"]);
    }
  }, []);
  const getTypeIcon = (type?: string) => {
    if (!type) return BookOpen;
    switch (type.toLowerCase()) {
      case "white paper":
      case "research report":
      case "research synthesis":
        return TrendingUp;
      case "thought leadership":
        return Users;
      case "emergency guide":
        return Shield;
      case "implementation guide":
      case "strategy brief":
        return Lightbulb;
      case "methodology":
      case "planning tool":
        return Code2;
      default:
        return BookOpen;
    }
  };

  return (
    <>
      <StructuredData data={insightsHubSchema as Record<string, unknown>} id="insights-hub-schema" />
    <div className="min-h-screen" style={{ backgroundColor: "#FAFAF9" }}>

      {/* HERO */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.14em] mb-6" style={{ color: "#F85C70" }}>
            Insights
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h1
                className="font-display text-5xl lg:text-6xl leading-tight"
                style={{ color: "#FFFFFF", fontWeight: 400 }}
                data-testid="text-insights-page-title"
              >
                Practical thinking<br />for delivery-led<br />organisations
              </h1>
            </div>
            <div>
              <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                Research, frameworks, and analysis from practitioners who have operated inside
                infrastructure, energy, financial services, public sector, and technology organisations.
                Written for delivery directors, CIOs, and digital leads.
              </p>
              <div className="flex flex-wrap gap-3">
                {["AI Governance", "Structured Delivery", "Capability Building", "Tech Build"].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs uppercase tracking-[0.1em] px-3 py-1.5 rounded"
                    style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.55)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH AND FILTER BAR */}
      <section className="py-8 border-b" style={{ backgroundColor: "#F2F0F7", borderColor: "#DDD9EA" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: "#9CA3AF" }} />
              <Input
                type="text"
                placeholder="Search by title, topic, or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 pr-4 py-5 text-sm border-0 shadow-none bg-white rounded font-sans"
                style={{ color: "#181F4F" }}
                data-testid="input-search-insights"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" style={{ color: "#6B6E81" }} />
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger aria-label="Filter insights by type" className="w-[180px] border-0 bg-white shadow-none font-sans text-sm" data-testid="select-type-filter">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {articleTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" style={{ color: "#6B6E81" }} />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger aria-label="Sort insights" className="w-[160px] border-0 bg-white shadow-none font-sans text-sm" data-testid="select-sort-by">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date-desc">Newest First</SelectItem>
                  <SelectItem value="date-asc">Oldest First</SelectItem>
                  <SelectItem value="title">Title A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4 ml-auto">
              <span className="font-mono text-xs" style={{ color: "#6B6E81" }}>
                {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          {isLoading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {[1, 2].map((i) => (
                <div key={i} className="rounded overflow-hidden" style={{ border: "1px solid #E5E3EE" }}>
                  <Skeleton className="w-full h-64" />
                  <div className="p-8 space-y-4">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {featuredArticles.length > 0 && (
                <div className="mb-20">
                  <div className="flex items-baseline justify-between mb-10">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2" style={{ color: "#6B6E81" }}>
                        Featured
                      </p>
                      <h2 className="font-display text-3xl" style={{ color: "#181F4F", fontWeight: 400 }} data-testid="text-featured-insights">
                        Latest Research
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {featuredArticles.map((article) => {
                      const content = (article.content || {}) as ArticleContent;
                      const Icon = getTypeIcon(content.type);
                      return (
                        <Link href={`/insights/${article.slug}`} key={article.id} className="amp-focus-ring-on-light group block" data-testid={`card-featured-${article.slug}`}>
                          <div
                            className="h-full rounded overflow-hidden transition-all duration-300"
                            style={{ border: "1px solid #E5E3EE", backgroundColor: "#FFFFFF" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#C8C4D8"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#E5E3EE"; }}
                          >
                            <div className="relative overflow-hidden" style={{ height: "280px" }}>
                              <Image
                                src={content.image || "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"}
                                alt={article.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                data-testid={`img-featured-${article.slug}`}
                                priority
                                fetchPriority="high"
                              />
                              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(24,31,79,0.7) 0%, transparent 50%)" }} />
                              <div className="absolute top-5 left-5">
                                <span
                                  className="font-mono text-xs uppercase tracking-[0.1em] px-3 py-1.5 rounded"
                                  style={{ backgroundColor: "rgba(24,31,79,0.85)", color: "#F85C70" }}
                                >
                                  {content.type || "Insight"}
                                </span>
                              </div>
                              <div className="absolute bottom-5 left-5 flex items-center gap-4">
                                {content.date && (
                                  <span className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.75)" }}>
                                    {new Date(content.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
                                  </span>
                                )}
                                {content.readTime && (
                                  <span className="font-sans text-xs flex items-center gap-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                                    <Clock className="h-3 w-3" /> {content.readTime}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="p-8">
                              <h3
                                className="font-display text-2xl mb-4 transition-colors duration-200"
                                style={{ color: "#181F4F", fontWeight: 400 }}
                                data-testid={`text-featured-title-${article.slug}`}
                              >
                                {article.title}
                              </h3>
                              <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: "#65677B" }}>
                                {content.description}
                              </p>
                              {content.keyTakeaways && content.keyTakeaways.length > 0 && (
                                <div className="mb-6 pl-4" style={{ borderLeft: "2px solid #F85C70" }}>
                                  <p className="font-mono text-xs uppercase tracking-[0.1em] mb-3" style={{ color: "#6B6E81" }}>Key Takeaways</p>
                                  <ul className="space-y-2">
                                    {content.keyTakeaways.slice(0, 3).map((t: string, idx: number) => (
                                      <li key={idx} className="font-sans text-xs leading-relaxed" style={{ color: "#65677B" }}>
                                        {t}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              <span
                                className="inline-flex items-center gap-2 font-sans text-sm font-semibold group-hover:gap-3 transition-all duration-200"
                                style={{ color: "#F85C70" }}
                                data-testid={`button-featured-cta-${article.slug}`}
                              >
                                Read full article <ArrowRight className="h-3 w-3" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {regularArticles.length > 0 && (
                <div className="mb-20">
                  <div className="mb-10">
                    <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2" style={{ color: "#6B6E81" }}>
                      All Insights
                    </p>
                    <h2 className="font-display text-3xl" style={{ color: "#181F4F", fontWeight: 400 }} data-testid="text-all-insights">
                      Research and Resources
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t" style={{ borderColor: "#E5E3EE" }}>
                    {regularArticles.map((article) => {
                      const content = (article.content || {}) as ArticleContent;
                      return (
                        <Link href={`/insights/${article.slug}`} key={article.id} className="amp-focus-ring-on-light group block" data-testid={`link-insight-${article.slug}`}>
                          <div
                            className="h-full flex flex-col border-r border-b transition-all duration-200"
                            style={{ borderColor: "#E5E3EE" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F9F8FC"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
                          >
                            <div className="relative overflow-hidden" style={{ height: "200px" }}>
                              <Image
                                src={content.image || "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"}
                                alt={article.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                data-testid={`img-insight-${article.slug}`}
                                loading="lazy"
                              />
                              {content.type && (
                                <div className="absolute top-4 left-4">
                                  <span
                                    className="font-mono text-xs uppercase tracking-[0.08em] px-2 py-1 rounded"
                                    style={{ backgroundColor: "rgba(24,31,79,0.8)", color: "#F85C70" }}
                                  >
                                    {content.type}
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                              <h3
                                className="font-display text-lg mb-3 line-clamp-2 group-hover:opacity-75 transition-opacity"
                                style={{ color: "#181F4F", fontWeight: 400 }}
                                data-testid={`text-insight-title-${article.slug}`}
                              >
                                {article.title}
                              </h3>
                              <p className="font-sans text-sm leading-relaxed line-clamp-3 mb-4 flex-1" style={{ color: "#65677B" }}>
                                {content.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="font-sans text-xs" style={{ color: "#5A5D72" }}>
                                  {content.date
                                    ? new Date(content.date).toLocaleDateString("en-GB", { month: "short", year: "numeric" })
                                    : "Recent"}
                                </span>
                                {content.readTime && (
                                  <span className="font-sans text-xs flex items-center gap-1" style={{ color: "#5A5D72" }}>
                                    <Clock className="h-3 w-3" /> {content.readTime}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {filteredArticles.length === 0 && !isLoading && (
                <div className="py-24 text-center">
                  <p className="font-display text-2xl mb-3" style={{ color: "#181F4F", fontWeight: 400 }}>No articles found</p>
                  <p className="font-sans text-sm" style={{ color: "#65677B" }}>Try adjusting your search or filter.</p>
                </div>
              )}
            </>
          )}

          {/* CTA BAND */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-l border-t mt-8"
            style={{ borderColor: "#DDD9EA", backgroundColor: "#F2F0F7" }}
          >
            <div className="p-10 border-r border-b" style={{ borderColor: "#DDD9EA" }}>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
                Stay Current
              </p>
              <h2 className="font-display text-3xl mb-4" style={{ color: "#181F4F", fontWeight: 400 }}>
                Get insights direct to your inbox
              </h2>
              <p className="font-sans text-sm leading-relaxed mb-8" style={{ color: "#65677B" }}>
                New research, frameworks, and analysis sent to delivery directors, CIOs, and digital leads
                across infrastructure, energy, financial services, public and private sector.
              </p>
              <button
                onClick={() => { setNewsletterMounted(true); setIsNewsletterOpen(true); }}
                className="amp-focus-ring-on-light inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                style={{ backgroundColor: "#181F4F", color: "#FFFFFF" }}
                onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0d1230"; }}
                onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#181F4F"; }}
                data-testid="button-subscribe-insights"
              >
                Subscribe to Insights
              </button>
            </div>

            <div className="p-10 border-b" style={{ borderColor: "#DDD9EA" }}>
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
                Work With Us
              </p>
              <h2 className="font-display text-3xl mb-4" style={{ color: "#181F4F", fontWeight: 400 }}>
                Need a straight answer?
              </h2>
              <p className="font-sans text-sm leading-relaxed mb-8" style={{ color: "#65677B" }}>
                Whether you are starting an AI governance programme or rethinking a delivery model, we will give
                you an honest view of where to begin. No slide decks in the first meeting.
              </p>
              <button
                onClick={() => onOpenConsultation()}
                className="amp-focus-ring-on-light inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                style={{ border: "1px solid #181F4F", color: "#181F4F", backgroundColor: "transparent" }}
                onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(24,31,79,0.04)"; }}
                onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; }}
                data-testid="button-expert-consultation"
              >
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {newsletterMounted && (
        <NewsletterModal
          isOpen={isNewsletterOpen}
          onClose={() => setIsNewsletterOpen(false)}
        />
      )}
    </div>
    </>
  );
}
