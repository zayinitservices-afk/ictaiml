import { z } from 'zod';

export const submissionSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  authors: z.string().min(3, 'Authors required'),
  affiliations: z.string().min(3, 'Affiliations required'),
  keywords: z.string().min(3, 'Keywords required'),
  orcid: z.string().optional().refine(
    (val) => !val || /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(val),
    'Invalid ORCID format'
  ),
  email: z.string().email('Invalid email address'),
});

export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

