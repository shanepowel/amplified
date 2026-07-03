import { NextResponse } from 'next/server';
import { cmsService } from '../../../../lib/services/cms';

export async function GET() {
  try {
    const stats = await cmsService.getDashboardStats();
    return NextResponse.json({ success: true, data: stats });
  } catch (error) {
    console.error('Error fetching CMS dashboard:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
