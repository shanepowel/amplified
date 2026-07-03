# Amplified SEO Keyword Optimizer

Comprehensive Python-based SEO analysis tool specifically designed for www.amplified.co.uk's AI consultancy and digital transformation content.

## Overview

This tool provides intelligent SEO analysis and optimization recommendations for content targeting AI consultancy, digital transformation, and hybrid service keywords. It includes keyword density analysis, gap identification, content enhancement suggestions, and automated content calendar generation.

## Features

### 1. Keyword Analysis
- **13 categories** of keywords across 6 major groups:
  - Primary AI Consultancy (13 keywords)
  - Core Digital Consultancy (17 keywords)
  - AI + Digital Hybrid (12 keywords)
  - Solution-Focused (15 keywords)
  - Industry-Specific (8 keywords)
  - Long-Tail & Specific (11 keywords)

### 2. Content Analysis
- Word count and keyword occurrence tracking
- Keyword density calculation (with ideal 1-2% target)
- Structure analysis (H1, H2, H3, meta tags)
- First 150 words optimization check
- SEO score (0-100) with breakdown

### 3. Keyword Gap Analysis
- Coverage percentage by category
- Missing high-priority keywords
- Content recommendations for gaps
- Opportunity identification with priority ranking

### 4. Content Enhancement
- Optimized meta tags (title, description, OG tags)
- SEO-friendly heading suggestions
- Keyword-rich CTA generation
- FAQ section with targeted Q&A
- Internal linking recommendations

### 5. Strategic Planning
- 3-month content calendar generation
- Weekly content topics with keyword focus
- Content type recommendations (blog, case study, white paper)
- Goal-oriented content strategy

### 6. Comprehensive Reporting
- Keyword placement audit
- Before/after SEO scores
- Priority action items
- Missing keyword identification
- Content calendar suggestions

## How to Use

### Web Interface

1. Navigate to `/seo-optimizer` in your browser
2. Paste your content (HTML, plain text, or article)
3. Click "Analyze SEO"
4. Review comprehensive report across 5 tabs:
   - **Summary**: Quick overview and immediate actions
   - **Keywords**: All found keywords with occurrence counts
   - **Gaps**: Missing keywords by category
   - **Recommendations**: Meta tags, headings, CTAs, FAQs
   - **Content Calendar**: 3-month keyword-focused strategy

### Command Line

```bash
# Analyze content from file
python3 server/seo_optimizer.py content.html

# Analyze content directly
python3 server/seo_optimizer.py --analyze "Your content here"
```

### API Endpoint

```typescript
// POST /api/seo-analyze
{
  "content": "Your content text here..."
}

// Response
{
  "success": true,
  "data": {
    "current_analysis": {...},
    "keyword_gaps": {...},
    "recommendations": {...},
    "content_calendar": [...],
    "summary": {...}
  }
}
```

## Keyword Categories

### Primary AI Consultancy Keywords
Target these for core AI service pages:
- AI consultancy
- artificial intelligence consulting
- AI strategy consulting
- AI implementation services
- AI transformation consulting
- enterprise AI solutions
- business AI consulting
- AI adoption strategy
- AI-powered business solutions
- machine learning consultancy
- generative AI consulting
- AI integration services
- AI enablement consulting

### AI + Digital Hybrid Keywords
Perfect for integrated service offerings:
- AI-driven marketing strategies
- AI content creation
- automated marketing
- AI customer experience solutions
- conversational AI services
- AI process automation
- AI business optimization
- AI-powered branding
- intelligent digital solutions
- predictive analytics consulting
- data-driven business strategy
- AI consulting for digital transformation

### Solution-Focused Keywords
ROI and outcome-oriented:
- increase business efficiency
- boost digital presence
- drive measurable growth
- automate business processes
- streamline operations
- reduce manual work
- qualified lead generation
- B2B lead automation
- sales optimization
- data-driven consulting
- evidence-based digital strategy
- AI ROI optimization
- business transformation through AI
- enterprise digital strategy
- scalable AI solutions

## SEO Score Breakdown

The tool calculates an SEO score (0-100) based on:

1. **Keyword Presence (40 points)**
   - 10+ keywords found: 40 points
   - 5-9 keywords: 25 points
   - 2-4 keywords: 15 points

2. **Content Structure (30 points)**
   - H1 tag present: 10 points
   - 3+ H2 tags: 10 points
   - Meta description: 5 points
   - Title tag: 5 points

3. **First Paragraph Optimization (15 points)**
   - 2+ keywords in first 150 words: 15 points
   - 1 keyword: 8 points

4. **Keyword Density (15 points)**
   - Ideal 1-2% density: 15 points
   - 0.5-3% density: 10 points
   - Any keywords present: 5 points

## Best Practices

### Ideal Content Structure

```html
<!DOCTYPE html>
<html>
<head>
  <title>AI Consultancy Services | Digital Transformation | Amplified</title>
  <meta name="description" content="Expert AI consultancy and digital transformation services. Drive measurable growth with our AI implementation services and data-driven business strategy.">
</head>
<body>
  <h1>AI Consultancy for Business Transformation</h1>
  
  <!-- First paragraph should include 2-3 keywords -->
  <p>Our AI consultancy services help businesses implement artificial intelligence 
  solutions to drive measurable growth and increase business efficiency...</p>
  
  <h2>AI-Driven Marketing Strategies</h2>
  <p>Leverage AI-powered business solutions for automated marketing...</p>
  
  <h2>Enterprise AI Solutions</h2>
  <p>Our enterprise AI implementation services provide...</p>
</body>
</html>
```

### Keyword Density Tips

- Target: 1-2% keyword density
- Don't over-optimize (keyword stuffing)
- Use variations and synonyms naturally
- Focus on user experience first

### Content Calendar Usage

The generated content calendar provides:
- Weekly content ideas
- Primary keywords to target
- Content type recommendations
- SEO goals for each piece

Use this to plan blog posts, case studies, and white papers that systematically improve SEO coverage.

## Technical Details

### Python Dependencies
- No external dependencies required (uses Python standard library)
- Compatible with Python 3.7+

### File Structure
```
server/
  seo_optimizer.py      # Main Python tool
  routes.ts             # API endpoint (/api/seo-analyze)
client/src/pages/
  seo-optimizer.tsx     # Web interface
```

### Architecture
1. **Frontend**: React + TanStack Query for UI and data fetching
2. **Backend**: Express.js spawns Python process
3. **Python Tool**: Analyzes content and generates JSON report
4. **Data Flow**: Content → API → Python → JSON Report → Frontend Display

## Examples

### Sample Input
```
<h1>Digital Transformation Services</h1>
<p>We help businesses modernize their operations...</p>
```

### Sample Output
```json
{
  "summary": {
    "current_seo_score": 35,
    "keywords_found": 2,
    "keyword_density": 0.8,
    "top_priorities": [
      "AI consultancy",
      "AI-driven marketing strategies",
      "enterprise AI solutions"
    ],
    "immediate_actions": [
      "Add 8 missing high-priority keywords",
      "Optimize meta tags with AI consultancy keywords",
      "Improve keyword density from 0.8% to 1.5%"
    ]
  }
}
```

## Limitations

- Does not perform live URL crawling (paste content manually)
- Cannot access password-protected content
- English language optimization only
- Best for text content (images/video not analyzed)

## Future Enhancements

Potential additions:
- Competitor keyword analysis
- Backlink opportunity identification
- Image alt text optimization
- Schema markup recommendations
- Mobile optimization checks
- Page speed impact analysis

## Support

For issues or questions about the SEO optimizer:
1. Check the console logs for errors
2. Ensure Python 3.11+ is installed
3. Verify content is properly formatted
4. Contact the development team at hi@amplified.co.uk

## License

Internal tool for Amplified Limited use only.
