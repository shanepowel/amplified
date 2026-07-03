import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { z } from "zod";
import { buildKnowledgeContext, getEngagementName } from "../../../lib/ask-amplified-knowledge";
import { crmService } from "../../../lib/services/crm";

export const runtime = "nodejs";

const requestSchema = z.object({
  question: z.string().trim().min(3).max(1000),
  engagementSlug: z.string().trim().max(80).optional(),
  email: z.string().email().optional().or(z.literal("").transform(() => undefined)),
  name: z.string().trim().max(120).optional(),
  company: z.string().trim().max(120).optional(),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().max(2000),
      }),
    )
    .max(10)
    .optional(),
});

let openaiClient: OpenAI | null = null;

function getOpenAI(): OpenAI {
  if (!openaiClient) {
    openaiClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return openaiClient;
}

const systemPromptHeader = `You are "Ask Amplified", an in-page assistant on amplified.co.uk.

Your job: help senior buyers (delivery directors, programme directors, SROs, COOs, CTOs, CROs, compliance leaders) decide whether one of Amplified's three productised engagements — Squad Blueprint, The Forge, Delivery Compass — is the right fit for their situation.

Rules:
1. Ground every answer in the CONTEXT below. If the answer is not supported by the context, say so plainly and suggest booking a discovery call rather than guessing.
2. Do not invent prices, durations, deliverables, or case-study outcomes. Pricing is "scoped to engagement, discussed during initial conversation" — never quote a number.
3. Keep the voice plain, direct, and British English. No marketing fluff. No emojis. No bullet-point overload — short paragraphs are fine.
4. If the buyer's situation does not fit any engagement, tell them honestly and suggest a discovery conversation.
5. When you reference an engagement, use its proper name (Squad Blueprint, The Forge, Delivery Compass). Do not invent any other engagement.
6. Aim for 80–180 words per answer. Be useful, not exhaustive.`;

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: parsed.error.issues[0]?.message ?? "Invalid request" },
      { status: 400 },
    );
  }

  const { question, engagementSlug, email, name, company, history = [] } = parsed.data;
  const engagementName = await getEngagementName(engagementSlug);
  const context = await buildKnowledgeContext(engagementSlug);

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      {
        success: false,
        error: "Ask Amplified is not configured. Please book a discovery call instead.",
      },
      { status: 503 },
    );
  }

  try {
    const completion = await getOpenAI().chat.completions.create({
      model: "gpt-4o",
      max_tokens: 600,
      temperature: 0.4,
      messages: [
        { role: "system", content: `${systemPromptHeader}\n\n# CONTEXT\n${context}` },
        ...history.map((h) => ({ role: h.role, content: h.content })),
        { role: "user", content: question },
      ],
    });

    const answer =
      completion.choices[0]?.message?.content?.trim() ||
      "I do not have enough information to answer that with confidence. The fastest route is a 30-minute discovery call.";

    // Fire-and-forget HubSpot logging for sales follow-up.
    crmService
      .logAskAmplifiedQuestion({
        question,
        answer,
        engagementSlug,
        engagementName,
        email,
        name,
        company,
      })
      .catch((err) => console.error("Ask Amplified HubSpot logging failed:", err));

    return NextResponse.json({ success: true, answer });
  } catch (error) {
    console.error("Ask Amplified error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "Something went wrong answering that question. Please try again, or book a discovery call.",
      },
      { status: 500 },
    );
  }
}
