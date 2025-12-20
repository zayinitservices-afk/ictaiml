import { NextRequest, NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { submissionSchema, sanitizeInput } from '@/lib/validators';
import { saveSubmission } from '@/lib/airtable';
import { uploadPdf } from '@/lib/storage';
import { sendEmail } from '@/lib/sendgrid';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const pdf = formData.get('pdf');
    if (!(pdf instanceof File)) {
      return NextResponse.json({ error: 'PDF file required' }, { status: 400 });
    }
    
    if (pdf.type !== 'application/pdf') {
      return NextResponse.json({ error: 'File must be a PDF' }, { status: 400 });
    }
    
    if (pdf.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: 'PDF size must be less than 10MB' }, { status: 400 });
    }

    const rawData = {
      title: sanitizeInput(formData.get('title') as string),
      authors: sanitizeInput(formData.get('authors') as string),
      affiliations: sanitizeInput(formData.get('affiliations') as string),
      keywords: sanitizeInput(formData.get('keywords') as string),
      orcid: formData.get('orcid') ? sanitizeInput(formData.get('orcid') as string) : undefined,
      email: sanitizeInput(formData.get('email') as string),
    };

    const data = submissionSchema.parse(rawData);

    const submissionId = nanoid();
    const pdfUrl = await uploadPdf({
      file: pdf,
      path: `submissions/${submissionId}.pdf`,
    });

    await saveSubmission({
      ...data,
      pdfUrl,
      status: 'submitted',
      submissionId,
    });

    await sendEmail({
      to: data.email,
      template: 'submission_received',
      vars: { title: data.title, id: submissionId },
    });

    return NextResponse.json({ ok: true, id: submissionId });
  } catch (err: any) {
    console.error('Submit error:', err);
    
    if (err.name === 'ZodError') {
      return NextResponse.json(
        { error: err.errors[0]?.message || 'Validation failed' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Unable to submit. Please try again.' },
      { status: 500 }
    );
  }
}

