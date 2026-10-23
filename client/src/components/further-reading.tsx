'use client';

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { InsightItem } from "@/lib/content/types";
import {
  AmpButton,
  ContentCard,
  Eyebrow,
  Grid,
  Section,
  Stack,
  Text,
} from "@/components/system";

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
    <Section tone="mist" padding="md" className="border-t border-[#E5E3EE]">
      <Stack gap="lg">
        <Stack gap="xs">
          <Eyebrow>Insights</Eyebrow>
          <Text variant="h2">Further Reading</Text>
        </Stack>

        <Grid cols={3} gap="md" equal>
          {matchingArticles.map((article) => {
            const content = article.content as ArticleContent;
            return (
              <Link
                key={article.id}
                href={`/insights/${article.slug}`}
                className="group block h-full"
              >
                <ContentCard
                  title={article.title}
                  description={content.description}
                  titleClamp={2}
                  descriptionClamp={3}
                  footer={
                    <Stack direction="row" justify="between" align="center" className="w-full">
                      <Text
                        as="span"
                        variant="small"
                        tone="coral"
                        className="inline-flex items-center gap-1.5 font-semibold transition-all duration-200 group-hover:gap-2.5"
                      >
                        Read article <ArrowRight className="h-3 w-3" />
                      </Text>
                      {content.readTime ? (
                        <Text as="span" variant="caption" tone="subtle" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {content.readTime}
                        </Text>
                      ) : null}
                    </Stack>
                  }
                />
              </Link>
            );
          })}
        </Grid>

        <div className="text-center">
          <AmpButton asChild variant="ghostDark" size="sm">
            <Link href="/insights">
              View all insights <ArrowRight className="h-4 w-4" />
            </Link>
          </AmpButton>
        </div>
      </Stack>
    </Section>
  );
}
