'use client';

import { useState, memo, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { TrendingUp, AlertTriangle, TrendingDown, Zap } from "lucide-react";

const calculatorSchema = z.object({
  teamSize: z.number().min(1, "Must have at least 1 team member"),
  productivity: z.number().min(1, "Rate productivity 1-10").max(10),
  collaboration: z.number().min(1, "Rate collaboration 1-10").max(10),
  processMaturity: z.number().min(1, "Rate process maturity 1-10").max(10),
  email: z.string().email().optional().or(z.literal("")),
});

interface CalculatorProps {
  onOpenConsultation: () => void;
}

const AiCalculator = memo(function AiCalculator({ onOpenConsultation }: CalculatorProps) {
  const [results, setResults] = useState<any>(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [counter, setCounter] = useState(0);
  const { toast } = useToast();

  // Animate counter for the trap statistic
  useEffect(() => {
    const target = 50;
    const increment = target / 50;
    const timer = setInterval(() => {
      setCounter(prev => {
        if (prev >= target) {
          clearInterval(timer);
          return target;
        }
        return prev + increment;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  const form = useForm<any>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      teamSize: 0,
      productivity: 5,
      collaboration: 5,
      processMaturity: 5,
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof calculatorSchema>) => {
      // Calculate team performance score
      const avgScore = (data.productivity + data.collaboration + data.processMaturity) / 3;
      const potential = 100 - avgScore * 10;
      const annualGain = (potential / 100) * data.teamSize * 25000; // £25k productivity per person per year potential
      
      return {
        avgScore,
        potential,
        annual: Math.round(annualGain),
        monthly: Math.round(annualGain / 12),
        breakdown: {
          productivity: data.productivity,
          collaboration: data.collaboration,
          processMaturity: data.processMaturity,
        }
      };
    },
    onSuccess: (data) => {
      setResults(data);
      toast({
        title: "Assessment Complete",
        description: "Your team's performance potential has been calculated.",
      });
    },
    onError: (error) => {
      toast({
        title: "Assessment Failed",
        description: "Please check your inputs and try again.",
        variant: "destructive",
      });
      console.error("Assessment error:", error);
    },
  });

  const onSubmit = (data: z.infer<typeof calculatorSchema>) => {
    mutation.mutate(data);
  };

  return (
    <section id="calculator" className="py-28 md:py-36 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 modern-pattern opacity-10"></div>
      <div className="luminous-divider absolute top-0 left-0 right-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {!showCalculator ? (
          <>
            {/* The Hidden Growth Trap - Premium Visualisation */}
            <div className="mb-24">
              <div className="text-center mb-16">
                <div className="inline-block bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                  <span className="text-sm font-semibold tracking-wide text-accent flex items-center gap-2 justify-center">
                    <AlertTriangle className="h-4 w-4" />
                    The Hidden Growth Trap
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-trap-title">
                  50% of Businesses Face a <span className="text-accent font-bold">Hidden Growth Trap</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  They invest in AI, automation, and digital transformation. But without the right foundations, they fail within 5 years. Here's why.
                </p>
              </div>

              {/* Animated Stat - 50% Failure Rate */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/2 border-accent/20 shadow-soft hover-glow crystalline-border">
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold text-accent mb-2" data-testid="text-failure-rate">
                      {Math.round(counter)}%
                    </div>
                    <p className="text-muted-foreground font-semibold">Fail Within 5 Years</p>
                    <p className="text-xs text-muted-foreground mt-2">U.S. Bureau of Labor Statistics</p>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/2 border-primary/20 shadow-soft hover-glow crystalline-border">
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold text-primary mb-2">82%</div>
                    <p className="text-muted-foreground font-semibold">Due to Cash Flow Issues</p>
                    <p className="text-xs text-muted-foreground mt-2">Core Reason for Failure</p>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/2 border-primary/20 shadow-soft hover-glow crystalline-border">
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold text-primary mb-2">48h</div>
                    <p className="text-muted-foreground font-semibold">Before Impact Compounds</p>
                    <p className="text-xs text-muted-foreground mt-2">Critical Window to Act</p>
                  </div>
                </Card>
              </div>

              {/* The Trap Cycle - Visual Explanation */}
              <Card className="bg-gradient-to-br from-background to-muted/20 border-primary/10 shadow-medium">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">How the Trap Happens</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Stage 1 */}
                    <div className="relative">
                      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-primary to-transparent hidden lg:block"></div>
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 mb-4">
                          <span className="font-bold text-primary">1</span>
                        </div>
                        <h4 className="font-bold text-foreground mb-2">Invest in Tech</h4>
                        <p className="text-sm text-muted-foreground">You invest heavily in AI, automation, and digital tools.</p>
                      </div>
                    </div>

                    {/* Stage 2 */}
                    <div className="relative">
                      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-accent to-transparent hidden lg:block"></div>
                      <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border border-accent/20">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/20 mb-4">
                          <span className="font-bold text-accent">2</span>
                        </div>
                        <h4 className="font-bold text-foreground mb-2">Lack Foundations</h4>
                        <p className="text-sm text-muted-foreground">But teams, processes & culture aren't ready for change.</p>
                      </div>
                    </div>

                    {/* Stage 3 */}
                    <div className="relative">
                      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-accent to-transparent hidden lg:block"></div>
                      <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border border-accent/20">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/20 mb-4">
                          <TrendingDown className="h-5 w-5 text-accent" />
                        </div>
                        <h4 className="font-bold text-foreground mb-2">Cash Flow Crisis</h4>
                        <p className="text-sm text-muted-foreground">Productivity drops. Costs rise. Cash flow deteriorates.</p>
                      </div>
                    </div>

                    {/* Stage 4 */}
                    <div className="relative">
                      <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-xl p-6 border border-destructive/20">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-destructive/20 mb-4">
                          <AlertTriangle className="h-5 w-5 text-destructive" />
                        </div>
                        <h4 className="font-bold text-foreground mb-2">The Trap Closes</h4>
                        <p className="text-sm text-muted-foreground">Unable to recover. Business fails within 5 years.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-primary/10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <Zap className="h-6 w-6 text-primary mt-1" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-2">The Problem</h4>
                        <p className="text-muted-foreground">
                          You can't automate away bad processes or culture. Technology amplifies existing problems. Without elastic operations, stable teams, and process maturity, digital transformation becomes a growth trap.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <TrendingUp className="h-6 w-6 text-accent mt-1" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-2">The Solution</h4>
                        <p className="text-muted-foreground">
                          Amplified breaks the trap by building foundations first: stable teams, elastic operations, and process maturity. Only then does technology amplify your capability.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA to Assessment */}
              <div className="text-center mt-16">
                <Button
                  onClick={() => setShowCalculator(true)}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] px-10 py-6 text-lg"
                  data-testid="button-start-assessment"
                >
                  Assess Your Risk
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-calculator-title">
                High Performing Team Assessment
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Discover your team's performance potential and amplification opportunities
              </p>
              <Button
                variant="ghost"
                onClick={() => setShowCalculator(false)}
                className="mt-4 text-muted-foreground hover:text-foreground"
                data-testid="button-back-to-trap"
              >
                ← Back to Trap Overview
              </Button>
            </div>
        
        <Card className="shadow-xl border border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Assess Your Team Performance Potential
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="teamSize">Team Size</Label>
                  <Input
                    id="teamSize"
                    type="number"
                    min="1"
                    {...form.register("teamSize", { valueAsNumber: true })}
                    placeholder="e.g., 50"
                    data-testid="input-team-size"
                  />
                  {form.formState.errors.teamSize && (
                    <p className="text-sm text-destructive">{String(form.formState.errors.teamSize?.message)}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="productivity">Current Productivity Level (1-10)</Label>
                  <Input
                    id="productivity"
                    type="number"
                    min="1"
                    max="10"
                    {...form.register("productivity", { valueAsNumber: true })}
                    placeholder="e.g., 6"
                    data-testid="input-productivity"
                  />
                  {form.formState.errors.productivity && (
                    <p className="text-sm text-destructive">{String(form.formState.errors.productivity?.message)}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="collaboration">Team Collaboration Effectiveness (1-10)</Label>
                  <Input
                    id="collaboration"
                    type="number"
                    min="1"
                    max="10"
                    {...form.register("collaboration", { valueAsNumber: true })}
                    placeholder="e.g., 5"
                    data-testid="input-collaboration"
                  />
                  {form.formState.errors.collaboration && (
                    <p className="text-sm text-destructive">{String(form.formState.errors.collaboration?.message)}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="processMaturity">Process Maturity (1-10)</Label>
                  <Input
                    id="processMaturity"
                    type="number"
                    min="1"
                    max="10"
                    {...form.register("processMaturity", { valueAsNumber: true })}
                    placeholder="e.g., 4"
                    data-testid="input-process-maturity"
                  />
                  {form.formState.errors.processMaturity && (
                    <p className="text-sm text-destructive">{String(form.formState.errors.processMaturity?.message)}</p>
                  )}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="email">Email (Optional; for detailed report)</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    placeholder="your.email@company.com"
                    data-testid="input-email"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-destructive">{String(form.formState.errors.email?.message)}</p>
                  )}
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full flex items-center justify-center bg-primary text-white py-4 text-lg font-semibold hover:bg-primary/90 shadow-lg border border-primary/20"
                disabled={mutation.isPending}
                data-testid="button-calculate"
              >
                {mutation.isPending ? "Assessing..." : "Calculate Team Amplification Potential"}
              </Button>
            </form>

            {results && (
              <Card className="mt-8 bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground" data-testid="text-results-title">
                      Your Team Performance Potential
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-2" data-testid="text-monthly-savings">
                        £{results.monthly?.toLocaleString()}
                      </div>
                      <div className="text-muted-foreground">Monthly Amplification Potential</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-2" data-testid="text-annual-savings">
                        £{results.annual?.toLocaleString()}
                      </div>
                      <div className="text-muted-foreground">Annual Amplification Potential</div>
                    </div>
                  </div>

                  {results.breakdown && (
                    <div className="mb-6 p-4 bg-background rounded-lg">
                      <h4 className="font-semibold mb-3">Performance Scores:</h4>
                      <div className="grid grid-cols-1 gap-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span>Productivity Level:</span>
                          <span className="font-medium">{results.breakdown.productivity}/10</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Collaboration Effectiveness:</span>
                          <span className="font-medium">{results.breakdown.collaboration}/10</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Process Maturity:</span>
                          <span className="font-medium">{results.breakdown.processMaturity}/10</span>
                        </div>
                        <div className="border-t pt-2 mt-2 flex justify-between items-center font-bold">
                          <span>Amplification Opportunity:</span>
                          <span className="text-accent">{Math.round(results.potential)}%</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="text-center">
                    <Button
                      onClick={onOpenConsultation}
                      className="bg-primary text-primary-foreground px-8 py-3 font-semibold hover:bg-primary/90"
                      data-testid="button-book-strategy"
                    >
                      Book Strategy Session
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
          </>
        )}
      </div>
    </section>
  );
});

export default AiCalculator;
