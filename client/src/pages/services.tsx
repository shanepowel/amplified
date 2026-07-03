'use client';

import { memo } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HexagonDecoration } from "@/components/hexagon-decoration";
import Image from "next/image";
import { CheckCircle, ArrowRight, Clock, Users, Shield, Lightbulb, Code2, Zap, Target, Handshake, BookOpen } from "lucide-react";
import heroImage from "@assets/36_1760470798015.webp";
import storeImage from "@assets/35_1760470608291.webp";
import coachImage from "@assets/50_1760470599806.webp";
import teamsImage from "@assets/68_1760470836673.webp";
import transformImage from "@assets/52_1760470651176.webp";

interface ServicesProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const Services = memo(function Services({ onOpenConsultation }: ServicesProps) {
  // SEO Optimisation for Services Page
  const services = [
    {
      id: "amp-store",
      icon: Lightbulb,
      title: "ampStore",
      subtitle: "Capability Amplification Through Learning",
      description: "Amp up your skills instantly. Curated learning experiences that transform knowledge into capability, capability into results. Access expert-led training and resources designed for digital transformation.",
      image: storeImage.src,
      features: [
        "Bite-sized learning modules on business operations",
        "Interactive skill assessments", 
        "Progress tracking and certifications",
        "Digital transformation and AI governance content"
      ],
      ideal: "Independent consultants and teams needing capability amplification",
      cta: "Explore ampStore"
    },
    {
      id: "coaching", 
      icon: Users,
      title: "AmplifiedGuide",
      subtitle: "Capability Amplification Through Guidance",
      description: "Amp up your leadership capability. Strategic guidance from senior operators who amplify your decision-making and strategic thinking power for business operations enhancement.",
      image: coachImage.src,
      features: [
        "Strategic planning and digital transformation roadmaps",
        "Operational assessments and business operations enhancement", 
        "Change management guidance for organizational transformation",
        "Process optimisation and workflow improvement"
      ],
      ideal: "SME leaders navigating digital transformation and operational scaling",
      cta: "Get Guidance"
    },
    {
      id: "teams",
      icon: Shield,
      title: "AmplifiedTeams", 
      subtitle: "Capability Amplification Pods",
      description: "Amp up your team capability instantly with our on-demand capability pods. High-quality talent assembled and mobilised within 48 hours, seamlessly integrating into your team and amplifying existing capacity.",
      image: teamsImage.src,
      features: [
        "48-hour capability pod mobilisation",
        "On-demand skill-matched teams",
        "Stable Teams® Framework implementation",
        "No IR35 complications",
        "Immediate productivity through proven methodologies"
      ],
      ideal: "Enterprises needing rapid team capability expansion and operational capacity scaling",
      badge: "48-Hour Deploy",
      cta: "Build Your Pod"
    },
    {
      id: "transformation",
      icon: Code2,
      title: "AmplifiedTech",
      subtitle: "Software Builds & Technical Transformation", 
      description: "Amp up your technology stack and software delivery. Custom-built solutions, modernised platforms, and orchestrated architectures designed for scale, security, and innovation. From legacy systems to cutting-edge implementations.",
      image: transformImage.src,
      features: [
        "Custom software development and platform building",
        "Legacy system modernisation and technical debt remediation",
        "AI-native software engineering and intelligent systems",
        "Cloud architecture, DevOps, and deployment automation", 
        "Multi-agent orchestration and agentic systems",
        "Security, compliance, and scalable infrastructure"
      ],
      ideal: "Enterprises requiring custom software builds, platform modernisation, and advanced technical transformation",
      cta: "Build Your Solution"
    },
    {
      id: "governance",
      icon: Shield,
      title: "AI Governance & Compliance",
      subtitle: "Capability Amplification Through Responsible AI",
      description: "Build trust and ensure compliance with AI governance frameworks. We help organisations align with ISO/IEC 42001, NIST AI Risk Management Framework, and EU AI Act requirements.",
      image: coachImage.src,
      features: [
        "ISO/IEC 42001 and NIST framework alignment",
        "EU AI Act compliance mapping",
        "Risk management and governance frameworks",
        "Responsible AI policy development",
        "Team training and compliance audits"
      ],
      ideal: "Organisations implementing AI systems that require governance, trust, and regulatory compliance",
      cta: "Ensure Governance"
    },
    {
      id: "digital-debt",
      icon: Zap,
      title: "Digital Debt Recovery",
      subtitle: "Capability Amplification Through Clean Foundations",
      description: "Fix the broken systems holding you back. We clean up legacy infrastructure, repair failed automation, and rebuild data foundations so your organisation can scale AI and innovation confidently.",
      image: transformImage.src,
      features: [
        "Legacy system modernisation and cleanup",
        "Broken automation and AI implementation fixes",
        "Data quality and architecture repairs",
        "Technical debt remediation",
        "Foundation rebuilding for future scaling"
      ],
      ideal: "Organisations with complex legacy systems or failed past technology investments",
      cta: "Recover & Rebuild"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Premium glassmorphic design */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-background via-muted/10 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 modern-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold tracking-wide text-primary">Six Ways to Amplify</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="text-services-title">
                Capability{' '}
                <span className="text-primary">Amplification</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-services-subtitle">
                Whatever capability challenge you're facing, <strong className="text-foreground">we have an amp for that</strong>. Six ways to amplify your potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => onOpenConsultation()}
                  data-testid="button-discover-services"
                >
                  Find Your Amp
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.location.href = '/#calculator'}
                  data-testid="button-calculate-potential"
                >
                  Calculate Potential
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50"></div>
              <Image
                src={heroImage}
                alt="Business operations services overview"
                className="relative w-full h-auto rounded-2xl shadow-2xl crystalline-border"
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 50vw"
                data-testid="img-services-hero"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="luminous-divider"></div>

      {/* Methodology Visual Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 modern-pattern opacity-5"></div>
        <HexagonDecoration className="top-5 right-10" size="lg" colour="primary" opacity={0.07} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold tracking-wide text-primary">Our Approach</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Proven <span className="text-primary">Methodology</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From discovery to continuous evolution. A systematic approach to amplifying your capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 bg-background/80 backdrop-blur-sm shadow-soft hover-lift crystalline-border text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary">1</div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">Explore</h3>
              <p className="text-sm text-muted-foreground">Uncover your opportunities and identify high-value use cases aligned with your goals.</p>
            </Card>
            <Card className="p-8 bg-background/80 backdrop-blur-sm shadow-soft hover-lift crystalline-border text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary">2</div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">Ready</h3>
              <p className="text-sm text-muted-foreground">Prepare your organisation with governance frameworks, data foundations, and capability pods.</p>
            </Card>
            <Card className="p-8 bg-background/80 backdrop-blur-sm shadow-soft hover-lift crystalline-border text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary">3</div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">Set</h3>
              <p className="text-sm text-muted-foreground">Design and deploy your solution with rapid, proof-of-value focused implementation.</p>
            </Card>
            <Card className="p-8 bg-background/80 backdrop-blur-sm shadow-soft hover-lift crystalline-border text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary">4</div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">Flow</h3>
              <p className="text-sm text-muted-foreground">Orchestrate, iterate, and evolve your systems until outcomes flow seamlessly.</p>
            </Card>
          </div>
        </div>
      </section>

      <div className="luminous-divider"></div>

      {/* Services Grid - Premium design */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 modern-pattern opacity-5"></div>
        <HexagonDecoration className="top-10 left-10" size="lg" colour="primary" opacity={0.08} />
        <HexagonDecoration className="bottom-20 right-20" size="md" colour="accent" opacity={0.06} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold tracking-wide text-primary">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Six Ways to Get <span className="text-primary">Amplified</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From learning and guidance to capability pods, responsible AI, and fixing broken foundations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="group glass-card overflow-hidden bg-background/80 backdrop-blur-sm shadow-soft hover-lift crystalline-border transition-all duration-500">
                  <div className="relative">
                    <div className="relative w-full h-64 bg-white p-8 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        data-testid={`img-service-${service.id}`}
                      />
                    </div>
                    {service.badge && (
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                        {service.badge}
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardContent className="p-8 group-hover:bg-accent/5 transition-colors duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-glow">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-sm font-medium text-primary">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 group/item">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 transition-transform group-hover/item:scale-125" />
                          <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-muted/30 rounded-lg p-4 mb-6 transition-colors group-hover:bg-primary/5">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Ideal for:</strong> {service.ideal}
                      </p>
                    </div>
                    
                    <Link href={`/${service.id}`}>
                      <Button
                        className="w-full bg-primary/5 text-primary border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 group/btn"
                        variant="outline"
                        data-testid={`button-service-${service.id}`}
                      >
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <div className="luminous-divider"></div>

      {/* Core Values Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/10 relative overflow-hidden">
        <div className="absolute inset-0 modern-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold tracking-wide text-primary" data-testid="text-values-badge">We Practice What We Preach</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-values-title">
              How We <span className="text-primary">Work</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-values-description">
              These values aren't just posters on the wall. They're how we hire, work with clients, and hold ourselves accountable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 shadow-soft hover-glow crystalline-border bg-gradient-to-br from-background to-muted/20" data-testid="card-value-rigorous">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2" data-testid="text-value-rigorous">Rigorous</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We hold ourselves and our clients to high standards because shortcuts compound into bigger problems.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft hover-glow crystalline-border bg-gradient-to-br from-background to-muted/20" data-testid="card-value-trusting">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2" data-testid="text-value-trusting">Trusting</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We build cultures where people are empowered to make decisions, not paralysed by approval chains.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft hover-glow crystalline-border bg-gradient-to-br from-background to-muted/20" data-testid="card-value-people-centred">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2" data-testid="text-value-people-centred">People-Centred</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Organisations succeed when their people are truly at the centre of strategy, not an afterthought.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft hover-glow crystalline-border bg-gradient-to-br from-background to-muted/20" data-testid="card-value-pragmatic">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2" data-testid="text-value-pragmatic">Pragmatic</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We deliver excellence in what matters most and resist the perfectionism that prevents progress.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft hover-glow crystalline-border bg-gradient-to-br from-background to-muted/20" data-testid="card-value-curious">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2" data-testid="text-value-curious">Curious</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We stay ahead of change by learning constantly and challenging our own assumptions.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft hover-glow crystalline-border bg-gradient-to-br from-background to-muted/20" data-testid="card-value-tech-excellence">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2" data-testid="text-value-tech-excellence">Tech Excellence</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We deeply understand AI, data, and security. using technology responsibly as a smart solution, not a new problem.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-foreground italic font-semibold max-w-3xl mx-auto">
              "We measure our impact not in billable hours, but in sustained behaviour change and organisational capability that outlasts our involvement."
            </p>
          </div>
        </div>
      </section>

      <div className="luminous-divider"></div>

      {/* Why Amplified Works Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-muted/20 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 modern-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold tracking-wide text-primary">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Being <span className="text-primary">Amplified</span> Works
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just solve problems; we amplify your capability to solve them yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-background/80 backdrop-blur-sm shadow-soft hover-lift crystalline-border text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">Capability Amplification</h3>
              <p className="text-muted-foreground">
                We don't replace your capability; we amplify it. Every solution makes you stronger, not dependent.
              </p>
            </Card>
            
            <Card className="p-8 bg-background/80 backdrop-blur-sm shadow-soft hover-lift crystalline-border text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">Cultural Amplification</h3>
              <p className="text-muted-foreground">
                We amplify what makes your team unique. Your culture becomes your competitive advantage.
              </p>
            </Card>
            
            <Card className="p-8 bg-background/80 backdrop-blur-sm shadow-soft hover-lift crystalline-border text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">Amplified Innovation</h3>
              <p className="text-muted-foreground">
                Our innovations like the Stable Teams® Framework enable digital transformation. When you're amplified, you innovate.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-medium hover:shadow-lg transition-all"
              onClick={() => onOpenConsultation()}
              data-testid="button-start-journey"
            >
              Get Amplified
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Services;