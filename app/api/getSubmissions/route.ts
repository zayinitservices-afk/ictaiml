import { NextResponse } from 'next/server';
import { getSubmissions } from '@/lib/airtable';

export async function GET() {
  try {
    const submissions = await getSubmissions();
    return NextResponse.json({ submissions });
  } catch (err: any) {
    console.error('Get submissions error:', err);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}

