'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect } from 'react';

export default function NotFound() {
  // SEO Optimisation for 404 Page
  // Set noindex for 404 pages
  useEffect(() => {
    const metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (metaRobots) {
      metaRobots.content = 'noindex, nofollow';
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'noindex, nofollow';
      document.head.appendChild(meta);
    }

    return () => {
      // Reset to default when leaving 404 page
      const metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
      if (metaRobots) {
        metaRobots.content = 'index, follow';
      }
    };
  }, []);
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-404-title">
            404. Page Not Found
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
          </p>
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/" className="block">
                  <Button 
                    size="lg" 
                    className="w-full flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90"
                    data-testid="button-home"
                  >
                    <Home className="h-5 w-5 mr-2" />
                    Go Home
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => window.history.back()}
                  data-testid="button-back"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Go Back
                </Button>
              </div>

              <div className="border-t pt-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">Quick Navigation</h2>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/services">
                    <Button variant="ghost" size="sm">AI Governance Services</Button>
                  </Link>
                  <Link href="/case-studies">
                    <Button variant="ghost" size="sm">Success Stories</Button>
                  </Link>
                  <Link href="/insights">
                    <Button variant="ghost" size="sm">Expert Insights</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="ghost" size="sm">Contact Us</Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-sm text-muted-foreground mt-8">
          Need help? <Link href="/contact" className="text-primary hover:underline">Contact our support team</Link> or 
          call us at +44 20 7946 0958
        </p>
      </div>
    </div>
  );
}
