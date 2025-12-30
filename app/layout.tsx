import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "ICCINGES 2026 - International Conference",
  description: "Artificial Intelligence and Machine Learning in one global forum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/cfp", label: "Call for Papers" },
    { href: "/speakers", label: "Speakers" },
    { href: "/committee", label: "Committee" },
    { href: "/submit", label: "Submission" },
    { href: "/author", label: "Author" },
    // { href: "/publication", label: "Publication" },
    { href: "/register", label: "Registration" },
    { href: "/schedule", label: "Program" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200 sticky top-0 z-50">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-full mx-auto">
              <div className="flex justify-between items-center py-0.5 md:py-1 max-h-16 md:max-h-20">
                <Link href="/" className="flex items-center gap-0 h-full">
                  <img
                    src="/iccinges-logo.png"
                    alt="ICCINGES Logo"
                    className="h-16 md:h-20 lg:h-24 w-auto object-contain max-h-full"
                  />
                  {/* <span className="text-2xl font-bold text-gray-900">2026</span> */}
                </Link>
                <div className="hidden lg:flex gap-1 items-center">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <MobileNav />
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-12 py-12">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">ICCINGES</h3>
                  <p className="text-gray-400 text-sm">
                    International Conference on Computational Intelligence and Next Generation Engineering Solutions
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link href="/cfp" className="hover:text-white">Call for Papers</Link></li>
                    <li><Link href="/submit" className="hover:text-white">Submit Paper</Link></li>
                    <li><Link href="/register" className="hover:text-white">Register</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Information</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link href="/schedule" className="hover:text-white">Program (Schedule, Venue, Dates)</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Contact</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>Email: corporate@zayintech.com</li>
                    <li>Phone: +91 9629216321</li>
                    <li><Link href="/contact" className="hover:text-white">Contact Form</Link></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                <p>&copy; 2026 ICCINGES. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

