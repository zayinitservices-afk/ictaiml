import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

type EmailVars = {
  [key: string]: string | number;
};

export async function sendEmail({
  to,
  template,
  vars,
}: {
  to: string;
  template: 'submission_received' | 'acceptance' | 'schedule_published';
  vars: EmailVars;
}) {
  if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_FROM_EMAIL) {
    console.warn('SendGrid not configured, skipping email');
    return;
  }

  const templates: Record<string, { subject: string; html: string }> = {
    submission_received: {
      subject: 'Submission Received - ICTAIML 2025',
      html: `
        <h2>Thank you for your submission!</h2>
        <p>Your paper "<strong>${vars.title}</strong>" has been received.</p>
        <p>Submission ID: <code>${vars.id}</code></p>
        <p>We will notify you of the review outcome by July 30, 2025.</p>
        <p>Best regards,<br>ICTAIML 2025 Organizing Committee</p>
      `,
    },
    acceptance: {
      subject: 'Paper Accepted - ICTAIML 2025',
      html: `
        <h2>Congratulations!</h2>
        <p>Your paper "<strong>${vars.title}</strong>" has been accepted for presentation at ICTAIML 2025.</p>
        <p>Please submit your camera-ready version by August 15, 2025.</p>
        <p>Best regards,<br>ICTAIML 2025 Organizing Committee</p>
      `,
    },
    schedule_published: {
      subject: 'Conference Schedule Published - ICTAIML 2025',
      html: `
        <h2>Schedule Available</h2>
        <p>The conference schedule has been published. View it at: <a href="${vars.scheduleUrl}">${vars.scheduleUrl}</a></p>
        <p>Best regards,<br>ICTAIML 2025 Organizing Committee</p>
      `,
    },
  };

  const emailTemplate = templates[template];
  if (!emailTemplate) {
    throw new Error(`Unknown template: ${template}`);
  }

  await sgMail.send({
    to,
    from: process.env.SENDGRID_FROM_EMAIL!,
    subject: emailTemplate.subject,
    html: emailTemplate.html,
  });
}

