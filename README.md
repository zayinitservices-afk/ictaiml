# ICTAIML 2025 Conference Website

MVP website for an international academic conference (International Conference on Electronics, Communication & Artificial Intelligence) with paper submission, review, and registration workflows.

## Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Backend**: Next.js API Routes (Serverless)
- **Database**: Airtable (MVP) → PostgreSQL/Supabase (migration path)
- **Storage**: Supabase Storage or S3
- **Email**: SendGrid
- **Auth**: Google Sign-In / ORCID (optional for MVP)

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

```bash
# Airtable
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_base_id

# SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@yourdomain.com

# Supabase Storage
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 3. Airtable Setup

Create tables in Airtable:

**Submissions Table:**
- SubmissionId (Single line text)
- Title (Single line text)
- Authors (Single line text)
- Affiliations (Single line text)
- Keywords (Single line text)
- ORCID (Single line text)
- Email (Email)
- PdfUrl (URL)
- Status (Single select: submitted, under_review, accepted, rejected)
- AssignedReviewers (Multiple select or text)
- CreatedAt (Date)

**Reviews Table:**
- ReviewId (Single line text)
- SubmissionId (Link to Submissions)
- ReviewerEmail (Email)
- Score (Number 1-5)
- Comments (Long text)
- Decision (Single select: accept, reject, borderline)
- CreatedAt (Date)

**ScheduleItems Table:**
- ScheduleId (Single line text)
- SubmissionId (Link to Submissions)
- Title (Single line text)
- Speaker (Single line text)
- DateTime (Date)
- Track (Single line text)
- Room (Single line text)

### 4. SendGrid Setup

1. Create SendGrid account and verify sender email
2. Create dynamic templates (or use simple HTML emails as in code)
3. Add API key to `.env.local`

### 5. Supabase Storage Setup

1. Create Supabase project
2. Create `submissions` bucket
3. Set bucket policies (private with service role access)
4. Add credentials to `.env.local`

### 6. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Deployment (Vercel)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Project Structure

```
/app
  /api          # API routes (submit, getSubmissions, etc.)
  page.tsx      # Landing page
  /cfp          # Call for Papers
  /submit       # Submission form
  /submissions  # Admin dashboard
  /review       # Reviewer form
  /schedule     # Conference schedule
  /register     # Registration form
  /contact      # Contact page

/components     # React components
/lib           # Utilities (Airtable, SendGrid, storage, validators)
```

## Database Schema

### Submissions
- `id` (UUID/string)
- `title` (text)
- `authors` (text)
- `affiliations` (text)
- `keywords` (text)
- `orcid` (text, nullable)
- `email` (text, indexed)
- `pdf_url` (text)
- `status` (enum: submitted | under_review | accepted | rejected)
- `assigned_reviewer_ids` (array text)
- `created_at` (timestamp)

### Reviews
- `id` (UUID/string)
- `submission_id` (FK)
- `reviewer_email` (text)
- `score` (int 1-5)
- `comments` (text)
- `decision` (enum: accept | reject | borderline)
- `created_at` (timestamp)

### ScheduleItems
- `id` (UUID/string)
- `submission_id` (FK)
- `title` (text)
- `speaker` (text)
- `datetime` (timestamp)
- `track` (text)
- `room` (text)

## Migration Notes: Airtable → PostgreSQL/Supabase

1. **Field Naming**: Keep Airtable column names simple (no spaces) for easier ETL
2. **IDs**: Use UUID-compatible strings in Airtable; ready for Postgres UUID
3. **Search**: Add `tsvector` index on `keywords || authors` in Postgres
4. **Storage URLs**: Already using Supabase/S3 URLs; no change needed
5. **ETL Script**: Export Airtable CSV → load into staging → upsert to Postgres with validation
6. **Email Queue**: Move to background jobs (Supabase Functions or Vercel Cron) when scaling

## Security Best Practices

- ✅ PDF MIME type and size validation
- ✅ Input sanitization (XSS prevention)
- ✅ Rate limiting (add middleware)
- ✅ Environment variables for secrets
- ✅ File upload size limits
- ⚠️ Add CAPTCHA for public forms (recommended)
- ⚠️ Add authentication for admin routes (recommended)

## Sprint Plan

### Sprint 1 (MVP Skeleton)
- ✅ Setup Next.js + TypeScript + Tailwind
- ✅ Base pages (/, /cfp, /submit, /register, /contact)
- ✅ Layout + Navigation
- ✅ Submit form with PDF upload
- ✅ API stubs (/api/submit, /api/getSubmissions)
- ✅ Email templates
- ✅ README

### Sprint 2 (Workflows)
- Admin dashboard (/submissions)
- Reviewer assignment flow
- Review form (/review)
- CSV export
- Search functionality
- Schedule page
- Offline payment/invoice generator
- Validation hardening
- Monitoring/logging

## License

MIT

