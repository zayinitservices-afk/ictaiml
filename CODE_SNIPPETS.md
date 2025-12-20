# Key Code Snippets

## Submit Form Component (`components/SubmitForm.tsx`)

Full implementation with:
- Client-side validation
- PDF file upload with size check
- Error handling
- Success/error messages
- Responsive grid layout

## API Endpoint: `/api/submit/route.ts`

Features:
- FormData parsing
- PDF validation (MIME type, size limit)
- Input sanitization
- Zod schema validation
- Airtable storage
- PDF upload to Supabase Storage
- Email notification via SendGrid
- Error handling with proper status codes

## Database Schema

### Submissions
```typescript
{
  id: string (UUID-compatible)
  title: string
  authors: string
  affiliations: string
  keywords: string
  orcid?: string (nullable)
  email: string (indexed)
  pdf_url: string
  status: 'submitted' | 'under_review' | 'accepted' | 'rejected'
  assigned_reviewer_ids: string[]
  created_at: timestamp
}
```

### Reviews
```typescript
{
  id: string (UUID-compatible)
  submission_id: string (FK)
  reviewer_email: string
  score: number (1-5)
  comments: string
  decision: 'accept' | 'reject' | 'borderline'
  created_at: timestamp
}
```

## Migration Notes: Airtable → PostgreSQL

1. **Field Naming**: Keep Airtable columns simple (no spaces)
2. **IDs**: Use UUID-compatible strings (ready for Postgres UUID)
3. **Search**: Add `tsvector` index: `CREATE INDEX idx_search ON submissions USING gin(to_tsvector('english', keywords || ' ' || authors));`
4. **Storage**: URLs already compatible (Supabase/S3)
5. **ETL**: Export CSV → staging → upsert with validation
6. **Email**: Move to background jobs (Supabase Functions/Vercel Cron)

## Security Best Practices Implemented

- ✅ PDF MIME type validation (`application/pdf`)
- ✅ File size limit (10MB)
- ✅ Input sanitization (`sanitizeInput` function)
- ✅ Zod schema validation
- ✅ Environment variables for secrets
- ⚠️ Add rate limiting (recommended)
- ⚠️ Add CAPTCHA (recommended)
- ⚠️ Add authentication for admin routes (recommended)

