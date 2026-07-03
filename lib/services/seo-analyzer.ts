const KEYWORD_CATEGORIES: Record<string, string[]> = {
  'Primary AI Consultancy': [
    'ai consultancy',
    'artificial intelligence consulting',
    'ai strategy consulting',
    'ai implementation services',
    'ai transformation consulting',
    'enterprise ai solutions',
    'business ai consulting',
    'ai adoption strategy',
    'machine learning consultancy',
    'generative ai consulting',
    'ai integration services',
    'ai enablement consulting',
  ],
  'Core Digital Consultancy': [
    'digital transformation',
    'digital consultancy',
    'technology consulting',
    'enterprise digital strategy',
    'digital delivery',
    'programme management',
    'agile delivery',
    'operating model design',
    'capability building',
    'structured delivery',
    'change management',
    'technology implementation',
  ],
  'AI + Digital Hybrid': [
    'ai-driven marketing strategies',
    'ai content creation',
    'automated marketing',
    'ai customer experience solutions',
    'conversational ai services',
    'ai process automation',
    'ai business optimization',
    'intelligent digital solutions',
    'predictive analytics consulting',
    'data-driven business strategy',
    'ai consulting for digital transformation',
  ],
  'Solution-Focused': [
    'increase business efficiency',
    'boost digital presence',
    'drive measurable growth',
    'automate business processes',
    'streamline operations',
    'qualified lead generation',
    'data-driven consulting',
    'evidence-based digital strategy',
    'ai roi optimization',
    'business transformation through ai',
    'enterprise digital strategy',
    'scalable ai solutions',
  ],
  'Industry-Specific': [
    'regulated industries',
    'financial services technology',
    'public sector transformation',
    'infrastructure projects',
    'energy sector technology',
    'ai governance',
    'responsible ai',
    'eu ai act',
  ],
  'Long-Tail & Specific': [
    'ai governance framework',
    'delivery operating model',
    'productised consulting',
    'ai waste calculator',
    'shadow ai',
    'ai risk assessment',
    'digital accountability',
    'programme launch intensive',
    'squad blueprint',
    'delivery compass',
  ],
};

const ALL_KEYWORDS = Object.values(KEYWORD_CATEGORIES).flat();

export interface SEOReport {
  current_analysis: {
    word_count: number;
    keyword_occurrences: Record<string, number>;
    total_keywords_found: number;
    keyword_density: number;
    structure_analysis: {
      has_h1: boolean;
      h2_count: number;
      h3_count: number;
      has_meta_description: boolean;
      has_title: boolean;
      keywords_in_first_150: number;
    };
    missing_keywords: string[];
    seo_score: number;
  };
  keyword_gaps: {
    gaps_by_category: Record<
      string,
      {
        coverage_percent: number;
        found: number;
        total_keywords: number;
        missing_keywords: string[];
      }
    >;
    opportunities: Array<{
      category: string;
      priority: string;
      recommended_keywords: string[];
      content_suggestion: string;
    }>;
    priority_keywords: string[];
  };
  recommendations: {
    meta_tags: {
      title: string;
      description: string;
      og_title: string;
      og_description: string;
    };
    suggested_headings: string[];
    ctas: string[];
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
  content_calendar: Array<{
    week: number;
    type: string;
    title: string;
    keywords: string[];
    goal: string;
  }>;
  summary: {
    current_seo_score: number;
    keywords_found: number;
    keyword_density: number;
    top_priorities: string[];
    immediate_actions: string[];
  };
}

function stripHtml(content: string): string {
  return content
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function countKeywordOccurrences(text: string): Record<string, number> {
  const lower = text.toLowerCase();
  const occurrences: Record<string, number> = {};

  for (const keyword of ALL_KEYWORDS) {
    let count = 0;
    let index = 0;
    while (index < lower.length) {
      const found = lower.indexOf(keyword, index);
      if (found === -1) break;
      count += 1;
      index = found + keyword.length;
    }
    if (count > 0) {
      occurrences[keyword] = count;
    }
  }

  return occurrences;
}

function extractTagCount(content: string, tag: string): number {
  const regex = new RegExp(`<${tag}[^>]*>`, 'gi');
  return (content.match(regex) || []).length;
}

function hasMetaTag(content: string, name: string): boolean {
  const regex = new RegExp(`<meta[^>]+name=["']${name}["'][^>]*content=["'][^"']+["']`, 'i');
  return regex.test(content);
}

function hasTitleTag(content: string): boolean {
  return /<title[^>]*>[\s\S]*?<\/title>/i.test(content);
}

function scoreKeywords(foundCount: number): number {
  if (foundCount >= 10) return 40;
  if (foundCount >= 5) return 25;
  if (foundCount >= 2) return 15;
  return 0;
}

function scoreStructure(structure: SEOReport['current_analysis']['structure_analysis']): number {
  let score = 0;
  if (structure.has_h1) score += 10;
  if (structure.h2_count >= 3) score += 10;
  if (structure.has_meta_description) score += 5;
  if (structure.has_title) score += 5;
  return score;
}

function scoreFirstParagraph(keywordsInFirst150: number): number {
  if (keywordsInFirst150 >= 2) return 15;
  if (keywordsInFirst150 >= 1) return 8;
  return 0;
}

function scoreDensity(density: number, hasKeywords: boolean): number {
  if (density >= 1 && density <= 2) return 15;
  if (density >= 0.5 && density <= 3) return 10;
  if (hasKeywords) return 5;
  return 0;
}

function buildContentCalendar(): SEOReport['content_calendar'] {
  const topics = [
    {
      type: 'blog',
      title: 'Building an AI governance framework for regulated delivery teams',
      keywords: ['ai governance framework', 'ai governance', 'regulated industries'],
      goal: 'Target governance decision-makers searching for practical frameworks.',
    },
    {
      type: 'case study',
      title: 'How a delivery director rebaselined a fifty-person engineering function',
      keywords: ['delivery operating model', 'structured delivery', 'digital accountability'],
      goal: 'Demonstrate productised consulting outcomes with sector credibility.',
    },
    {
      type: 'white paper',
      title: 'From shadow AI to accountable adoption in enterprise programmes',
      keywords: ['shadow ai', 'ai adoption strategy', 'responsible ai'],
      goal: 'Capture long-tail demand around unmanaged AI usage.',
    },
    {
      type: 'blog',
      title: 'EU AI Act readiness for UK organisations running cross-border delivery',
      keywords: ['eu ai act', 'ai risk assessment', 'ai implementation services'],
      goal: 'Rank for compliance-led AI implementation searches.',
    },
    {
      type: 'blog',
      title: 'Launching a major programme without losing accountability',
      keywords: ['programme launch intensive', 'programme management', 'delivery compass'],
      goal: 'Support Forge and Delivery Compass consideration stages.',
    },
    {
      type: 'case study',
      title: 'Embedding AI capability inside an existing PMO',
      keywords: ['ai integration services', 'capability building', 'technology implementation'],
      goal: 'Bridge AI implementation and structured delivery keywords.',
    },
    {
      type: 'blog',
      title: 'What productised consulting looks like for CIOs in regulated industries',
      keywords: ['productised consulting', 'enterprise digital strategy', 'digital consultancy'],
      goal: 'Reinforce positioning against open-ended advisory firms.',
    },
    {
      type: 'blog',
      title: 'Designing operating models that survive restructures',
      keywords: ['operating model design', 'squad blueprint', 'agile delivery'],
      goal: 'Feed Squad Blueprint demand with practical operating-model content.',
    },
    {
      type: 'white paper',
      title: 'Measuring ROI from AI without weakening governance',
      keywords: ['ai roi optimization', 'data-driven consulting', 'enterprise ai solutions'],
      goal: 'Address CFO and transformation sponsor objections.',
    },
    {
      type: 'blog',
      title: 'Public sector digital transformation with defensible accountability',
      keywords: ['public sector transformation', 'digital transformation', 'structured delivery'],
      goal: 'Support sector landing pages with thought leadership.',
    },
    {
      type: 'blog',
      title: 'Financial services technology delivery under FCA scrutiny',
      keywords: ['financial services technology', 'ai governance', 'regulated industries'],
      goal: 'Strengthen financial services sector relevance.',
    },
    {
      type: 'case study',
      title: 'Reducing duplicated AI tooling across a multi-team enterprise',
      keywords: ['shadow ai', 'ai waste calculator', 'streamline operations'],
      goal: 'Connect calculator lead magnet themes to services content.',
    },
  ];

  return topics.map((topic, index) => ({
    week: index + 1,
    ...topic,
  }));
}

export function analyzeSeoContent(rawContent: string): SEOReport {
  const plainText = stripHtml(rawContent);
  const words = plainText.split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const keywordOccurrences = countKeywordOccurrences(plainText);
  const foundKeywords = Object.keys(keywordOccurrences);
  const totalKeywordHits = Object.values(keywordOccurrences).reduce((sum, count) => sum + count, 0);
  const keywordDensity = wordCount > 0 ? Number(((totalKeywordHits / wordCount) * 100).toFixed(2)) : 0;

  const first150Words = words.slice(0, 150).join(' ').toLowerCase();
  const keywordsInFirst150 = foundKeywords.filter((keyword) => first150Words.includes(keyword)).length;

  const structureAnalysis = {
    has_h1: extractTagCount(rawContent, 'h1') > 0,
    h2_count: extractTagCount(rawContent, 'h2'),
    h3_count: extractTagCount(rawContent, 'h3'),
    has_meta_description: hasMetaTag(rawContent, 'description'),
    has_title: hasTitleTag(rawContent),
    keywords_in_first_150: keywordsInFirst150,
  };

  const missingKeywords = ALL_KEYWORDS.filter((keyword) => !keywordOccurrences[keyword]);

  const seoScore =
    scoreKeywords(foundKeywords.length) +
    scoreStructure(structureAnalysis) +
    scoreFirstParagraph(keywordsInFirst150) +
    scoreDensity(keywordDensity, foundKeywords.length > 0);

  const gapsByCategory: SEOReport['keyword_gaps']['gaps_by_category'] = {};
  const opportunities: SEOReport['keyword_gaps']['opportunities'] = [];

  for (const [category, keywords] of Object.entries(KEYWORD_CATEGORIES)) {
    const found = keywords.filter((keyword) => keywordOccurrences[keyword]);
    const missing = keywords.filter((keyword) => !keywordOccurrences[keyword]);
    const coveragePercent = keywords.length > 0 ? Math.round((found.length / keywords.length) * 100) : 0;

    gapsByCategory[category] = {
      coverage_percent: coveragePercent,
      found: found.length,
      total_keywords: keywords.length,
      missing_keywords: missing.slice(0, 8),
    };

    if (coveragePercent < 50 && missing.length > 0) {
      opportunities.push({
        category,
        priority: coveragePercent < 25 ? 'high' : 'medium',
        recommended_keywords: missing.slice(0, 5),
        content_suggestion: `Add a section on ${category.toLowerCase()} using terms such as ${missing.slice(0, 3).join(', ')}.`,
      });
    }
  }

  const priorityKeywords = opportunities
    .flatMap((opportunity) => opportunity.recommended_keywords)
    .slice(0, 10);

  const immediateActions: string[] = [];
  if (!structureAnalysis.has_h1) immediateActions.push('Add a single H1 that includes your primary service keyword.');
  if (structureAnalysis.h2_count < 3) immediateActions.push('Break the content into at least three H2 sections for scanability.');
  if (!structureAnalysis.has_meta_description) immediateActions.push('Add a meta description between 140 and 160 characters.');
  if (!structureAnalysis.has_title) immediateActions.push('Add a descriptive title tag with a primary keyword near the front.');
  if (keywordsInFirst150 < 2) immediateActions.push('Use at least two target keywords in the opening 150 words.');
  if (priorityKeywords.length > 0) {
    immediateActions.push(`Work in high-priority gaps such as "${priorityKeywords[0]}" and "${priorityKeywords[1] || priorityKeywords[0]}".`);
  }
  if (immediateActions.length === 0) {
    immediateActions.push('Content structure is solid. Focus on strengthening keyword coverage in body copy and internal links.');
  }

  const topTopic = priorityKeywords[0] || 'ai governance';
  const recommendations = {
    meta_tags: {
      title: `Amplified | ${topTopic.replace(/\b\w/g, (char) => char.toUpperCase())} for Regulated Industries`,
      description:
        'Amplified helps delivery leaders embed AI and run complex change with accountable frameworks. Productised engagements for regulated industries.',
      og_title: `Amplified | ${topTopic.replace(/\b\w/g, (char) => char.toUpperCase())}`,
      og_description:
        'Productised digital consultancy for leaders accountable for AI, delivery, and the change that has to land.',
    },
    suggested_headings: [
      `Why ${topTopic} matters for regulated delivery teams`,
      'How Amplified approaches accountable AI and digital change',
      'What you receive at the end of the engagement',
      'Who this work is for, and who it is not for',
    ],
    ctas: [
      'Book a 30-minute discovery call',
      'Download the engagement playbook',
      'Explore our AI governance services',
      'See how we work with regulated industries',
    ],
    faqs: [
      {
        question: 'What makes Amplified different from a traditional consultancy?',
        answer:
          'Amplified runs named, scoped engagements with fixed timelines and tangible artefacts, rather than open-ended advisory retainers.',
      },
      {
        question: 'Do you work with regulated industries?',
        answer:
          'Yes. Amplified specialises in infrastructure, energy, financial services, public sector, and technology organisations where rigour is essential.',
      },
      {
        question: 'Can you help with AI governance and implementation together?',
        answer:
          'Yes. Governance, structured delivery, and implementation are designed to work as one accountable change programme.',
      },
    ],
  };

  return {
    current_analysis: {
      word_count: wordCount,
      keyword_occurrences: keywordOccurrences,
      total_keywords_found: foundKeywords.length,
      keyword_density: keywordDensity,
      structure_analysis: structureAnalysis,
      missing_keywords: missingKeywords.slice(0, 30),
      seo_score: seoScore,
    },
    keyword_gaps: {
      gaps_by_category: gapsByCategory,
      opportunities,
      priority_keywords: priorityKeywords,
    },
    recommendations,
    content_calendar: buildContentCalendar(),
    summary: {
      current_seo_score: seoScore,
      keywords_found: foundKeywords.length,
      keyword_density: keywordDensity,
      top_priorities: priorityKeywords.slice(0, 6),
      immediate_actions: immediateActions,
    },
  };
}
