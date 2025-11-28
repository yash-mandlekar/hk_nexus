"use client";
import { useState } from "react";
import { Dot } from "lucide-react";
import { AccordionItem } from "./AccordionItem";
import { coreServices, industryDetails, whyChooseUsCards } from "./data";

// --- Data Definitions ---

export default function ServicesPage() {
  const [activeIndustryIndex, setActiveIndustryIndex] = useState<number>(0);

  const handleIndustryToggle = (index: number) => {
    setActiveIndustryIndex(index);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* --- Hero Section --- */}
      <section className="relative pt-20 pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h5 className="text-xs md:text-lg text-gray-500 flex items-center justify-center mb-4">
            <Dot className="text-green-500 h-12 w-12" /> Comprehensive BPO
            Solutions
          </h5>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
            <span className="block">Our Services</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-500 mb-10">
            End-to-end call center, support and BPO solutions built to scale
            your business.
          </p>
        </div>
      </section>

      {/* --- Interactive Services Grid --- */}
      <section className="relative w-full pb-24 px-4 overflow-hidden bg-white">
        {/* SVG Gradient Definition for Icons */}
        <svg width="0" height="0" className="absolute block">
          <defs>
            <linearGradient
              id="icon-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="var(--secondary)" />
              <stop offset="100%" stopColor="var(--primary)" />
            </linearGradient>
          </defs>
        </svg>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="p-8 flex-grow flex flex-col items-start">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <ul className="space-y-2">
                    {service.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-500 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Detailed Expandable Sections (Industry Specific) --- */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 rounded-3xl mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <span className="inline-block px-4 py-2 rounded-full bg-[#594ad2]/10 text-[#594ad2] text-sm font-semibold tracking-wide mb-8">
              Specialized Sectors
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Industry <span className="text-[#594ad2]">Expertise</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed font-medium">
              We tailor our solutions to meet the unique challenges and
              compliance requirements of your specific industry.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-3 w-full">
            {industryDetails.map((industry, index) => (
              <AccordionItem
                key={industry.id}
                title={industry.title}
                content={industry.content}
                icon={industry.icon}
                isOpen={activeIndustryIndex === index}
                onClick={() => handleIndustryToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Delivering excellence through people, process, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUsCards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex justify-between items-end border-b border-gray-200 pb-4 mb-6">
                  <div className="p-2 bg-transparent">{card.icon}</div>
                  <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">
                    {card.label}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Footer --- */}
      <section className="w-full py-20 px-4 flex justify-center items-center bg-white">
        <div className="max-w-5xl w-full relative rounded-3xl p-8 lg:p-12 flex flex-col items-center text-center bg-gradient-to-br from-[#BC55D8] via-[#B06CE5] to-[#9FD6FF] shadow-2xl">
          <div className="bg-white rounded-2xl p-8 lg:p-12 w-full shadow-lg max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-500 mb-8 text-lg leading-relaxed">
              Get a customized pricing estimate or connect directly with our
              experts to discuss your specific needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors duration-200 text-center cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                Get a Free Quote
              </button>
              <button className="bg-white text-gray-700 border border-gray-300 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 transition-colors duration-200 text-center cursor-pointer hover:shadow-md">
                Talk to an expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
