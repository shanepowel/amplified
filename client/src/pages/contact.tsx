'use client';

import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitConsultationRequest, type ConsultationResponse } from "@/lib/api";
import type { InsertConsultationRequest, CustomerPersona } from "@shared/schema";
import { insertConsultationRequestSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, ArrowRight, Calendar, Send } from "lucide-react";
import {
  AmpButton,
  BorderCell,
  BorderGrid,
  BreadcrumbBar,
  CtaBand,
  Eyebrow,
  Grid,
  PageHero,
  PageShell,
  Section,
  Stack,
  Text,
} from "@/components/system";
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

const fieldBase =
  "w-full rounded border-0 border-b-2 border-[#DDD9EA] bg-transparent px-4 py-3 font-sans text-sm text-[#181F4F] transition-colors duration-200 focus:outline-none focus:ring-0";

const Contact = memo(function Contact({ onOpenConsultation: _onOpenConsultation }: ContactProps) {
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

  return (
    <PageShell className="bg-[#FAFAF9]">
      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <PageHero
        padding="hero"
        eyebrow="Get in Touch"
        title={<span data-testid="text-contact-title">Let's talk</span>}
        lead="Whether you are starting an AI governance programme, rethinking a delivery model, or exploring what the Stable Teams framework could do for your organisation, we will give you a straight answer. No slide decks in the first meeting."
      >
        <Stack direction="row-responsive" gap="md">
          <AmpButton size="md" onClick={() => setShowCalendar(true)} data-testid="button-book-call">
            <Calendar className="h-4 w-4" />
            Book a Discovery Call
          </AmpButton>
          <AmpButton
            variant="outlineLight"
            size="md"
            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-send-message"
          >
            Send a Message
          </AmpButton>
        </Stack>
      </PageHero>

      <Section id="locations" tone="mist" padding="none" className="border-b border-[#DDD9EA]">
        <BorderGrid cols={2} className="border-l border-[#C8C4D8]">
          <BorderCell className="border-[#C8C4D8] p-10">
            <Stack direction="row" gap="sm" align="center" className="mb-6">
              <MapPin className="h-4 w-4 text-[#F85C70]" aria-hidden="true" />
              <Eyebrow tone="subtle">London, United Kingdom</Eyebrow>
            </Stack>
            <Text variant="h2" className="mb-2 text-3xl">London</Text>
            <Text variant="small" tone="muted" className="mb-6">
              Our UK headquarters. Primary client-facing office for infrastructure, energy, financial services,
              and public sector work.
            </Text>
            <Stack gap="sm">
              <div>
                <Eyebrow tone="subtle" className="mb-1">Address</Eyebrow>
                <Text variant="small">7 Bell Yard, London WC2A 2JR</Text>
              </div>
              <div>
                <Eyebrow tone="subtle" className="mb-1">Email</Eyebrow>
                <a
                  href="mailto:london@amplified.co.uk"
                  className="font-sans text-sm text-[#F85C70] transition-colors duration-200 hover:underline"
                  data-testid="text-email-london"
                >
                  london@amplified.co.uk
                </a>
              </div>
              <div>
                <Eyebrow tone="subtle" className="mb-1">Hours</Eyebrow>
                <Text variant="small" tone="muted">Monday to Friday, 09:00 to 18:00 GMT</Text>
              </div>
            </Stack>
          </BorderCell>

          <BorderCell className="border-[#C8C4D8] p-10">
            <Stack direction="row" gap="sm" align="center" className="mb-6">
              <MapPin className="h-4 w-4 text-[#60266A]" aria-hidden="true" />
              <Eyebrow tone="subtle">Porto, Portugal</Eyebrow>
            </Stack>
            <Text variant="h2" className="mb-2 text-3xl">Porto</Text>
            <Text variant="small" tone="muted" className="mb-6">
              Our European technology and delivery hub. Home to our tech build capability and the AmplifiedTeams
              Stable Teams practice.
            </Text>
            <Stack gap="sm">
              <div>
                <Eyebrow tone="subtle" className="mb-1">Email</Eyebrow>
                <a
                  href="mailto:porto@amplified.co.uk"
                  className="font-sans text-sm text-[#60266A] transition-colors duration-200 hover:underline"
                  data-testid="text-email-porto"
                >
                  porto@amplified.co.uk
                </a>
              </div>
              <div>
                <Eyebrow tone="subtle" className="mb-1">Hours</Eyebrow>
                <Text variant="small" tone="muted">Monday to Friday, 09:00 to 18:00 WET</Text>
              </div>
            </Stack>
          </BorderCell>
        </BorderGrid>
      </Section>

      <Section tone="transparent" padding="lg" id="contact-form" className="bg-[#FAFAF9]">
        <Grid cols="5-hero" gap="xl">
          <div className="lg:col-span-3">
            <Eyebrow tone="subtle" className="mb-4">Send a Message</Eyebrow>
            <Text variant="h2" tone="ink" className="mb-6">
              Tell us what you are working on
            </Text>
            <Text variant="body" tone="muted" className="mb-10">
              Send a short brief and we will respond within two working days. If your problem is one of the three named engagements (Squad Blueprint, The Forge, Delivery Compass) we will say so up front. If it is something different, we will tell you whether we are the right partnership for it, and if we are not, we will point you towards someone better suited. The first conversation is a thirty-minute call, no obligation. We will share examples of recent comparable work, talk through how we would approach the engagement, and confirm scope, timing, and the team we would put on it before any commercial conversation.
            </Text>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-[#6B6E81]">
                    Full Name *
                  </Label>
                  <input
                    id="name"
                    className={fieldBase}
                    placeholder="Jane Smith"
                    data-testid="input-name"
                    {...form.register("name")}
                  />
                  {form.formState.errors.name ? (
                    <p className="mt-1 font-sans text-xs text-[#F85C70]">{form.formState.errors.name.message}</p>
                  ) : null}
                </div>

                <div>
                  <Label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-[#6B6E81]">
                    Email Address *
                  </Label>
                  <input
                    id="email"
                    type="email"
                    className={fieldBase}
                    placeholder="jane@organisation.com"
                    data-testid="input-email"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email ? (
                    <p className="mt-1 font-sans text-xs text-[#F85C70]">{form.formState.errors.email.message}</p>
                  ) : null}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <Label htmlFor="company" className="mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-[#6B6E81]">
                    Organisation *
                  </Label>
                  <input
                    id="company"
                    className={fieldBase}
                    placeholder="Your Organisation"
                    data-testid="input-company"
                    {...form.register("company")}
                  />
                  {form.formState.errors.company ? (
                    <p className="mt-1 font-sans text-xs text-[#F85C70]">{form.formState.errors.company.message}</p>
                  ) : null}
                </div>

                <div>
                  <Label htmlFor="phone" className="mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-[#6B6E81]">
                    Phone Number
                  </Label>
                  <input
                    id="phone"
                    type="tel"
                    className={fieldBase}
                    placeholder="+44 20 1234 5678"
                    data-testid="input-phone"
                    {...form.register("phone")}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-[#6B6E81]">
                  How Can We Help? *
                </Label>
                <textarea
                  id="description"
                  rows={6}
                  className={`${fieldBase} resize-none`}
                  placeholder="Tell us about your challenge, programme, or what you are trying to achieve..."
                  data-testid="textarea-description"
                  {...form.register("description")}
                />
                {form.formState.errors.description ? (
                  <p className="mt-1 font-sans text-xs text-[#F85C70]">{form.formState.errors.description.message}</p>
                ) : null}
              </div>

              <div>
                <Label htmlFor="persona" className="mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-[#6B6E81]">
                  How Did You Hear About Us?
                </Label>
                <Select
                  onValueChange={(value) => form.setValue("persona", value as CustomerPersona)}
                  defaultValue={form.watch("persona")}
                >
                  <SelectTrigger
                    id="persona"
                    aria-label="How did you hear about us?"
                    className="h-12 rounded border-0 border-b-2 border-[#DDD9EA] bg-transparent font-sans text-sm text-[#181F4F] focus:ring-0"
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

              <AmpButton
                type="submit"
                variant="navy"
                disabled={mutation.isPending}
                fullWidth
                className="h-12 justify-center"
                data-testid="button-submit-contact"
              >
                {mutation.isPending ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </AmpButton>
            </form>
          </div>

          <div className="space-y-0 border-l border-[#E5E3EE] lg:col-span-2">
            <div className="border-b border-[#E5E3EE] pb-10 pl-10">
              <Eyebrow tone="subtle" className="mb-4">Prefer a Call?</Eyebrow>
              <Text variant="h3" className="mb-4">Book a Discovery Call</Text>
              <Text variant="small" tone="muted" className="mb-6">
                Schedule a 30-minute conversation. We will give you an honest view of whether and how
                we can help. No commitment required.
              </Text>
              <button
                type="button"
                onClick={() => setShowCalendar(true)}
                className="amp-focus-ring-on-light inline-flex items-center gap-2 rounded text-sm font-semibold text-[#F85C70] transition-all duration-200 hover:gap-3"
                data-testid="button-book-call-sidebar"
              >
                <Calendar className="h-4 w-4" />
                Book with Steph <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            <div className="border-b border-[#E5E3EE] py-10 pl-10">
              <Eyebrow tone="subtle" className="mb-4">General Enquiries</Eyebrow>
              <Text variant="small" tone="muted" className="mb-4">
                For general enquiries not covered by the form, reach the partnership directly.
              </Text>
              <a
                href="mailto:hi@amplified.co.uk"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#F85C70] transition-all duration-200 hover:gap-3"
              >
                <Mail className="h-4 w-4" />
                hi@amplified.co.uk <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            <div className="border-b border-[#E5E3EE] py-10 pl-10">
              <Eyebrow tone="subtle" className="mb-4">Careers</Eyebrow>
              <Text variant="small" tone="muted" className="mb-4">
                Interested in joining the partnership or working with AmplifiedTeams?
                View open roles or send us a speculative application.
              </Text>
              <a
                href="mailto:careers@amplified.co.uk"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#F85C70] transition-all duration-200 hover:gap-3"
              >
                <Mail className="h-4 w-4" />
                careers@amplified.co.uk <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            <div className="pl-10 pt-10">
              <Eyebrow tone="subtle" className="mb-4">Partnerships</Eyebrow>
              <Text variant="small" tone="muted" className="mb-4">
                Working on something that could benefit from the Amplified ecosystem? Let's explore it.
              </Text>
              <a
                href="mailto:partnerships@amplified.co.uk"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#F85C70] transition-all duration-200 hover:gap-3"
              >
                <Mail className="h-4 w-4" />
                partnerships@amplified.co.uk <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </Grid>
      </Section>

      <CtaBand
        className="border-t border-[#0d1230]"
        eyebrow="Two Offices. One Partnership."
        title="London and Porto"
        lead="Regulated-industry expertise from the UK. European technology and delivery capability from Porto."
      />

      <Dialog open={showCalendar} onOpenChange={setShowCalendar}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-normal text-[#181F4F]">
              Book a Discovery Call
            </DialogTitle>
            <DialogDescription className="font-sans text-sm text-[#65677B]">
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
    </PageShell>
  );
});

export default Contact;
