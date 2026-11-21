import type { Metadata } from "next";
import type { BmkPageContent } from "./bmk-types";
import { servicesPages } from "./bmk-pages-services";
import { aiPages } from "./bmk-pages-ai";
import { companyPages } from "./bmk-pages-company";

export const bmkPages: Record<string, BmkPageContent> = {
  ...servicesPages,
  ...aiPages,
  ...companyPages,
};

const SITE = "https://bmkrs.com";

/** Next.js metadata for a bmkrs content page. Safe to call from server routes. */
export function bmkMetadata(id: string): Metadata {
  const page = bmkPages[id];
  if (!page) return {};
  const url = `${SITE}${page.path}`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: { title: page.metaTitle, description: page.metaDescription, url, siteName: "bmkrs", type: "website" },
    twitter: { card: "summary_large_image", title: page.metaTitle, description: page.metaDescription },
    alternates: { canonical: url },
  };
}
