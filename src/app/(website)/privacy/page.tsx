"use client";
import ScrollToTop from "@/components/ScrollToTop";
import { Mail, MapPin } from "lucide-react";

export default function PrivacyPage() {
  const tableOfContents = [
    "Overview",
    "Scope & General Disclosure",
    "Information We Collect",
    "Third-Party Links",
    "Purpose & Legal Basis for Processing",
    "Disclosure of Information",
    "Cookies & Tracking Technologies",
    "Data Security Measures",
    "International Data Transfers",
    "Data Retention",
    "Use of Artificial Intelligence",
    "Children's Privacy",
    "Your Data Rights & Controls",
    "Contact Information",
    "Changes to This Privacy Policy",
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
                Privacy Policy
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
              "Privacy and Security are fundamental to how we operate. At HK
              Nexus Global, safeguarding personal data is not only a legal
              obligation but a core value embedded in our culture."
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
                        {String(index + 1).padStart(2, "0")}.
                      </span>{" "}
                      {item}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Policy Content */}
            <div className="space-y-12">
              {/* Section I */}
              <section id="section-1">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  I. Overview
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    HK Nexus Global, including its subsidiaries, affiliates, and
                    operational entities (collectively referred to as "HK Nexus
                    Global," "we," "us," or "our"), is committed to protecting
                    the privacy and personal data of individuals who interact
                    with our services, websites, platforms, and business
                    operations.
                  </p>
                  <p>
                    This Privacy Policy explains how we collect, use, process,
                    store, disclose, and protect Personal Data, and outlines the
                    choices available to individuals regarding their data.
                  </p>
                  <p>
                    By accessing our website or using our services, you
                    acknowledge that you have read, understood, and agreed to
                    the practices described in this Privacy Policy.
                  </p>
                  <div className="bg-primary/5 rounded-xl p-4 border-l-4 border-primary">
                    <p className="text-sm">
                      <strong>"Personal Data"</strong> refers to any information
                      relating to an identified or identifiable individual.
                    </p>
                    <p className="text-sm mt-2">
                      <strong>"Processing"</strong> includes collection,
                      recording, storage, use, analysis, transfer, disclosure,
                      or deletion.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section II */}
              <section id="section-2">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  II. Scope & General Disclosure
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    HK Nexus Global operates across Asia and other international
                    regions, and our data infrastructure may be hosted or
                    processed in multiple jurisdictions, including locations
                    outside your country of residence.
                  </p>
                  <p>
                    By engaging with HK Nexus Global, you acknowledge and
                    consent that your Personal Data may be transferred to,
                    stored in, or processed in jurisdictions that may have
                    different data protection standards.
                  </p>
                  <p className="font-semibold text-gray-900">
                    This Privacy Policy applies to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Website visitors</li>
                    <li>Clients and client end-users</li>
                    <li>Job applicants and employees</li>
                    <li>Vendors, contractors, and business partners</li>
                  </ul>
                  <p className="text-sm italic">
                    We are not responsible for third-party privacy practices,
                    even where a business relationship exists.
                  </p>
                </div>
              </section>

              {/* Section III */}
              <section id="section-3">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  III. Information We Collect
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      A. Personal Data You Provide Directly
                    </h3>
                    <p className="mb-3">
                      We may collect Personal Data when you:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                      <li>Visit our website</li>
                      <li>Contact us</li>
                      <li>Subscribe to communications</li>
                      <li>Apply for a job</li>
                      <li>Use our services or platforms</li>
                      <li>Participate in surveys, trials, or promotions</li>
                    </ul>
                    <p className="font-semibold text-gray-900 mb-2">
                      Categories include:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        Identifiers (name, email, phone, address, username)
                      </li>
                      <li>Professional & employment details</li>
                      <li>Educational qualifications</li>
                      <li>
                        Financial or payment information (where applicable)
                      </li>
                      <li>Communications and correspondence</li>
                      <li>
                        Images, audio, or video (where voluntarily provided)
                      </li>
                    </ul>
                    <p className="text-sm italic mt-3">
                      Providing Personal Data is voluntary; however, refusal may
                      limit service availability.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      B. Personal Data from Third Parties
                    </h3>
                    <p className="mb-3">We may receive Personal Data from:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Clients</li>
                      <li>Business partners</li>
                      <li>Recruitment platforms</li>
                      <li>Social media networks</li>
                      <li>Publicly available sources</li>
                    </ul>
                    <p className="text-sm italic mt-3">
                      This data is processed strictly in accordance with
                      contractual and legal obligations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      C. Automatically Collected Information
                    </h3>
                    <p className="mb-3">
                      When you visit our website, we may collect:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>IP address</li>
                      <li>Browser and device type</li>
                      <li>Location (approximate)</li>
                      <li>Pages visited and interaction data</li>
                      <li>Session duration and referring URLs</li>
                    </ul>
                    <p className="text-sm italic mt-3">
                      This data helps improve performance, security, and user
                      experience.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section IV */}
              <section id="section-4">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  IV. Third-Party Links
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may contain links to third-party websites or
                  platforms. HK Nexus Global does not control and is not
                  responsible for their privacy practices. Users are encouraged
                  to review third-party privacy policies before sharing
                  information.
                </p>
              </section>

              {/* Section V */}
              <section id="section-5">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  V. Purpose & Legal Basis for Processing
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    We process Personal Data based on one or more of the
                    following legal grounds:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                          <th className="px-4 py-3 text-left font-semibold">
                            Purpose
                          </th>
                          <th className="px-4 py-3 text-left font-semibold">
                            Legal Basis
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-gray-50">
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3">
                            Service delivery & operations
                          </td>
                          <td className="px-4 py-3">Contractual necessity</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3">
                            Customer support & communication
                          </td>
                          <td className="px-4 py-3">
                            Legitimate business interest
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3">
                            Recruitment & HR processes
                          </td>
                          <td className="px-4 py-3">
                            Legitimate interest / Consent
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3">
                            Marketing (where applicable)
                          </td>
                          <td className="px-4 py-3">Consent</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3">
                            Security, fraud prevention
                          </td>
                          <td className="px-4 py-3">Legitimate interest</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Legal compliance</td>
                          <td className="px-4 py-3">Legal obligation</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm italic">
                    We may also anonymize or aggregate data for analytics and
                    business intelligence.
                  </p>
                </div>
              </section>

              {/* Section VI */}
              <section id="section-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  VI. Disclosure of Information
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>We may disclose Personal Data to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Affiliates and group companies</li>
                    <li>Service providers and vendors</li>
                    <li>Clients (where contractually required)</li>
                    <li>Regulatory or legal authorities</li>
                    <li>Transaction partners (mergers, acquisitions)</li>
                  </ul>
                  <p className="text-sm italic">
                    All disclosures are governed by strict confidentiality,
                    security, and purpose limitation obligations.
                  </p>
                </div>
              </section>

              {/* Section VII */}
              <section id="section-7">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  VII. Cookies & Tracking Technologies
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Improve website performance</li>
                    <li>Understand user behavior</li>
                    <li>Enhance user experience</li>
                  </ul>
                  <p className="text-sm italic">
                    You may control cookie preferences via your browser
                    settings. Disabling cookies may affect website
                    functionality.
                  </p>
                </div>
              </section>

              {/* Section VIII */}
              <section id="section-8">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  VIII. Data Security Measures
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    We implement industry-standard security controls, including:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Firewalls and intrusion prevention</li>
                    <li>Encryption (data in transit and at rest)</li>
                    <li>Access controls and role-based permissions</li>
                    <li>Secure servers and monitoring systems</li>
                    <li>Confidentiality agreements for staff</li>
                    <li>Regular audits and security reviews</li>
                  </ul>
                  <p className="text-sm italic">
                    While no system is 100% secure, we take all reasonable
                    measures to protect your data.
                  </p>
                </div>
              </section>

              {/* Section IX */}
              <section id="section-9">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  IX. International Data Transfers
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    As a global organization, HK Nexus Global may transfer
                    Personal Data across borders. Where required, we ensure:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Adequate safeguards</li>
                    <li>Contractual data protection clauses</li>
                    <li>Compliance with regional data transfer laws</li>
                  </ul>
                </div>
              </section>

              {/* Section X */}
              <section id="section-10">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  X. Data Retention
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>Personal Data is retained only as long as necessary to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Deliver services</li>
                    <li>Meet legal obligations</li>
                    <li>Resolve disputes</li>
                    <li>Enforce contracts</li>
                  </ul>
                  <p className="text-sm italic">
                    Data is securely deleted or anonymized once no longer
                    required.
                  </p>
                </div>
              </section>

              {/* Section XI */}
              <section id="section-11">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  XI. Use of Artificial Intelligence
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    HK Nexus Global may use Artificial Intelligence (AI) to
                    enhance:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Service quality</li>
                    <li>Operational efficiency</li>
                    <li>Security monitoring</li>
                    <li>Analytics and automation</li>
                  </ul>
                  <p className="text-sm italic">
                    Any AI processing involving Personal Data is governed by
                    ethical principles, transparency, and applicable data
                    protection laws.
                  </p>
                </div>
              </section>

              {/* Section XII */}
              <section id="section-12">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  XII. Children's Privacy
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  HK Nexus Global does not knowingly collect Personal Data from
                  individuals under 13 years of age. If such data is identified,
                  it will be promptly deleted.
                </p>
              </section>

              {/* Section XIII */}
              <section id="section-13">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  XIII. Your Data Rights & Controls
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Depending on your jurisdiction, you may have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Access your Personal Data</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion</li>
                    <li>Withdraw consent</li>
                    <li>Object to processing</li>
                    <li>Restrict processing</li>
                    <li>Data portability</li>
                    <li>Lodge complaints with regulators</li>
                  </ul>
                  <p className="text-sm italic">
                    Requests may require identity verification.
                  </p>
                </div>
              </section>

              {/* Section XIV */}
              <section id="section-14">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  XIV. Contact Information
                </h2>
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Privacy Office – HK Nexus Global
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="w-5 h-5 text-primary" />
                      <a
                        href="mailto:privacy@hknexusglobal.com"
                        className="hover:text-primary transition-colors"
                      >
                        privacy@hknexusglobal.com
                      </a>
                    </div>
                    <div className="flex items-start gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        Asia Operations Office: MP Nagar Zone 11, Bhopal, M.P.,
                        India
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section XV */}
              <section id="section-15">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                  XV. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  HK Nexus Global reserves the right to update this Privacy
                  Policy at any time. Updates will be posted on our website.
                  Continued use of our services constitutes acceptance of the
                  revised policy.
                </p>
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
