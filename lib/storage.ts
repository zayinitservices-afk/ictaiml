// Supabase Storage helper (MVP: can use S3 or Supabase Storage)

export async function uploadPdf({
  file,
  path,
}: {
  file: File;
  path: string;
}): Promise<string> {
  // For MVP, if Supabase Storage is configured, use it
  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    const formData = new FormData();
    formData.append('file', file);
    
    const res = await fetch(
      `${process.env.SUPABASE_URL}/storage/v1/object/submissions/${path}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
        },
        body: formData,
      }
    );
    
    if (!res.ok) {
      throw new Error('Failed to upload PDF');
    }
    
    const data = await res.json();
    return `${process.env.SUPABASE_URL}/storage/v1/object/public/submissions/${path}`;
  }
  
  // Fallback: return a placeholder URL (in production, use actual storage)
  console.warn('Storage not configured, using placeholder URL');
  return `https://storage.example.com/${path}`;
}

