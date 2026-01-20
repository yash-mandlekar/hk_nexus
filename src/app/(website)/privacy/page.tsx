"use client";
import ScrollToTop from "@/components/ScrollToTop";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-accent/10 py-14 xl:py-16 px-6 xl:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and
              protect your information.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-14 xl:py-16 px-6 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-50 rounded-2xl p-12 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                All Matter
              </h2>
              <p className="text-gray-600 leading-relaxed">
                This privacy policy outlines how HK Nexus Global collects, uses,
                maintains, and discloses information collected from users of our
                services. We are committed to protecting your personal
                information and your right to privacy.
              </p>
              <p className="text-gray-500 text-sm mt-8">
                Last updated: January 2026
              </p>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />
    </div>
  );
}
