import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/sendgrid';

export async function POST(req: NextRequest) {
  try {
    const { to, template, vars } = await req.json();
    
    if (!to || !template) {
      return NextResponse.json(
        { error: 'to and template required' },
        { status: 400 }
      );
    }

    await sendEmail({ to, template, vars: vars || {} });
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Send email error:', err);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

