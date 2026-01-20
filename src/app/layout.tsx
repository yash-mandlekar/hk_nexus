import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HK Nexus Global | Premium BPO & Customer Experience Solutions",
    template: "%s | HK Nexus Global",
  },
  description:
    "HK Nexus Global delivers world-class BPO solutions, customer support, and customer experience services across Asia. 50+ workforce, 5+ languages, 10+ satisfied clients.",
  keywords: [
    "BPO services",
    "customer support",
    "call center",
    "customer experience",
    "outsourcing",
    "Asia BPO",
    "multilingual support",
    "HK Nexus Global",
  ],
  authors: [{ name: "HK Nexus Global" }],
  openGraph: {
    title: "HK Nexus Global | Premium BPO & Customer Experience Solutions",
    description:
      "World-class BPO solutions and customer experience services across Asia. 24/7 multilingual support.",
    url: "https://hknexusglobal.com",
    siteName: "HK Nexus Global",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/fav.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fav.png" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
          <Toaster richColors position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
