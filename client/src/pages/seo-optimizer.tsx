'use client';

import { memo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  Search, TrendingUp, FileText, CheckCircle2, AlertCircle, 
  Sparkles, Target, Calendar, Lightbulb, BarChart3
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface SEOReport {
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
    gaps_by_category: Record<string, any>;
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

const SEOOptimizer = memo(function SEOOptimizer() {
  const { toast } = useToast();
  const [content, setContent] = useState("");
  const [report, setReport] = useState<SEOReport | null>(null);
  const mutation = useMutation({
    mutationFn: async (contentToAnalyze: string) => {
      const response = await apiRequest("POST", "/api/seo-analyze", { content: contentToAnalyze });
      const jsonResponse = await response.json();
      return jsonResponse.data as SEOReport;
    },
    onSuccess: (data) => {
      setReport(data);
      toast({
        title: "✅ SEO Analysis Complete",
        description: `Found ${data.summary.keywords_found} keywords with ${data.summary.current_seo_score}/100 SEO score`,
      });
    },
    onError: () => {
      toast({
        title: "Analysis Failed",
        description: "Could not analyze content. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleAnalyze = () => {
    if (!content.trim()) {
      toast({
        title: "No Content",
        description: "Please paste some content to analyze",
        variant: "destructive",
      });
      return;
    }
    mutation.mutate(content);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4" data-testid="badge-seo-tool">
            <Sparkles className="h-3 w-3 mr-1" />
            AI-Powered SEO Tool
          </Badge>
          <h1 className="text-3xl md:text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-page-title">
            SEO Keyword Optimizer
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Optimize your content for AI consultancy and digital transformation keywords. Get instant analysis, recommendations, and content calendar.
          </p>
        </div>

        {/* Input Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Paste Your Content
            </CardTitle>
            <CardDescription>
              Add your blog post, web page, or article content for comprehensive SEO analysis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Paste your content here... Include HTML tags, meta descriptions, headings, and body text for best analysis."
              className="min-h-[300px] font-mono text-sm"
              data-testid="textarea-content"
            />
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                {content.split(/\s+/).filter(w => w).length} words
              </span>
              <Button
                onClick={handleAnalyze}
                disabled={mutation.isPending}
                className="bg-primary"
                data-testid="button-analyze"
              >
                {mutation.isPending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    Analyze SEO
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {report && (
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <BarChart3 className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground" data-testid="text-seo-score">
                      {report.summary.current_seo_score}
                    </div>
                    <div className="text-sm text-muted-foreground">SEO Score</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Target className="h-8 w-8 mx-auto mb-2 text-accent" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      {report.summary.keywords_found}
                    </div>
                    <div className="text-sm text-muted-foreground">Keywords Found</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-500" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      {report.summary.keyword_density}%
                    </div>
                    <div className="text-sm text-muted-foreground">Keyword Density</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <AlertCircle className="h-8 w-8 mx-auto mb-2 text-accent" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      {report.current_analysis.missing_keywords.length}
                    </div>
                    <div className="text-sm text-muted-foreground">Missing Keywords</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs for detailed analysis */}
            <Tabs defaultValue="summary" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="summary">Summary</TabsTrigger>
                <TabsTrigger value="keywords">Keywords</TabsTrigger>
                <TabsTrigger value="gaps">Gaps</TabsTrigger>
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                <TabsTrigger value="calendar">Content Calendar</TabsTrigger>
              </TabsList>

              {/* Summary Tab */}
              <TabsContent value="summary" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Immediate Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {report.summary.immediate_actions.map((action, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{action}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Priority Keywords</CardTitle>
                    <CardDescription>Add these keywords to your content immediately</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {report.summary.top_priorities.map((keyword, idx) => (
                        <Badge key={idx} variant="secondary" className="text-sm">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Keywords Tab */}
              <TabsContent value="keywords" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Keyword Occurrences</CardTitle>
                    <CardDescription>Keywords found in your content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {Object.entries(report.current_analysis.keyword_occurrences)
                        .sort(([, a], [, b]) => (b as number) - (a as number))
                        .slice(0, 20)
                        .map(([keyword, count]) => (
                          <div key={keyword} className="flex justify-between items-center py-2 border-b last:border-0">
                            <span className="font-medium">{keyword}</span>
                            <Badge variant="outline">{count} times</Badge>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Gaps Tab */}
              <TabsContent value="gaps" className="space-y-4">
                {Object.entries(report.keyword_gaps.gaps_by_category).map(([category, data]: [string, any]) => (
                  <Card key={category}>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>{category}</CardTitle>
                        <Badge variant={data.coverage_percent > 50 ? "default" : "destructive"}>
                          {data.coverage_percent}% coverage
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Progress value={data.coverage_percent} />
                      <div className="text-sm text-muted-foreground">
                        {data.found} of {data.total_keywords} keywords found
                      </div>
                      {data.missing_keywords && data.missing_keywords.length > 0 && (
                        <div>
                          <div className="text-sm font-medium mb-2">Missing Keywords:</div>
                          <div className="flex flex-wrap gap-2">
                            {data.missing_keywords.map((kw: string, idx: number) => (
                              <Badge key={idx} variant="outline">
                                {kw}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Recommendations Tab */}
              <TabsContent value="recommendations" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Meta Tags</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-sm font-medium mb-1">Title:</div>
                      <div className="p-3 bg-muted rounded text-sm">{report.recommendations.meta_tags.title}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Description:</div>
                      <div className="p-3 bg-muted rounded text-sm">{report.recommendations.meta_tags.description}</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Suggested Headings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {report.recommendations.suggested_headings.map((heading, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-2 bg-muted rounded">
                          <span className="text-primary font-bold">H{idx + 2}:</span>
                          <span>{heading}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Call-to-Action Suggestions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-2">
                      {report.recommendations.ctas.map((cta, idx) => (
                        <Badge key={idx} variant="secondary" className="p-2 justify-center">
                          {cta}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>FAQ Section</CardTitle>
                    <CardDescription>Add these to your content</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {report.recommendations.faqs.map((faq, idx) => (
                      <div key={idx} className="border-l-4 border-primary pl-4">
                        <div className="font-semibold mb-2">{faq.question}</div>
                        <div className="text-sm text-muted-foreground">{faq.answer}</div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Content Calendar Tab */}
              <TabsContent value="calendar" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      3-Month Content Calendar
                    </CardTitle>
                    <CardDescription>Keyword-optimized content strategy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {report.content_calendar.map((item, idx) => (
                        <div key={idx} className="p-4 border rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <Badge variant="outline" className="mb-2">Week {item.week}</Badge>
                              <h4 className="font-semibold text-lg">{item.title}</h4>
                            </div>
                            <Badge>{item.type}</Badge>
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">
                            <Lightbulb className="h-4 w-4 inline mr-1" />
                            {item.goal}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.keywords.map((kw, kidx) => (
                              <Badge key={kidx} variant="secondary" className="text-xs">
                                {kw}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
});

export default SEOOptimizer;
