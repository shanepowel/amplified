import { NextRequest, NextResponse } from 'next/server';
import { cmsService } from '../../../../../lib/services/cms';
import { getInsights } from '../../../../../lib/content/insights';

const VALID_CONTENT_TYPES = ['page', 'service', 'case_study', 'insight', 'hero', 'feature'] as const;
type ContentType = typeof VALID_CONTENT_TYPES[number];

const VALID_STATUSES = ['published', 'draft', 'archived'] as const;
type ContentStatus = typeof VALID_STATUSES[number];

function isValidContentType(type: string): type is ContentType {
  return (VALID_CONTENT_TYPES as readonly string[]).includes(type);
}

function isValidStatus(status: string): status is ContentStatus {
  return (VALID_STATUSES as readonly string[]).includes(status);
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  try {
    const { type } = await params;

    if (!isValidContentType(type)) {
      return NextResponse.json(
        { success: false, error: `Invalid content type: ${type}` },
        { status: 400 }
      );
    }

    const { searchParams } = new URL(request.url);
    const statusParam = searchParams.get('status') || 'published';

    if (!isValidStatus(statusParam)) {
      return NextResponse.json(
        { success: false, error: `Invalid status: ${statusParam}` },
        { status: 400 }
      );
    }

    // Insights are sourced from Sanity (with a fallback to bundled content);
    // other content types continue to come from the existing CMS service.
    const content =
      type === 'insight'
        ? await getInsights()
        : await cmsService.getContentByType(type, statusParam);
    return NextResponse.json({ success: true, data: content });
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
