import { NextRequest, NextResponse } from 'next/server';
import { assignReviewer } from '@/lib/airtable';
import { sendEmail } from '@/lib/sendgrid';

export async function POST(req: NextRequest) {
  try {
    const { submissionId, reviewerEmail } = await req.json();
    
    if (!submissionId || !reviewerEmail) {
      return NextResponse.json(
        { error: 'submissionId and reviewerEmail required' },
        { status: 400 }
      );
    }

    await assignReviewer(submissionId, reviewerEmail);
    
    // Optionally notify reviewer
    await sendEmail({
      to: reviewerEmail,
      template: 'submission_received', // Reuse template or create new one
      vars: { id: submissionId },
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Assign reviewer error:', err);
    return NextResponse.json(
      { error: err.message || 'Failed to assign reviewer' },
      { status: 500 }
    );
  }
}

