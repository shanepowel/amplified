'use client';

import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitConsultationRequest, type ConsultationResponse } from "@/lib/api";
import type { InsertConsultationRequest, CustomerPersona } from "@shared/schema";
import { insertConsultationRequestSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, ArrowRight, Calendar, Send, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ContactProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const Contact = memo(function Contact({ onOpenConsultation }: ContactProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [showCalendar, setShowCalendar] = useState(false);

  const form = useForm<InsertConsultationRequest>({
    resolver: zodResolver(insertConsultationRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      serviceInterest: "discovery",
      persona: undefined,
      urgencyLevel: "exploring",
      description: "",
      serviceType: "",
    },
  });

  const mutation = useMutation({
    mutationFn: submitConsultationRequest,
    onSuccess: (response: ConsultationResponse) => {
      const hasWarnings = response.warnings && response.warnings.length > 0;
      if (hasWarnings) {
        toast({
          title: "Message Received",
          description: "Your message has been saved. We will be in touch within two business days.",
          variant: "default",
        });
      } else {
        toast({
          title: "Message Sent",
          description: "We will be in touch within two business days.",
        });
      }
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/consultation-requests"] });
    },
    onError: () => {
      toast({
        title: "Failed to Send",
        description: "Please try again or email us directly at hello@amplified.co.uk",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertConsultationRequest) => {
    mutation.mutate(data);
  };
  const fieldBase =
    "w-full font-sans text-sm rounded px-4 py-3 border-0 border-b-2 bg-transparent focus:outline-none focus:ring-0 transition-colors duration-200";
  const fieldStyle = {
    borderColor: "#DDD9EA",
    color: "#181F4F",
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAFAF9" }}>

      {/* HERO */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ backgroundColor: "#181F4F" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] mb-6" style={{ color: "#F85C70" }}>
                Get in Touch
              </p>
              <h1
                className="font-display text-5xl lg:text-6xl leading-tight"
                style={{ color: "#FFFFFF", fontWeight: 400 }}
                data-testid="text-contact-title"
              >
                Let's talk
              </h1>
            </div>
            <div>
              <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
                Whether you are starting an AI governance programme, rethinking a delivery model, or
                exploring what the Stable Teams framework could do for your organisation, we will give
                you a straight answer. No slide decks in the first meeting.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowCalendar(true)}
                  className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                  style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e"; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70"; }}
                  data-testid="button-book-call"
                >
                  <Calendar className="h-4 w-4" />
                  Book a Discovery Call
                </button>
                <button
                  onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="amp-focus-ring-on-navy inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#FFFFFF", backgroundColor: "transparent" }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.07)"; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; }}
                  data-testid="button-send-message"
                >
                  Send a Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICES BAND */}
      <section
        id="locations"
        className="border-b"
        style={{ backgroundColor: "#F2F0F7", borderColor: "#DDD9EA" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l" style={{ borderColor: "#C8C4D8" }}>

            {/* London */}
            <div className="p-10 border-r border-b" style={{ borderColor: "#C8C4D8" }}>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-4 w-4" style={{ color: "#F85C70" }} />
                <p className="font-mono text-xs uppercase tracking-[0.12em]" style={{ color: "#6B6E81" }}>
                  London, United Kingdom
                </p>
              </div>
              <h2 className="font-display text-3xl mb-2" style={{ color: "#181F4F", fontWeight: 400 }}>
                London
              </h2>
              <p className="font-sans text-sm mb-6" style={{ color: "#65677B" }}>
                Our UK headquarters. Primary client-facing office for infrastructure, energy, financial services,
                and public sector work.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.08em] mb-1" style={{ color: "#6B6E81" }}>Address</p>
                  <p className="font-sans text-sm" style={{ color: "#181F4F" }}>7 Bell Yard, London WC2A 2JR</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.08em] mb-1" style={{ color: "#6B6E81" }}>Email</p>
                  <a
                    href="mailto:london@amplified.co.uk"
                    className="font-sans text-sm transition-colors duration-200"
                    style={{ color: "#F85C70" }}
                    data-testid="text-email-london"
                  >
                    london@amplified.co.uk
                  </a>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.08em] mb-1" style={{ color: "#6B6E81" }}>Hours</p>
                  <p className="font-sans text-sm" style={{ color: "#65677B" }}>Monday to Friday, 09:00 to 18:00 GMT</p>
                </div>
              </div>
            </div>

            {/* Porto */}
            <div className="p-10 border-r border-b" style={{ borderColor: "#C8C4D8" }}>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-4 w-4" style={{ color: "#60266A" }} />
                <p className="font-mono text-xs uppercase tracking-[0.12em]" style={{ color: "#6B6E81" }}>
                  Porto, Portugal
                </p>
              </div>
              <h2 className="font-display text-3xl mb-2" style={{ color: "#181F4F", fontWeight: 400 }}>
                Porto
              </h2>
              <p className="font-sans text-sm mb-6" style={{ color: "#65677B" }}>
                Our European technology and delivery hub. Home to our tech build capability and the AmplifiedTeams
                Stable Teams practice.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.08em] mb-1" style={{ color: "#6B6E81" }}>Email</p>
                  <a
                    href="mailto:porto@amplified.co.uk"
                    className="font-sans text-sm transition-colors duration-200"
                    style={{ color: "#60266A" }}
                    data-testid="text-email-porto"
                  >
                    porto@amplified.co.uk
                  </a>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.08em] mb-1" style={{ color: "#6B6E81" }}>Hours</p>
                  <p className="font-sans text-sm" style={{ color: "#65677B" }}>Monday to Friday, 09:00 to 18:00 WET</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT: FORM + SIDEBAR */}
      <section className="py-24 lg:py-32" id="contact-form">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* FORM - 3 cols */}
            <div className="lg:col-span-3">
              <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
                Send a Message
              </p>
              <h2 className="font-display text-4xl mb-6" style={{ color: "#181F4F", fontWeight: 400 }}>
                Tell us what you are working on
              </h2>
              <p className="font-sans text-base leading-relaxed mb-10" style={{ color: "#65677B" }}>
                Send a short brief and we will respond within two working days. If your problem is one of the three named engagements (Squad Blueprint, The Forge, Delivery Compass) we will say so up front. If it is something different, we will tell you whether we are the right partnership for it, and if we are not, we will point you towards someone better suited. The first conversation is a thirty-minute call, no obligation. We will share examples of recent comparable work, talk through how we would approach the engagement, and confirm scope, timing, and the team we would put on it before any commercial conversation.
              </p>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="name"
                      className="font-mono text-xs uppercase tracking-[0.08em] mb-2 block"
                      style={{ color: "#6B6E81" }}
                    >
                      Full Name *
                    </Label>
                    <input
                      id="name"
                      className={fieldBase}
                      style={fieldStyle}
                      placeholder="Jane Smith"
                      data-testid="input-name"
                      {...form.register("name")}
                    />
                    {form.formState.errors.name && (
                      <p className="font-sans text-xs mt-1" style={{ color: "#F85C70" }}>
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="font-mono text-xs uppercase tracking-[0.08em] mb-2 block"
                      style={{ color: "#6B6E81" }}
                    >
                      Email Address *
                    </Label>
                    <input
                      id="email"
                      type="email"
                      className={fieldBase}
                      style={fieldStyle}
                      placeholder="jane@organisation.com"
                      data-testid="input-email"
                      {...form.register("email")}
                    />
                    {form.formState.errors.email && (
                      <p className="font-sans text-xs mt-1" style={{ color: "#F85C70" }}>
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="company"
                      className="font-mono text-xs uppercase tracking-[0.08em] mb-2 block"
                      style={{ color: "#6B6E81" }}
                    >
                      Organisation *
                    </Label>
                    <input
                      id="company"
                      className={fieldBase}
                      style={fieldStyle}
                      placeholder="Your Organisation"
                      data-testid="input-company"
                      {...form.register("company")}
                    />
                    {form.formState.errors.company && (
                      <p className="font-sans text-xs mt-1" style={{ color: "#F85C70" }}>
                        {form.formState.errors.company.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="phone"
                      className="font-mono text-xs uppercase tracking-[0.08em] mb-2 block"
                      style={{ color: "#6B6E81" }}
                    >
                      Phone Number
                    </Label>
                    <input
                      id="phone"
                      type="tel"
                      className={fieldBase}
                      style={fieldStyle}
                      placeholder="+44 20 1234 5678"
                      data-testid="input-phone"
                      {...form.register("phone")}
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="description"
                    className="font-mono text-xs uppercase tracking-[0.08em] mb-2 block"
                    style={{ color: "#6B6E81" }}
                  >
                    How Can We Help? *
                  </Label>
                  <textarea
                    id="description"
                    rows={6}
                    className={`${fieldBase} resize-none`}
                    style={fieldStyle}
                    placeholder="Tell us about your challenge, programme, or what you are trying to achieve..."
                    data-testid="textarea-description"
                    {...form.register("description")}
                  />
                  {form.formState.errors.description && (
                    <p className="font-sans text-xs mt-1" style={{ color: "#F85C70" }}>
                      {form.formState.errors.description.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="persona"
                    className="font-mono text-xs uppercase tracking-[0.08em] mb-2 block"
                    style={{ color: "#6B6E81" }}
                  >
                    How Did You Hear About Us?
                  </Label>
                  <Select
                    onValueChange={(value) => form.setValue("persona", value as CustomerPersona)}
                    defaultValue={form.watch("persona")}
                  >
                    <SelectTrigger
                      id="persona"
                      aria-label="How did you hear about us?"
                      className="font-sans text-sm rounded border-0 border-b-2 bg-transparent focus:ring-0 h-12"
                      style={{ borderColor: "#DDD9EA", color: "#181F4F" }}
                      data-testid="select-persona"
                    >
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="search">Search Engine</SelectItem>
                      <SelectItem value="referral">Recommended by a Colleague</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="event">Networking Event</SelectItem>
                      <SelectItem value="article">Blog or Article</SelectItem>
                      <SelectItem value="previous">Worked with Amplified Previously</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="amp-focus-ring-on-light inline-flex items-center gap-2 px-10 h-12 font-sans font-bold text-sm rounded transition-colors duration-200 w-full justify-center"
                  style={{
                    backgroundColor: mutation.isPending ? "#9CA3AF" : "#181F4F",
                    color: "#FFFFFF",
                    cursor: mutation.isPending ? "not-allowed" : "pointer",
                  }}
                  onMouseOver={(e) => {
                    if (!mutation.isPending) (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0d1230";
                  }}
                  onMouseOut={(e) => {
                    if (!mutation.isPending) (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#181F4F";
                  }}
                  data-testid="button-submit-contact"
                >
                  {mutation.isPending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* SIDEBAR - 2 cols */}
            <div className="lg:col-span-2 space-y-0 border-l" style={{ borderColor: "#E5E3EE" }}>

              {/* Book a call */}
              <div className="pl-10 pb-10 border-b" style={{ borderColor: "#E5E3EE" }}>
                <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
                  Prefer a Call?
                </p>
                <h3 className="font-display text-2xl mb-4" style={{ color: "#181F4F", fontWeight: 400 }}>
                  Book a Discovery Call
                </h3>
                <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: "#65677B" }}>
                  Schedule a 30-minute conversation. We will give you an honest view of whether and how
                  we can help. No commitment required.
                </p>
                <button
                  onClick={() => setShowCalendar(true)}
                  className="amp-focus-ring-on-light rounded inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200"
                  style={{ color: "#F85C70" }}
                  data-testid="button-book-call-sidebar"
                >
                  <Calendar className="h-4 w-4" />
                  Book with Steph <ArrowRight className="h-3 w-3" />
                </button>
              </div>

              {/* General enquiries */}
              <div className="pl-10 py-10 border-b" style={{ borderColor: "#E5E3EE" }}>
                <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
                  General Enquiries
                </p>
                <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: "#65677B" }}>
                  For general enquiries not covered by the form, reach the partnership directly.
                </p>
                <a
                  href="mailto:hi@amplified.co.uk"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200"
                  style={{ color: "#F85C70" }}
                >
                  <Mail className="h-4 w-4" />
                  hi@amplified.co.uk <ArrowRight className="h-3 w-3" />
                </a>
              </div>

              {/* Careers */}
              <div className="pl-10 py-10 border-b" style={{ borderColor: "#E5E3EE" }}>
                <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
                  Careers
                </p>
                <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: "#65677B" }}>
                  Interested in joining the partnership or working with AmplifiedTeams?
                  View open roles or send us a speculative application.
                </p>
                <a
                  href="mailto:careers@amplified.co.uk"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200"
                  style={{ color: "#F85C70" }}
                >
                  <Mail className="h-4 w-4" />
                  careers@amplified.co.uk <ArrowRight className="h-3 w-3" />
                </a>
              </div>

              {/* Partnerships */}
              <div className="pl-10 pt-10">
                <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#6B6E81" }}>
                  Partnerships
                </p>
                <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: "#65677B" }}>
                  Working on something that could benefit from the Amplified ecosystem? Let's explore it.
                </p>
                <a
                  href="mailto:partnerships@amplified.co.uk"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200"
                  style={{ color: "#F85C70" }}
                >
                  <Mail className="h-4 w-4" />
                  partnerships@amplified.co.uk <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 border-t" style={{ backgroundColor: "#181F4F", borderColor: "#0d1230" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.12em] mb-4" style={{ color: "#F85C70" }}>
            Two Offices. One Partnership.
          </p>
          <h2 className="font-display text-4xl mb-4" style={{ color: "#FFFFFF", fontWeight: 400 }}>
            London and Porto
          </h2>
          <p className="font-sans text-base max-w-[480px] mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            Regulated-industry expertise from the UK. European technology and delivery capability from Porto.
          </p>
        </div>
      </section>

      {/* CALENDAR MODAL */}
      <Dialog open={showCalendar} onOpenChange={setShowCalendar}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl" style={{ color: "#181F4F", fontWeight: 400 }}>
              Book a Discovery Call
            </DialogTitle>
            <DialogDescription className="font-sans text-sm" style={{ color: "#65677B" }}>
              A 30-minute conversation to understand your challenge and see whether and how we can help. No commitment required.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3CMapE9CB2QKRCvEK7vVKRfUN_L61PDJPMo_v2mQOw-DsnvwYUC-fjt5_RVHLYKU5cbz3P2bhV?gv=true"
              width="100%"
              height="800"
              frameBorder="0"
              title="Book a discovery call with Steph"
              aria-label="Google Calendar scheduler"
              data-testid="iframe-google-calendar"
            />
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
});

export default Contact;
