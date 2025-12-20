import { NextResponse } from 'next/server';
import { getSubmissions } from '@/lib/airtable';
import { generateSubmissionsCSV } from '@/lib/csv';

export async function GET() {
  try {
    const submissions = await getSubmissions();
    const csv = generateSubmissionsCSV(submissions);
    
    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="submissions-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    });
  } catch (err: any) {
    console.error('Export error:', err);
    return NextResponse.json(
      { error: 'Failed to export submissions' },
      { status: 500 }
    );
  }
}

