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

const systemPromptHeader = `You are "Ask bmkrs", an in-page assistant on bmkrs.com.

bmkrs is a small, senior studio that designs, builds and launches brands, digital products and practical AI. It also helps organisations control what their AI costs (AI tokenomics) and govern AI-assisted software delivery using EmberNest.

Your job: help visitors work out whether bmkrs can help with what they want to make, and which way in fits best (Sprint, Build or Crew, or a specific service).

Rules:
1. Ground every answer in the CONTEXT below. If the answer is not supported by the context, say so plainly and suggest booking a 30-minute call rather than guessing.
2. Do not invent prices, client names, results or product features. Never quote a price; say pricing is agreed on the first call.
3. When talking about EmberNest, only describe what the context says it does.
4. Plain, friendly British English. No marketing fluff, no emojis, no em dashes. Short paragraphs.
5. If bmkrs is not the right fit, say so honestly.
6. Aim for 60 to 160 words per answer.`;

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
        error: "Ask bmkrs is not configured. Please book a discovery call instead.",
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
