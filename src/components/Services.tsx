import React from "react";
import Link from "next/link";
import {
  Calendar,
  Headset,
  TrendingUp,
  Settings,
  Languages,
  Globe,
} from "lucide-react";

// 1. Define the Data
const services = [
  {
    title: "Customized Solutions, Strong Presence Across Asia",
    description:
      "At HK Nexus Global, our customer experience solutions are thoughtfully designed for the Asian market, combining advanced technology, regional expertise, and operational agility.This integrated approach allows us to understand evolving customer behaviors, anticipate market demands, and consistently deliver experiences that exceed expectations across diverse industries.",
    icon: (
      <Settings
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Pan-Asia Support & Regional Expertise",
    description:
      "With a strong operational presence across key Asian markets, HK Nexus Global delivers multilingual, culturally aware, and region-specific support. Our teams provide 24/7 assistance, deeply understanding local languages, business practices, and customer expectations — enabling our clients to connect more effectively with their audiences throughout Asia. We don’t just support businesses — we help them build trust, relevance, and long-term relationships within the region.",
    icon: (
      <Globe className="w-10 h-10" style={{ stroke: "url(#icon-gradient)" }} />
    ),
  },
  {
    title: "360° Customer Experience",
    description:
      "With our omni-channel solutions, we guarantee a 360° customer experience. We use business intelligence to make strategic decisions and provide customized inbound, outbound, staff augmentation, and backend solutions to effectively address a range of company requirements.",
    icon: (
      <Headset
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
];

const ServicesSection = () => {
  return (
    <section className="relative w-full pb-16 px-18 overflow-hidden bg-white">
      {/* Background Decorative Blob (Subtle wave effect from top left) */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none" />

      {/* SVG Gradient Definition for Icons */}
      <svg width="0" height="0" className="absolute block">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--secondary)" />
            <stop offset="100%" stopColor="var(--primary)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Card Body */}
              <div className="p-8 flex-grow flex flex-col items-start">
                <div className="mb-6">{service.icon}</div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Card Footer Button */}
              {/* Using CSS variables for the exact gradient: secondary (pink) -> primary (purple) */}
              <Link
                href="/contact"
                className="w-full py-4 px-6 flex justify-between items-center text-white font-medium transition-opacity hover:opacity-90 cursor-pointer"
                style={{
                  background: `linear-gradient(to right, var(--secondary), var(--primary))`,
                }}
              >
                <span className="text-sm font-semibold tracking-wide">
                  Book a Consultation
                </span>
                <Calendar className="w-5 h-5 opacity-90" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
