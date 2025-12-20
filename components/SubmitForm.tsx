'use client';
import { useState } from 'react';

type FormState = {
  title: string;
  authors: string;
  affiliations: string;
  keywords: string;
  orcid?: string;
  email: string;
  pdf?: File;
};

export default function SubmitForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const pdf = formData.get('pdf') as File;
    
    if (pdf && pdf.size > 10 * 1024 * 1024) {
      setError('PDF file size must be less than 10MB');
      setLoading(false);
      return;
    }
    
    try {
      const res = await fetch('/api/submit', { 
        method: 'POST', 
        body: formData 
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Submission failed');
      }
      
      setMsg('Submission received! Check your email for confirmation.');
      e.currentTarget.reset();
    } catch (err: any) {
      setError(err.message || 'Error submitting. Please retry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Paper Title *</label>
          <input 
            name="title" 
            required 
            placeholder="Enter paper title"
            className="input"
            minLength={5}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Authors *</label>
          <input 
            name="authors" 
            required 
            placeholder="Comma-separated names"
            className="input"
            minLength={3}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Affiliations *</label>
          <input 
            name="affiliations" 
            required 
            placeholder="Institution names"
            className="input"
            minLength={3}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Keywords *</label>
          <input 
            name="keywords" 
            required 
            placeholder="Comma-separated keywords"
            className="input"
            minLength={3}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">ORCID (Optional)</label>
          <input 
            name="orcid" 
            placeholder="0000-0000-0000-0000"
            className="input"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Contact Email *</label>
          <input 
            name="email" 
            type="email" 
            required 
            placeholder="your.email@example.com"
            className="input"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">PDF Upload *</label>
        <div className="flex items-center gap-3">
          <input 
            name="pdf" 
            type="file" 
            accept="application/pdf" 
            required 
            className="file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
          <span className="text-sm text-gray-500">PDF only, max 10MB</span>
        </div>
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full"
      >
        {loading ? 'Submitting…' : 'Submit Paper'}
      </button>
      
      {msg && (
        <div className="p-4 bg-green-50 border border-green-200 rounded text-green-800 text-sm">
          {msg}
        </div>
      )}
      
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded text-red-800 text-sm">
          {error}
        </div>
      )}
    </form>
  );
}

