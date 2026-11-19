'use client';

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { StructuredData } from "@/components/structured-data";
import { insightsHubSchema } from "@/lib/schemas";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
const NewsletterModal = dynamic(() => import("@/components/newsletter-modal"), { ssr: false });
import Image from "next/image";
import type { InsightItem } from "@/lib/content/types";
import modernWorkImage from "@assets/35_1760470608291.webp";
import {
  PageShell,
  Section,
  Stack,
  Text,
} from "@/components/system";

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
  const [selectedType, setSelectedType] = useState<string>("all");
  const [email, setEmail] = useState("");

  const { data: response, isLoading } = useQuery<{ success: boolean; data: InsightItem[] }>({
    queryKey: ["/api/cms/content", "insight"],
  });

  const articles = response?.data || [];

  const filteredArticles = useMemo(() => {
    let filtered = [...articles];

    if (selectedType && selectedType !== "all") {
      filtered = filtered.filter((article) => {
        const content = article.content as ArticleContent;
        return content.type?.toLowerCase() === selectedType.toLowerCase();
      });
    }

    filtered.sort((a, b) => {
      const aContent = a.content as ArticleContent;
      const bContent = b.content as ArticleContent;
      return new Date(bContent.date || 0).getTime() - new Date(aContent.date || 0).getTime();
    });

    return filtered;
  }, [articles, selectedType]);

  const articleTypes = useMemo(() => {
    const types = new Set<string>();
    articles.forEach((article) => {
      const content = article.content as ArticleContent;
      if (content.type) types.add(content.type);
    });
    return Array.from(types).sort();
  }, [articles]);

  const featured = filteredArticles[0];
  const listArticles = filteredArticles.slice(featured ? 1 : 0);

  useEffect(() => {
    const win = window as Window & { _hsq?: Array<[string, string?]> };
    if (typeof window !== "undefined" && win._hsq) {
      win._hsq.push(["setPath", "/insights"]);
      win._hsq.push(["trackPageView"]);
    }
  }, []);

  const formatDate = (date?: string) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      <StructuredData data={insightsHubSchema as Record<string, unknown>} id="insights-hub-schema" />
      <PageShell className="bg-[#F5F2EA]">
        <Section tone="white" padding="lg" className="pt-12 lg:pt-16">
          <Stack gap="md" className="mb-10 max-w-2xl">
            <Text variant="display" className="text-5xl sm:text-6xl lg:text-7xl" data-testid="text-insights-page-title">
              Journal
            </Text>
            <Text variant="lead" tone="muted">
              Research, frameworks, and analysis from practitioners who have operated inside infrastructure, energy, financial services, public sector, and technology organisations.
            </Text>
          </Stack>

          <Tabs
            value={selectedType}
            onValueChange={setSelectedType}
            className="mb-12"
          >
            <TabsList className="h-auto w-full justify-start gap-6 overflow-x-auto rounded-none bg-transparent p-0">
              <TabsTrigger
                value="all"
                className="rounded-none border-b-2 border-transparent bg-transparent px-0 pb-2 pt-0 text-sm font-medium lowercase text-[#7A7468] shadow-none data-[state=active]:border-[#C75B39] data-[state=active]:bg-transparent data-[state=active]:text-[#1A1A1A] data-[state=active]:shadow-none"
                data-testid="tab-filter-all"
              >
                All
              </TabsTrigger>
              {articleTypes.map((type) => (
                <TabsTrigger
                  key={type}
                  value={type}
                  className="rounded-none border-b-2 border-transparent bg-transparent px-0 pb-2 pt-0 text-sm font-medium lowercase text-[#7A7468] shadow-none data-[state=active]:border-[#C75B39] data-[state=active]:bg-transparent data-[state=active]:text-[#1A1A1A] data-[state=active]:shadow-none"
                  data-testid={`tab-filter-${type.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {type}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {isLoading ? (
            <div className="space-y-8">
              <Skeleton className="h-72 w-full rounded-none" />
              <Skeleton className="h-8 w-2/3 rounded-none" />
              <Skeleton className="h-4 w-full rounded-none" />
            </div>
          ) : (
            <>
              {featured && (
                <div className="mb-16" data-testid={`card-featured-${featured.slug}`}>
                  <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
                    <AspectRatio ratio={4 / 3} className="overflow-hidden bg-[#EFEBE3]">
                      <Image
                        src={
                          (featured.content as ArticleContent)?.image ||
                          modernWorkImage.src
                        }
                        alt={featured.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                        priority
                        data-testid={`img-featured-${featured.slug}`}
                      />
                    </AspectRatio>
                    <Stack gap="md" className="lg:pt-4">
                      <Text variant="eyebrow" tone="coral">
                        Featured
                      </Text>
                      <Text
                        variant="h2"
                        className="max-w-[18ch]"
                        data-testid={`text-featured-title-${featured.slug}`}
                      >
                        {featured.title}
                      </Text>
                      <Text variant="body" tone="muted">
                        {(featured.content as ArticleContent)?.description}
                      </Text>
                      <Link
                        href={`/insights/${featured.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#C75B39] transition-all hover:gap-3"
                        data-testid={`button-featured-cta-${featured.slug}`}
                      >
                        Read article <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Stack>
                  </div>
                </div>
              )}

              {listArticles.length > 0 && (
                <div className="mb-20">
                  {listArticles.map((article, index) => {
                    const content = (article.content || {}) as ArticleContent;
                    return (
                      <div key={article.id}>
                        {index > 0 && <Separator className="bg-[#E0DBD2]" />}
                        <Link
                          href={`/insights/${article.slug}`}
                          className="group grid grid-cols-[5.5rem_1fr_auto] items-baseline gap-4 py-6 sm:grid-cols-[7.5rem_1fr_7rem] sm:gap-8"
                          data-testid={`link-insight-${article.slug}`}
                        >
                          <Text as="span" variant="caption" tone="subtle">
                            {formatDate(content.date) || "Recent"}
                          </Text>
                          <Text
                            as="span"
                            variant="h4"
                            className="text-xl transition-colors group-hover:text-[#C75B39] sm:text-2xl"
                            data-testid={`text-insight-title-${article.slug}`}
                          >
                            {article.title}
                          </Text>
                          <Text
                            as="span"
                            variant="eyebrow"
                            tone="subtle"
                            className="justify-self-end"
                          >
                            {content.type || "Insight"}
                          </Text>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}

              {filteredArticles.length === 0 && (
                <div className="py-24 text-center">
                  <Text variant="h3" className="mb-3">
                    No articles found
                  </Text>
                  <Text variant="small" tone="muted">
                    Try another category.
                  </Text>
                </div>
              )}
            </>
          )}

          {/* Newsletter — journal style */}
          <div className="grid items-center gap-8 border border-[#E0DBD2] bg-[#EFEBE3] p-8 md:grid-cols-2 md:gap-12 md:p-12">
            <Stack gap="md">
              <Text variant="h3">The Amplified newsletter</Text>
              <Text variant="small" tone="muted">
                New research, frameworks, and analysis for delivery directors, CIOs, and digital leads.
              </Text>
              <form
                className="flex items-stretch gap-0"
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterMounted(true);
                  setIsNewsletterOpen(true);
                }}
              >
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="h-12 rounded-none border-[#E0DBD2] bg-[#F5F2EA] shadow-none focus-visible:ring-[#C75B39]"
                  data-testid="input-newsletter-email"
                />
                <Button
                  type="submit"
                  className="h-12 w-12 shrink-0 rounded-none bg-[#C75B39] p-0 text-white hover:bg-[#A8482C]"
                  aria-label="Subscribe"
                  data-testid="button-subscribe-insights"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </Stack>
            <AspectRatio ratio={4 / 3} className="overflow-hidden bg-[#E0DBD2]">
              <Image
                src={modernWorkImage}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                aria-hidden
              />
            </AspectRatio>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-[#E0DBD2] pt-12 md:flex-row md:items-end md:justify-between">
            <Stack gap="sm" className="max-w-lg">
              <Text variant="h3">Need a straight answer?</Text>
              <Text variant="small" tone="muted">
                Whether you are starting an AI governance programme or rethinking a delivery model, we will give you an honest view of where to begin.
              </Text>
            </Stack>
            <Button
              type="button"
              onClick={() => onOpenConsultation()}
              className="h-11 rounded-none bg-[#1A1A1A] px-6 text-sm font-medium text-white hover:bg-black"
              data-testid="button-expert-consultation"
            >
              Start a conversation <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </Section>

        {newsletterMounted && (
          <NewsletterModal
            isOpen={isNewsletterOpen}
            onClose={() => setIsNewsletterOpen(false)}
          />
        )}
      </PageShell>
    </>
  );
}
