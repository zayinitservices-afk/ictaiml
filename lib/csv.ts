export function generateSubmissionsCSV(submissions: any[]): string {
  const headers = ['ID', 'Title', 'Authors', 'Email', 'Status', 'Created At'];
  const rows = submissions.map((s) => [
    s.id,
    `"${s.title.replace(/"/g, '""')}"`,
    `"${s.authors.replace(/"/g, '""')}"`,
    s.email,
    s.status,
    s.createdAt,
  ]);
  
  return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
}

