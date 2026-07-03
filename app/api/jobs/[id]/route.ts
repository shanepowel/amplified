import { NextRequest, NextResponse } from 'next/server';
import { getTalentHRService } from '../../../../lib/services/talenthr';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const jobId = parseInt(id);
    if (isNaN(jobId)) {
      return NextResponse.json({ success: false, error: 'Invalid job ID' }, { status: 400 });
    }

    const talentHR = getTalentHRService();
    const job = await talentHR.getJobPosition(jobId);

    if (!job) {
      return NextResponse.json({ success: false, error: 'Job not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: job });
  } catch (error) {
    console.error('Error fetching job position:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch job position' }, { status: 500 });
  }
}
