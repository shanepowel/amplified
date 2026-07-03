import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content, url } = body;

    if (!content && !url) {
      return NextResponse.json({ success: false, error: 'Content or URL required' }, { status: 400 });
    }

    const result = await new Promise<{ success: boolean; data?: Record<string, unknown>; error?: string }>((resolve) => {
      const pythonProcess = spawn('python3', ['server/seo_optimizer.py', '--analyze', content || '']);

      let output = '';
      let error = '';

      pythonProcess.stdout.on('data', (data) => { output += data.toString(); });
      pythonProcess.stderr.on('data', (data) => { error += data.toString(); });

      pythonProcess.on('close', (code) => {
        if (code !== 0) {
          resolve({ success: false, error: `SEO analysis failed: ${error}` });
          return;
        }
        try {
          const report = JSON.parse(output);
          resolve({ success: true, data: report });
        } catch {
          resolve({ success: false, error: 'Failed to parse SEO report' });
        }
      });
    });

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: result.data });
  } catch (error) {
    console.error('SEO analysis error:', error);
    return NextResponse.json({ success: false, error: 'SEO analysis failed' }, { status: 500 });
  }
}
