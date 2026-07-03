import { NextResponse } from 'next/server';
import { storage } from '../../../lib/storage';

export async function GET() {
  try {
    const requests = await storage.getConsultationRequests();
    return NextResponse.json({ success: true, data: requests });
  } catch (error) {
    console.error('Error fetching consultation requests:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
