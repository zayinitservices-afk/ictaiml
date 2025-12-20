import Airtable from 'airtable';

if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
  console.warn('Airtable credentials not configured');
}

const base = process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID
  ? new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID!)
  : null;

export type SubmissionInput = {
  submissionId: string;
  title: string;
  authors: string;
  affiliations: string;
  keywords: string;
  orcid?: string;
  email: string;
  pdfUrl: string;
  status: 'submitted' | 'under_review' | 'accepted' | 'rejected';
};

export async function saveSubmission(input: SubmissionInput) {
  if (!base) {
    throw new Error('Airtable not configured');
  }
  
  await base('Submissions').create({
    SubmissionId: input.submissionId,
    Title: input.title,
    Authors: input.authors,
    Affiliations: input.affiliations,
    Keywords: input.keywords,
    ORCID: input.orcid || '',
    Email: input.email,
    PdfUrl: input.pdfUrl,
    Status: input.status,
    CreatedAt: new Date().toISOString(),
  });
}

export async function getSubmissions() {
  if (!base) {
    return [];
  }
  
  const records = await base('Submissions').select().all();
  return records.map((record) => ({
    id: record.get('SubmissionId') as string,
    title: record.get('Title') as string,
    authors: record.get('Authors') as string,
    email: record.get('Email') as string,
    status: record.get('Status') as string,
    createdAt: record.get('CreatedAt') as string,
  }));
}

export async function assignReviewer(submissionId: string, reviewerEmail: string) {
  if (!base) {
    throw new Error('Airtable not configured');
  }
  
  const records = await base('Submissions')
    .select({ filterByFormula: `{SubmissionId} = "${submissionId}"` })
    .firstPage();
  
  if (records.length === 0) {
    throw new Error('Submission not found');
  }
  
  const record = records[0];
  const currentReviewers = (record.get('AssignedReviewers') as string[]) || [];
  
  await base('Submissions').update(record.id, {
    AssignedReviewers: [...currentReviewers, reviewerEmail],
    Status: 'under_review',
  });
}

