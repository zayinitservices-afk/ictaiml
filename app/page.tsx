import Link from "next/link";
import Hero from "@/components/Hero";
import CfpHighlights from "@/components/CfpHighlights";
import CtaButtons from "@/components/CtaButtons";
import Stats from "@/components/Stats";
import Tracks from "@/components/Tracks";
import Timeline from "@/components/Timeline";
import Venue from "@/components/Venue";
import Committee from "@/components/Committee";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <CfpHighlights />
          <div className="mt-12">
            <CtaButtons />
          </div>
          <div className="mt-16 space-y-16">
            <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Why Attend ICTAIML 2026?
              </h2>
              <p className="text-gray-700 text-lg max-w-4xl leading-relaxed">
                Experience a full-spectrum program spanning softwares, computing methodologies, applied AI, machine learning, networking, cyber security, communication systems and so on.
                Network with academia and industry leaders, attend tutorials, and explore live demos that mirror
                the depth of the ICTAIML program.
              </p>
              <div className="mt-8">
                <Stats />
              </div>
            </section>

            <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-xl border border-indigo-100">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <h2 className="text-4xl font-bold text-gray-900">Conference Tracks</h2>
                <p className="text-sm text-gray-600 font-medium">Expanded from ICTAIML focus areas</p>
              </div>
              <Tracks />
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <Timeline />
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Downloads & Templates</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm mb-4">
                  <li><a href="/template.docx" className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium">Paper template (DOCX)</a></li>
                  <li><a href="/template.pdf" className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium">Paper template (PDF)</a></li>
                  <li><a href="/poster-guidelines.pdf" className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium">Poster guidelines</a></li>
                </ul>
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <p className="text-xs text-gray-600">
                    Use IEEE double-column format; max 8 pages (regular), 4 pages (short).
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Conference Program
              </h2>
              <p className="text-gray-700 text-lg mb-6 max-w-3xl">
                View the complete conference program including important dates, schedule, venue details, and travel information all in one place.
              </p>
              <Link href="/schedule" className="btn-primary inline-block">
                View Program Details
              </Link>
            </section>

            <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl border border-purple-100">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Organizing Committee</h2>
              <Committee />
            </section>

            <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Sponsors & Partners
              </h2>
              <Sponsors />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

