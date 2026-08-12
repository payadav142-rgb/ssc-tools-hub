import type { Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

import MobileBottomBar from "../components/MobileBottomBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ssctoolshub.com"),

  title: {
    default: "SSC Tools Hub - Smart SSC Preparation Platform",
    template: "%s | SSC Tools Hub",
  },

  description:
    "SSC Tools Hub provides free SSC CGL, CHSL, MTS, GD and Stenographer preparation tools, PYQs, study planners, calculators, quizzes, resources and exam guides.",

  keywords: [
    "SSC CGL",
    "SSC CHSL",
    "SSC MTS",
    "SSC GD",
    "SSC Stenographer",
    "SSC Tools",
    "SSC Rank Predictor",
    "SSC Marks Calculator",
    "SSC Study Planner",
    "SSC Mock Test",
    "SSC PYQs",
    "SSC CGL Salary",
    "SSC CGL Cutoff",
    "SSC CGL Syllabus",
    "SSC Exam Preparation",
  ],

  authors: [
    {
      name: "SSC Tools Hub",
    },
  ],

  creator: "SSC Tools Hub",
  publisher: "SSC Tools Hub",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "c2E0Y9rYTzrEi_aYV43C725aFKUMCcaoyREP1or5amo",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ssctoolshub.com",
    siteName: "SSC Tools Hub",
    title: "SSC Tools Hub - Smart SSC Preparation Platform",
    description:
      "Free SSC preparation tools, PYQs, study planners, calculators, quizzes, resources and exam guides for SSC aspirants.",
  },

  twitter: {
    card: "summary_large_image",
    title: "SSC Tools Hub - Smart SSC Preparation Platform",
    description:
      "Free SSC preparation tools, PYQs, study planners, calculators, quizzes and exam resources.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex min-h-screen flex-col">
          <main className="flex-1">
            {children}
          </main>

          <Footer />

          <MobileBottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}