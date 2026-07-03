import { NextResponse } from 'next/server';
import { getTalentHRService } from '../../../../lib/services/talenthr';

export async function GET() {
  try {
    const talentHR = getTalentHRService();
    const isConnected = await talentHR.testConnection();
    return NextResponse.json({
      success: true,
      connected: isConnected,
      message: isConnected ? 'TalentHR connection successful' : 'TalentHR connection failed',
    });
  } catch (error) {
    console.error('Error testing TalentHR connection:', error);
    return NextResponse.json({ success: false, error: 'Connection test failed' }, { status: 500 });
  }
}
