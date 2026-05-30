import type { Metadata } from "next";

import {
  ClerkProvider,
} from "@clerk/nextjs";

import "./globals.css";

import MobileBottomBar from "../components/MobileBottomBar";

export const metadata: Metadata = {
verification: {
  google: "c2E0Y9rYTzrEi_aYV43C725aFKUMCcaoyREP1or5amo",
},
  title:
    "SSC Tools Hub - Smart SSC Preparation Platform",

  description:
    "SSC Tools Hub provides SSC CGL calculators, rank predictors, study planners, mock analyzers, PYQs, resources and smart preparation tools.",

  keywords: [

    "SSC CGL",

    "SSC Tools",

    "SSC Rank Predictor",

    "SSC Marks Calculator",

    "SSC Study Planner",

    "SSC Mock Test",

    "SSC CGL Salary",

    "SSC CGL Cutoff",

  ],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <ClerkProvider>

      <html lang="en">

        <body>

          {children}

          <MobileBottomBar />

        </body>

      </html>

    </ClerkProvider>

  );

}