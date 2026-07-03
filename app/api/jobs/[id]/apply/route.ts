import { NextRequest, NextResponse } from 'next/server';
import { getTalentHRService } from '../../../../../lib/services/talenthr';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const jobId = parseInt(id);
    if (isNaN(jobId)) {
      return NextResponse.json({ success: false, error: 'Invalid job ID' }, { status: 400 });
    }

    const body = await request.json();
    const { firstName, lastName, email, phone, coverLetter } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ success: false, error: 'Invalid application data' }, { status: 400 });
    }

    const talentHR = getTalentHRService();
    const applicationData = {
      position_id: jobId,
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      cover_letter: coverLetter,
    };

    const success = await talentHR.submitApplication(applicationData);

    if (success) {
      return NextResponse.json({ success: true, message: 'Application submitted successfully' });
    } else {
      return NextResponse.json({ success: false, error: 'Failed to submit application' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error submitting job application:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit application' }, { status: 500 });
  }
}
