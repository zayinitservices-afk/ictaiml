export default function ReviewPage() {
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-6">Review Submission</h1>
      <div className="card max-w-2xl">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Submission ID</label>
            <input type="text" className="input" placeholder="Enter submission ID" required />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Score (1-5)</label>
            <select className="input" required>
              <option value="">Select score</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Below Average</option>
              <option value="3">3 - Average</option>
              <option value="4">4 - Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Comments</label>
            <textarea 
              className="input min-h-[200px]" 
              placeholder="Provide detailed feedback..."
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Decision</label>
            <select className="input" required>
              <option value="">Select decision</option>
              <option value="accept">Accept</option>
              <option value="reject">Reject</option>
              <option value="borderline">Borderline</option>
            </select>
          </div>
          
          <button type="submit" className="btn-primary">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}

