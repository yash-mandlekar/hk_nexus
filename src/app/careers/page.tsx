"use client";
import React, { useState } from "react";
import {
  MapPin,
  ArrowRight,
  Upload,
  Dot,
} from "lucide-react";
import { benefits, jobOpenings, lifeAtCompany } from "./data";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* --- Hero Section --- */}
      <section className="relative pt-20 pb-16 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
            <span>Build Your</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Career With Us</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-500 mb-10">
            Join a fast-growing customer support & call-center team shaping the
            future of communication.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#openings"
              className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors duration-200 text-center cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              View Openings
            </a>
          </div>
        </div>
      </section>

      {/* --- Why Work With Us Section --- */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Why Work With Us?
            </h2>
            <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
              We believe in nurturing talent and providing a platform for
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex justify-between items-end border-b border-gray-100 pb-4 mb-6">
                  <div className="p-2 bg-gray-50 rounded-lg text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Current Openings Section --- */}
      <section id="openings" className="w-full py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Current Openings
            </h2>
            <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
              Find the role that fits your skills and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="p-8 flex-grow flex flex-col items-start">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                      {job.type}
                    </span>
                    <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-full flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {job.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#594ad2] transition-colors">
                    {job.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {job.summary}
                  </p>

                  <div className="mb-6 w-full">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-1">
                      {job.responsibilities.slice(0, 3).map((resp, i) => (
                        <li
                          key={i}
                          className="flex items-start text-gray-500 text-xs"
                        >
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8 w-full">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Requirements:
                    </h4>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 3).map((req, i) => (
                        <li
                          key={i}
                          className="flex items-start text-gray-500 text-xs"
                        >
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#apply-form"
                    className="w-full mt-auto bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-center flex items-center justify-center gap-2 hover:bg-[#594ad2] hover:border-[#594ad2] hover:text-white"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Life at Our Company --- */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Life at HK Nexus
            </h2>
            <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
              More than just a workplace—a community where we learn, grow, and
              celebrate together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifeAtCompany.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-white text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Application Form Section --- */}
      <section id="apply-form" className="w-full py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-[#594ad2] p-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Apply Now
              </h2>
              <p className="text-white/80">Start your journey with us today.</p>
            </div>

            <div className="p-6 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#594ad2] focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#594ad2] focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#594ad2] focus:border-transparent outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="position"
                      className="text-sm font-medium text-gray-700"
                    >
                      Position Applying For
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#594ad2] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select a position</option>
                      {jobOpenings.map((job, index) => (
                        <option key={index} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Resume / CV
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      PDF, DOC, DOCX up to 10MB
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#594ad2] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us why you're a great fit..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white px-8 py-4 rounded-lg text-base font-bold hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
