import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SSC Tools Hub",
  description:
    "Free SSC preparation tools, PYQs, planners, calculators, and curated resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}