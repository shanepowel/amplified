import { NextResponse } from 'next/server';
import { getTalentHRService } from '../../../lib/services/talenthr';

export async function GET() {
  try {
    const talentHR = getTalentHRService();
    const jobs = await talentHR.getJobPositions();
    return NextResponse.json({ success: true, data: jobs });
  } catch (error) {
    console.error('Error fetching job positions:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch job positions' }, { status: 500 });
  }
}
