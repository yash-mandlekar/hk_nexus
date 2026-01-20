"use client";
import React from "react";
import { Quote, CheckCircle2 } from "lucide-react";

const ClientTestimonials = () => {
  const testimonials = [
    {
      title: "Reliability at Scale",
      quote:
        "HK Nexus delivers round-the-clock support without compromise. Whether it's peak volumes or complex campaigns, they scale smoothly and stay dependable.",
    },
    {
      title: "Quality You Can Hear",
      quote:
        "Their agents sound confident, empathetic, and well-trained. Customers feel heard—first time, every time.",
    },
    {
      title: "Global Mindset, Local Sensitivity",
      quote:
        "Multilingual capability with cultural understanding makes HK Nexus ideal for international markets.",
    },
    {
      title: "Process-Driven Excellence",
      quote:
        "Clear SOPs, strong QA, and transparent reporting give us confidence and control.",
    },
    {
      title: "Technology-Enabled Performance",
      quote:
        "From CRM integration to analytics and AI readiness, HK Nexus keeps operations modern and measurable.",
    },
    {
      title: "True Partnership",
      quote: "They don't just execute—they advise, optimize, and grow with us.",
    },
  ];

  const reasons = [
    "24/7/365 availability",
    "Consistent CSAT & SLA adherence",
    "Secure, compliant operations",
    "Fast onboarding & agile scaling",
    "Cost-effective without cutting corners",
    "AI-assisted operations with real-time performance tracking and uptime assurance",
  ];

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl xl:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-2">
            Trusted. Scalable. Human-First.
          </p>
          <p className="text-gray-500 text-base md:text-lg max-w-4xl mx-auto">
            Global clients view HK Nexus as a dependable partner that blends
            people, process, and technology to deliver consistent results across
            borders and time zones.
          </p>
        </div>

        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Key Client Impressions
          </h3>
        </div>

        {/* Testimonials Grid - 2x3 format on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 px-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-transparent"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-[1.02]" />
              <div className="absolute inset-[2px] rounded-2xl bg-white -z-10" />

              {/* Quote Icon with animation */}
              <div className="absolute top-4 right-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-full group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors duration-500">
                  <Quote className="w-6 h-6 text-primary/50 group-hover:text-primary transition-colors duration-500" />
                </div>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Title with underline animation */}
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                    {testimonial.title}
                  </h4>
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500 group-hover:w-24" />
                </div>

                {/* Quote text with theme color on hover */}
                <p className="text-gray-600 font-medium text-sm leading-relaxed flex-grow transition-colors duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">
                  "{testimonial.quote}"
                </p>

                {/* Decorative element */}
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-px flex-grow bg-gradient-to-r from-primary/30 to-transparent" />
                  <span className="text-xs font-semibold text-primary/70">
                    HK Nexus
                  </span>
                  <div className="h-px flex-grow bg-gradient-to-l from-secondary/30 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Clients Stay Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white mb-12 mx-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Why Clients Stay
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white/95 font-medium text-sm">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-2xl p-10 border border-primary/20 mx-12 relative overflow-hidden">
          {/* Decorative gradient accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full translate-x-1/2 translate-y-1/2" />

          <h4 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 relative z-10">
            In One Line
          </h4>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto relative z-10">
            HK Nexus is seen globally as a{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              premium service partner
            </span>
            —where trust meets performance, and customer experience becomes a
            competitive advantage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
