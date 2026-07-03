'use client';

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitConsultationRequest, type ConsultationResponse } from "@/lib/api";
import type { InsertConsultationRequest, ServiceInterest } from "@shared/schema";
import { insertConsultationRequestSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, X, CheckCircle, Clock, MapPin } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType?: string;
}

const serviceOptions = [
  { value: "discovery", label: "Not sure yet, let's talk" },
  { value: "amplified-teams", label: "AMP 01/03 | AI Governance or Structured Delivery" },
  { value: "amplified-transformation", label: "AMP 02 | AI Implementation" },
  { value: "amplified-learn", label: "AMP 04 | Capability Building" },
  { value: "amplified-coach", label: "AMP 05 | Coaching" },
  { value: "full-suite", label: "AMP 06 | Tech Build" },
];

export default function ConsultationModal({ isOpen, onClose, serviceType }: ConsultationModalProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertConsultationRequest>({
    resolver: zodResolver(insertConsultationRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      serviceInterest: undefined,
      persona: undefined,
      urgencyLevel: undefined,
      description: "",
      serviceType: serviceType || "",
    },
  });

  const mutation = useMutation({
    mutationFn: submitConsultationRequest,
    onSuccess: (response: ConsultationResponse) => {
      toast({
        title: "Message received",
        description: "We will be in touch shortly. Typically within one business day.",
      });
      form.reset({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceInterest: undefined,
        persona: undefined,
        urgencyLevel: undefined,
        description: "",
        serviceType: "",
      });
      onClose();
      queryClient.invalidateQueries({ queryKey: ["/api/consultation-requests"] });
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at hello@amplified.co.uk",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertConsultationRequest) => {
    mutation.mutate(data);
  };

  const fieldBase =
    "w-full bg-transparent border-0 border-b pb-2 pt-1 text-sm font-sans focus:outline-none focus:border-b-2 transition-all duration-150 placeholder:text-gray-400";
  const fieldBorderNormal = "border-gray-300 focus:border-[#181F4F]";
  const fieldBorderError = "border-[#F85C70] focus:border-[#F85C70]";

  const errors = form.formState.errors;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="p-0 gap-0 border-0 overflow-hidden max-h-[95vh]"
        style={{
          maxWidth: "860px",
          width: "95vw",
          borderRadius: "6px",
          boxShadow: "0 24px 60px rgba(24,31,79,0.18)",
        }}
      >
        <DialogTitle className="sr-only">Book a Discovery Call</DialogTitle>
        <DialogDescription className="sr-only">
          Fill in your details and we will be in touch to arrange a free discovery call.
        </DialogDescription>

        <div className="flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden max-h-[95vh]">

          {/* LEFT PANEL */}
          <div
            className="lg:w-[42%] flex-shrink-0 p-8 lg:p-10 flex flex-col justify-between"
            style={{ backgroundColor: "#181F4F", minHeight: "400px" }}
          >
            <div>
              <p
                className="font-mono text-xs uppercase tracking-[0.14em] mb-8"
                style={{ color: "#F85C70" }}
              >
                Discovery Call
              </p>
              <h2
                className="font-display text-3xl lg:text-4xl leading-snug mb-6"
                style={{ color: "#FFFFFF", fontWeight: 400 }}
              >
                Let's find out if we're the right fit for each other.
              </h2>
              <p
                className="font-sans text-sm leading-relaxed mb-10"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                No slide decks. No sales pitch. A straightforward conversation about
                what you are trying to solve and whether we are the right people to help.
              </p>

              <ul className="space-y-5 mb-10">
                {[
                  { icon: Clock, text: "30 minutes, no obligation" },
                  { icon: CheckCircle, text: "We will tell you honestly if we can help" },
                  { icon: CheckCircle, text: "We reply within one business day" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <item.icon
                      className="h-4 w-4 flex-shrink-0 mt-0.5"
                      style={{ color: "#F85C70" }}
                    />
                    <span className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-3 w-3 flex-shrink-0 mt-0.5" style={{ color: "#F85C70" }} />
                <p className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  London | Porto
                </p>
              </div>
              <p className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                hello@amplified.co.uk
              </p>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="flex-1 overflow-y-auto" style={{ backgroundColor: "#FFFFFF" }}>
            <div className="p-8 lg:p-10 relative">
              {/* Close button */}
              <button
                onClick={onClose}
                className="amp-focus-ring-on-light absolute top-6 right-6 p-1.5 rounded transition-colors duration-150 hover:bg-gray-100"
                aria-label="Close consultation form"
                data-testid="button-modal-close"
              >
                <X className="h-4 w-4" style={{ color: "#65677B" }} />
              </button>

              <p
                className="font-mono text-xs uppercase tracking-[0.12em] mb-8"
                style={{ color: "#6B6E81" }}
              >
                Your details
              </p>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div>
                    <label
                      className="block font-mono text-xs uppercase tracking-[0.1em] mb-2"
                      style={{ color: "#181F4F" }}
                    >
                      Full Name <span style={{ color: "#F85C70" }}>*</span>
                    </label>
                    <input
                      {...form.register("name")}
                      placeholder="Your name"
                      className={`${fieldBase} ${errors.name ? fieldBorderError : fieldBorderNormal}`}
                      style={{ color: "#181F4F" }}
                      data-testid="input-name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs" style={{ color: "#F85C70" }}>
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block font-mono text-xs uppercase tracking-[0.1em] mb-2"
                      style={{ color: "#181F4F" }}
                    >
                      Email <span style={{ color: "#F85C70" }}>*</span>
                    </label>
                    <input
                      {...form.register("email")}
                      type="email"
                      placeholder="you@organisation.com"
                      className={`${fieldBase} ${errors.email ? fieldBorderError : fieldBorderNormal}`}
                      style={{ color: "#181F4F" }}
                      data-testid="input-email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs" style={{ color: "#F85C70" }}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div>
                    <label
                      className="block font-mono text-xs uppercase tracking-[0.1em] mb-2"
                      style={{ color: "#181F4F" }}
                    >
                      Organisation
                    </label>
                    <input
                      {...form.register("company")}
                      placeholder="Your organisation"
                      className={`${fieldBase} ${fieldBorderNormal}`}
                      style={{ color: "#181F4F" }}
                      data-testid="input-company"
                    />
                  </div>

                  <div>
                    <label
                      className="block font-mono text-xs uppercase tracking-[0.1em] mb-2"
                      style={{ color: "#181F4F" }}
                    >
                      Phone
                    </label>
                    <input
                      {...form.register("phone")}
                      type="tel"
                      placeholder="+44"
                      className={`${fieldBase} ${fieldBorderNormal}`}
                      style={{ color: "#181F4F" }}
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                {/* Area of interest */}
                <div>
                  <label
                    className="block font-mono text-xs uppercase tracking-[0.1em] mb-2"
                    style={{ color: "#181F4F" }}
                  >
                    Area of interest <span style={{ color: "#F85C70" }}>*</span>
                  </label>
                  <Select
                    value={form.watch("serviceInterest") || undefined}
                    onValueChange={(value) =>
                      form.setValue("serviceInterest", value as ServiceInterest, {
                        shouldValidate: true,
                      })
                    }
                  >
                    <SelectTrigger
                      aria-label="Area of interest"
                      data-testid="select-service"
                      className={`w-full bg-transparent border-0 border-b ${
                        errors.serviceInterest ? fieldBorderError : fieldBorderNormal
                      } rounded-none pl-0 pr-8 pb-2 pt-1 h-auto text-sm font-sans focus:outline-none focus:ring-0 focus:border-b-2 focus-visible:ring-0 focus-visible:ring-offset-0 [&>span]:truncate data-[placeholder]:text-[#9ca3af] text-[#181F4F] transition-all duration-150`}
                    >
                      <SelectValue placeholder="Select an area" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value} data-testid={`option-service-${opt.value}`}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.serviceInterest && (
                    <p className="mt-1 text-xs" style={{ color: "#F85C70" }}>
                      Please select an area of interest
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block font-mono text-xs uppercase tracking-[0.1em] mb-2"
                    style={{ color: "#181F4F" }}
                  >
                    What are you trying to solve?
                  </label>
                  <textarea
                    {...form.register("description")}
                    placeholder="Briefly describe the challenge you are facing. No need to have it fully formed."
                    rows={4}
                    className={`${fieldBase} ${fieldBorderNormal} resize-none`}
                    style={{ color: "#181F4F" }}
                    data-testid="textarea-description"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <p className="font-sans text-xs leading-relaxed" style={{ color: "#9ca3af", maxWidth: "280px" }}>
                    Your details are sent directly to hello@amplified.co.uk and are not shared with third parties.
                  </p>
                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="amp-focus-ring-on-light flex-shrink-0 inline-flex items-center gap-2 px-8 h-11 font-sans font-bold text-sm rounded transition-colors duration-200 disabled:opacity-60"
                    style={{ backgroundColor: "#F85C70", color: "#181F4F" }}
                    onMouseOver={(e) => {
                      if (!mutation.isPending) (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d94a5e";
                    }}
                    onMouseOut={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F85C70";
                    }}
                    data-testid="button-submit"
                  >
                    {mutation.isPending ? "Sending..." : "Send Message"}
                    {!mutation.isPending && <ArrowRight className="h-4 w-4" />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
