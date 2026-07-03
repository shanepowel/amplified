import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { InsightItem } from "@/lib/content/types";

interface ArticleContent {
  description?: string;
  date?: string;
  readTime?: string;
  author?: string;
  tags?: string[];
}

interface FurtherReadingProps {
  tags: string[];
  maxArticles?: number;
  currentSlug?: string;
}

export function FurtherReading({ tags, maxArticles = 3, currentSlug }: FurtherReadingProps) {
  const { data: response } = useQuery<{ success: boolean; data: InsightItem[] }>({
    queryKey: ["/api/cms/content", "insight"],
  });

  const allArticles = response?.data || [];

  const matchingArticles = allArticles
    .filter((article) => {
      if (currentSlug && article.slug === currentSlug) return false;
      const content = article.content as ArticleContent;
      const articleTags = content.tags || [];
      return tags.some((tag) =>
        articleTags.some((aTag) => aTag.toLowerCase().includes(tag.toLowerCase()) || tag.toLowerCase().includes(aTag.toLowerCase()))
      );
    })
    .slice(0, maxArticles);

  if (matchingArticles.length === 0) return null;

  return (
    <section className="py-20 lg:py-24 border-t" style={{ backgroundColor: "#F2F0F7", borderColor: "#E5E3EE" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-2" style={{ color: "#F85C70" }}>
            Insights
          </p>
          <h2 className="font-display text-3xl" style={{ color: "#181F4F", fontWeight: 400 }}>
            Further Reading
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchingArticles.map((article) => {
            const content = article.content as ArticleContent;
            return (
              <Link
                key={article.id}
                href={`/insights/${article.slug}`}
                className="group block rounded overflow-hidden transition-all duration-200 hover:shadow-md"
                style={{ border: "1px solid #DDD9EA", backgroundColor: "#FFFFFF" }}
              >
                <div className="p-6">
                  <h3
                    className="font-display text-lg mb-3 leading-snug group-hover:opacity-75 transition-opacity"
                    style={{ color: "#181F4F", fontWeight: 400 }}
                  >
                    {article.title}
                  </h3>
                  {content.description && (
                    <p className="font-sans text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: "#65677B" }}>
                      {content.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <span
                      className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold group-hover:gap-2.5 transition-all duration-200"
                      style={{ color: "#F85C70" }}
                    >
                      Read article <ArrowRight className="h-3 w-3" />
                    </span>
                    {content.readTime && (
                      <span className="font-sans text-xs flex items-center gap-1" style={{ color: "#9CA3AF" }}>
                        <Clock className="h-3 w-3" /> {content.readTime}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold transition-colors duration-200"
            style={{ color: "#181F4F" }}
          >
            View all insights <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
