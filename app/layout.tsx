import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ALGI Nexa LLC | Cloud & Enterprise Architecture Consulting",
  description:
    "ALGI Nexa LLC provides cloud architecture, distributed systems design, enterprise modernization, and performance optimization consulting services.",
  keywords: [
    "Cloud Architecture Consulting",
    "Enterprise Architecture",
    "System Design",
    "Microservices",
    "Distributed Systems",
    "Cloud Modernization",
    "IT Consulting",
  ],
  authors: [{ name: "ALGI Nexa LLC" }],
  openGraph: {
    title: "ALGI Nexa LLC",
    description:
      "Scalable cloud-native and enterprise architecture solutions.",
    url: "https://alginexa.com",
    siteName: "ALGI Nexa LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
