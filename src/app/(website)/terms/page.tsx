"use client";
import ScrollToTop from "@/components/ScrollToTop";
import { Mail, MapPin } from "lucide-react";

export default function TermsPage() {
  const tableOfContents = [
    "Introduction",
    "Scope of Services",
    "Eligibility & Use of Website",
    "No Guarantee of Employment",
    "Intellectual Property Rights",
    "Confidentiality",
    "Use of Artificial Intelligence",
    "Data Protection & Privacy (India DPDP Act, 2023)",
    "Third-Party Services & Links",
    "Limitation of Liability",
    "Indemnification",
    "Suspension & Termination",
    "Governing Law & Jurisdiction",
    "Force Majeure",
    "Modifications",
    "Contact Information",
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-accent/10 py-14 xl:py-16 px-6 xl:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
              HK Nexus Global –{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Terms & Conditions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
              "By accessing or using our services, you agree to operate within a
              framework of transparency, legality, and mutual trust."
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-14 xl:py-16 px-6 xl:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Table of Contents
              </h2>
              <ol className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {tableOfContents.map((item, index) => (
                  <li key={index} className="text-gray-600">
                    <a
                      href={`#section-${index + 1}`}
                      className="hover:text-primary transition-colors"
                    >
                      <span className="font-semibold text-primary">
                        {index + 1}.
                      </span>{" "}
                      {item}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Terms Content */}
            <div className="space-y-12">
              {/* Section 1 */}
              <section id="section-1">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  1. Introduction
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    These Terms & Conditions ("Terms") govern your access to and
                    use of the website, platforms, services, applications, and
                    business operations of HK Nexus Global, including its
                    subsidiaries and affiliates ("HK Nexus Global," "we," "us,"
                    or "our").
                  </p>
                  <p>
                    By accessing, browsing, or using our website or services,
                    you agree to be legally bound by these Terms. If you do not
                    agree, you must immediately discontinue use of our website
                    and services.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="section-2">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  2. Scope of Services
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>HK Nexus Global provides, but is not limited to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Business Process Outsourcing (BPO)</li>
                    <li>Customer Experience (CX) & Contact Center Services</li>
                    <li>IT & Managed Services</li>
                    <li>AI-enabled Automation & Analytics</li>
                    <li>Recruitment & Staffing Support</li>
                    <li>Consulting & Digital Solutions</li>
                  </ul>
                  <p className="text-sm italic">
                    Specific services may be governed by separate written
                    agreements, which shall prevail in case of conflict.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section id="section-3">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  3. Eligibility & Use of Website
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>By using our website or services, you confirm that:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>You are at least 18 years old</li>
                    <li>
                      You have the legal capacity to enter into binding
                      agreements
                    </li>
                    <li>You will use the website only for lawful purposes</li>
                    <li>
                      You will not misuse, disrupt, reverse-engineer, or attempt
                      unauthorized system access
                    </li>
                  </ul>
                  <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-500">
                    <p className="text-red-700 font-medium text-sm">
                      Unauthorized use may result in termination of access,
                      suspension of services, and legal action.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="section-4">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  4. No Guarantee of Employment
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Registration, resume submission, or interaction with
                    recruitment content does not guarantee employment with HK
                    Nexus Global or its affiliates.
                  </p>
                  <p className="font-semibold text-gray-900">
                    All hiring decisions are based on:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Business requirements</li>
                    <li>Candidate suitability</li>
                    <li>Background verification</li>
                    <li>Internal HR policies</li>
                  </ul>
                  <p className="text-sm italic">
                    We reserve the right to modify or withdraw job postings
                    without notice.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="section-5">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  5. Intellectual Property Rights
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>All website content, including but not limited to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Text, designs, layouts</li>
                    <li>Logos, trademarks</li>
                    <li>Software, tools, scripts</li>
                    <li>AI models, prompts, and outputs</li>
                    <li>Documentation and methodologies</li>
                  </ul>
                  <p>
                    is the exclusive intellectual property of HK Nexus Global,
                    unless expressly stated otherwise.
                  </p>
                  <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-500">
                    <p className="text-red-700 font-medium text-sm">
                      Unauthorized use may result in civil and criminal
                      liability.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="section-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  6. Confidentiality
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>Users agree to maintain strict confidentiality of:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Proprietary business information</li>
                    <li>Client and end-user data</li>
                    <li>Internal processes and documentation</li>
                    <li>Pricing, contracts, and trade secrets</li>
                  </ul>
                  <p className="text-sm italic">
                    Any breach may lead to termination, damages, and legal
                    remedies.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="section-7">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  7. Use of Artificial Intelligence
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>HK Nexus Global may deploy AI technologies for:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Service optimization</li>
                    <li>Automation and analytics</li>
                    <li>Security monitoring</li>
                    <li>Customer and client support</li>
                  </ul>
                  <p className="font-semibold text-gray-900 mt-4">
                    Users acknowledge that:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>AI outputs are probabilistic and advisory</li>
                    <li>AI does not replace professional judgment</li>
                    <li>
                      HK Nexus Global is not liable for decisions made solely
                      based on AI outputs
                    </li>
                  </ul>
                  <p className="text-sm italic mt-4">
                    AI usage complies with applicable data protection, ethical,
                    and regulatory standards.
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section id="section-8">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  8. Data Protection & Privacy (India DPDP Act, 2023)
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    HK Nexus Global complies with the Digital Personal Data
                    Protection Act, 2023 (India) and applicable Asia-region data
                    protection laws.
                  </p>
                  <p className="font-semibold text-gray-900">
                    By using our services, you acknowledge and consent that:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      Personal Data is processed lawfully, fairly, and
                      transparently
                    </li>
                    <li>
                      Data is collected only for specified and lawful purposes
                    </li>
                    <li>Reasonable security safeguards are implemented</li>
                  </ul>
                  <p className="font-semibold text-gray-900 mt-4">
                    Data principals have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Access</li>
                    <li>Correction</li>
                    <li>Erasure</li>
                    <li>Grievance redressal</li>
                    <li>Withdrawal of consent (where applicable)</li>
                  </ul>
                  <div className="bg-primary/5 rounded-xl p-4 border-l-4 border-primary mt-4">
                    <p className="text-sm">
                      We act as <strong>Data Fiduciary</strong> or{" "}
                      <strong>Data Processor</strong>, depending on the
                      engagement model. All personal data handling is governed
                      by our{" "}
                      <a
                        href="/privacy"
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </a>
                      , which forms an integral part of these Terms.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9 */}
              <section id="section-9">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  9. Third-Party Services & Links
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  HK Nexus Global is not responsible for third-party platforms,
                  tools, or content. Use of third-party services is entirely at
                  the user's own risk.
                </p>
              </section>

              {/* Section 10 */}
              <section id="section-10">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  10. Limitation of Liability
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    To the maximum extent permitted by law, HK Nexus Global
                    shall not be liable for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Indirect or consequential damages</li>
                    <li>Business interruption or loss of profits</li>
                    <li>Data loss beyond reasonable safeguards</li>
                    <li>Cyber incidents outside reasonable control</li>
                  </ul>
                  <p className="text-sm italic">
                    Services are provided on an "as-is" and "as-available"
                    basis.
                  </p>
                </div>
              </section>

              {/* Section 11 */}
              <section id="section-11">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  11. Indemnification
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    You agree to indemnify and hold harmless HK Nexus Global
                    against all claims arising from:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Misuse of services</li>
                    <li>Violation of law or these Terms</li>
                    <li>Data misuse or confidentiality breach</li>
                    <li>Third-party rights infringement</li>
                  </ul>
                </div>
              </section>

              {/* Section 12 */}
              <section id="section-12">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  12. Suspension & Termination
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  HK Nexus Global may suspend or terminate access without notice
                  in case of misuse, legal violation, or security risk.
                </p>
              </section>

              {/* Section 13 */}
              <section id="section-13">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  13. Governing Law & Jurisdiction
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms shall be governed by laws applicable in India and
                  the Asia region, subject to jurisdiction where HK Nexus Global
                  operates.
                </p>
              </section>

              {/* Section 14 */}
              <section id="section-14">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  14. Force Majeure
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  HK Nexus Global is not liable for events beyond reasonable
                  control including natural disasters, cyber incidents,
                  government actions, or pandemics.
                </p>
              </section>

              {/* Section 15 */}
              <section id="section-15">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  15. Modifications
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  HK Nexus Global may update these Terms at any time. Continued
                  use constitutes acceptance.
                </p>
              </section>

              {/* Section 16 */}
              <section id="section-16">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  16. Contact Information
                </h2>
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    HK Nexus Global – Legal & Compliance Team
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="w-5 h-5 text-primary" />
                      <a
                        href="mailto:legal@hknexusglobal.com"
                        className="hover:text-primary transition-colors"
                      >
                        legal@hknexusglobal.com
                      </a>
                    </div>
                    <div className="flex items-start gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        Registered Asia Office: MP Nagar Zone 11, Bhopal, M.P.,
                        India
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-6">
                  Last updated: January 2026
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />
    </div>
  );
}
