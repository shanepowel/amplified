import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getEngagementBySlug } from '../../../lib/content/engagements';
import { generateEngagementPlaybookPdf } from '../../../lib/services/pdf';
import { emailService } from '../../../lib/services/email';
import { crmService } from '../../../lib/services/crm';

export const runtime = 'nodejs';

const bodySchema = z.object({
  slug: z.string().min(1),
  name: z.string().trim().min(2, 'Please enter your full name').max(120),
  email: z.string().trim().email('Please enter a valid email address'),
  company: z.string().trim().max(160).optional().or(z.literal('')),
});

function safeFilename(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const parsed = bodySchema.parse(json);

    const engagement = await getEngagementBySlug(parsed.slug);
    if (!engagement) {
      return NextResponse.json({ success: false, error: 'Unknown engagement' }, { status: 404 });
    }

    const company = parsed.company && parsed.company.length > 0 ? parsed.company : undefined;

    const pdfBuffer = await generateEngagementPlaybookPdf(engagement, {
      name: parsed.name,
      company,
    });

    const filename = `amplified-${safeFilename(engagement.name)}-playbook.pdf`;

    // Sync to HubSpot (fire and forget)
    const nameParts = parsed.name.trim().split(/\s+/);
    crmService.syncContact({
      firstname: nameParts[0],
      lastname: nameParts.length > 1 ? nameParts.slice(1).join(' ') : undefined,
      email: parsed.email,
      company,
      message: `Downloaded engagement playbook: ${engagement.name}`,
    });

    // Email playbook (non-blocking from response perspective: we still await for status)
    const emailSent = await emailService.sendEngagementPlaybookEmail({
      toEmail: parsed.email,
      name: parsed.name,
      company,
      engagementName: engagement.name,
      engagementTagline: engagement.tagline,
      pdfBuffer,
      pdfFilename: filename,
    });

    // Return PDF inline so the browser can download immediately
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': pdfBuffer.length.toString(),
        'Cache-Control': 'no-store',
        'X-Email-Sent': emailSent ? 'true' : 'false',
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Invalid request', issues: error.errors.map((e) => ({ path: e.path, message: e.message })) },
        { status: 400 },
      );
    }
    console.error('Error generating engagement playbook:', error);
    return NextResponse.json({ success: false, error: 'Failed to generate playbook' }, { status: 500 });
  }
}
