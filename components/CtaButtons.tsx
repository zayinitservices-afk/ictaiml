import Link from "next/link";

export default function CtaButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="/submit" className="btn-primary text-center">
        Submit Paper
      </Link>
      <Link href="/register" className="bg-white border-2 border-indigo-600 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 text-center transition-colors">
        Register Now
      </Link>
    </div>
  );
}

