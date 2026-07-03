import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `# Amplified - AI Implementation & Governance for Regulated Industries
# https://amplified.co.uk

User-agent: *
Allow: /

# AI search crawlers - explicitly permitted
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: Bytespider
Allow: /

# Training-only bots - blocked
User-agent: CCBot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: meta-externalagent
Disallow: /

# Disallow admin/internal pages
User-agent: *
Disallow: /api/
Disallow: /seo-optimizer

# Sitemap location
Sitemap: https://amplified.co.uk/sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
