import { NextRequest, NextResponse } from 'next/server';
import { analyzeSeoContent } from '../../../lib/services/seo-analyzer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content } = body;

    if (!content || typeof content !== 'string') {
      return NextResponse.json({ success: false, error: 'Content is required' }, { status: 400 });
    }

    const report = analyzeSeoContent(content);
    return NextResponse.json({ success: true, data: report });
  } catch (error) {
    console.error('SEO analysis error:', error);
    return NextResponse.json({ success: false, error: 'SEO analysis failed' }, { status: 500 });
  }
}
