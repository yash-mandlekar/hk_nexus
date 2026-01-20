"use client";
import BlogSection from "@/components/BlogSection";
import NewsletterSection from "@/components/NewsletterSection";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 mx-12">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-accent/10 py-14 xl:py-16 px-6 xl:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
              <span>Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Blogs
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Read our latest insights and learn how to improve your business.
            </p>
          </div>
        </section>
        <BlogSection />
        <NewsletterSection />
      </main>
      <ScrollToTop />
    </div>
  );
}
