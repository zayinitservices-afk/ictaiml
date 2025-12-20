# ICTAIML 2025 - Sprint Plan

## Sprint 1 (Weeks 1-2): MVP Skeleton

### Completed ✅
- [x] Next.js + TypeScript + Tailwind setup
- [x] Base pages: `/`, `/cfp`, `/submit`, `/register`, `/contact`
- [x] Layout + Navigation + Footer
- [x] Submit form component with PDF upload UI
- [x] API routes: `/api/submit`, `/api/getSubmissions`
- [x] Email service integration (SendGrid)
- [x] Airtable integration helpers
- [x] Storage helpers (Supabase)
- [x] Input validation & sanitization
- [x] README with deployment steps

### Remaining Tasks
- [ ] Install dependencies (`npm install`)
- [ ] Configure environment variables
- [ ] Set up Airtable tables
- [ ] Configure SendGrid templates
- [ ] Set up Supabase Storage bucket
- [ ] Test submission flow end-to-end

## Sprint 2 (Weeks 3-4): Workflows & Admin

### Planned Tasks
- [ ] Admin dashboard (`/submissions`) - list, filter, search
- [ ] Reviewer assignment flow (`/api/assignReviewer`)
- [ ] Review form (`/review`) - score, comments, decision
- [ ] CSV export functionality (`/api/exportSubmissions`)
- [ ] Search accepted papers by keyword/author
- [ ] Schedule page with program data
- [ ] Offline payment instructions page
- [ ] PDF invoice generator
- [ ] Rate limiting middleware
- [ ] Authentication (Google/ORCID) for admin routes
- [ ] Error monitoring/logging
- [ ] Email notification for acceptance/rejection
- [ ] Schedule published notification

## Database Schema

### Submissions Table (Airtable)
- SubmissionId (Single line text) - Primary key
- Title (Single line text)
- Authors (Single line text)
- Affiliations (Single line text)
- Keywords (Single line text)
- ORCID (Single line text) - Optional
- Email (Email)
- PdfUrl (URL)
- Status (Single select: submitted, under_review, accepted, rejected)
- AssignedReviewers (Multiple select)
- CreatedAt (Date)

### Reviews Table (Airtable)
- ReviewId (Single line text) - Primary key
- SubmissionId (Link to Submissions)
- ReviewerEmail (Email)
- Score (Number 1-5)
- Comments (Long text)
- Decision (Single select: accept, reject, borderline)
- CreatedAt (Date)

### ScheduleItems Table (Airtable)
- ScheduleId (Single line text) - Primary key
- SubmissionId (Link to Submissions)
- Title (Single line text)
- Speaker (Single line text)
- DateTime (Date)
- Track (Single line text)
- Room (Single line text)

## Migration Path: Airtable → PostgreSQL/Supabase

### Preparation (Current)
1. ✅ Use simple field names (no spaces) in Airtable
2. ✅ Use UUID-compatible string IDs
3. ✅ Store URLs for PDFs (already compatible)

### Migration Steps (Future)
1. Export Airtable data to CSV
2. Create PostgreSQL tables with matching schema
3. Add indexes:
   - `email` on Submissions
   - `submission_id` on Reviews
   - `tsvector` index on `keywords || authors` for search
4. Load CSV data into staging tables
5. Validate and upsert into production tables
6. Update code to use PostgreSQL client instead of Airtable
7. Test thoroughly before switching

### Code Changes Needed
- Replace `lib/airtable.ts` with `lib/postgres.ts`
- Use Supabase client or `pg` library
- Update queries to SQL
- Add connection pooling
- Implement transactions for complex operations

## Security Checklist

- ✅ PDF MIME type validation
- ✅ File size limits (10MB)
- ✅ Input sanitization (XSS prevention)
- ✅ Environment variables for secrets
- ⚠️ Rate limiting (add middleware)
- ⚠️ CAPTCHA on public forms
- ⚠️ Authentication for admin routes
- ⚠️ CSRF protection
- ⚠️ SQL injection prevention (when migrating to Postgres)

