import type { Metadata } from 'next';
import { PageWrapper } from '../../../client/src/components/page-wrapper';
import ArticleDetail from '../../../client/src/pages/article-detail';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;

  const title = slug
    .split('-')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000';
    const res = await fetch(`${baseUrl}/api/cms/content/insight`, { next: { revalidate: 300 } });
    if (res.ok) {
      const data = await res.json();
      const articles: Array<{ slug?: string; title?: string; metaDescription?: string; description?: string; featuredImage?: string }> = data.data || [];
      const article = articles.find((a) => a.slug === slug);
      if (article) {
        return {
          title: `${article.title || title} | Amplified Insights`,
          description: article.metaDescription || article.description || `Read ${article.title || title} - insights from Amplified on AI governance, technology delivery, and digital transformation.`,
          openGraph: {
            title: article.title || title,
            description: article.metaDescription || article.description || `Read ${article.title || title} - insights from Amplified.`,
            url: `https://amplified.co.uk/insights/${slug}`,
            images: article.featuredImage ? [{ url: article.featuredImage }] : [{ url: '/og-image.png' }],
            type: 'article',
          },
          twitter: {
            card: 'summary_large_image',
            title: article.title || title,
            description: article.metaDescription || article.description || `Read ${article.title || title} - insights from Amplified.`,
            images: article.featuredImage ? [article.featuredImage] : ['/og-image.png'],
          },
          alternates: {
            canonical: `https://amplified.co.uk/insights/${slug}`,
          },
        };
      }
    }
  } catch {
    // Fall through to default metadata
  }

  return {
    title: `${title} | Amplified Insights`,
    description: `Read ${title} - insights from Amplified on AI governance, technology delivery, and digital transformation for regulated industries.`,
    openGraph: {
      title,
      description: `Read ${title} - insights from Amplified.`,
      url: `https://amplified.co.uk/insights/${slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: `Read ${title} - insights from Amplified.`,
    },
    alternates: {
      canonical: `https://amplified.co.uk/insights/${slug}`,
    },
  };
}

export default function Page() {
  return <PageWrapper component={ArticleDetail} />;
}
