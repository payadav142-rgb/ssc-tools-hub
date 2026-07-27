import type { MetadataRoute } from "next";

import { blogs } from "../data/blogs";

const BASE_URL = "https://ssc-tools-hub.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    // Main Pages
    "",
    "/about",
    "/contact",
    "/resources",
    "/pyqs",
    "/blog",

    // Syllabus
    "/syllabus",

    // SSC CGL
    "/ssc-cgl-syllabus",
    "/ssc-cgl-exam-pattern",
    "/ssc-cgl-salary",
    "/ssc-cgl-cutoff",
    "/ssc-cgl-books",
    "/ssc-cgl-exam-date",
    "/ssc-cgl-notification",
    "/ssc-cgl-job-profile",
    "/ssc-cgl-post-preference",
    "/ssc-cgl-admit-card",

    // SSC CHSL
    "/ssc-chsl-syllabus",
    "/ssc-chsl-exam-pattern",
    "/ssc-chsl-salary",
    "/ssc-chsl-cutoff",
    "/ssc-chsl-books",
    "/ssc-chsl-notification",
    "/ssc-chsl-admit-card",

    // SSC MTS
    "/ssc-mts-syllabus",
    "/ssc-mts-exam-pattern",
    "/ssc-mts-salary",
    "/ssc-mts-cutoff",
    "/ssc-mts-books",
    "/ssc-mts-notification",
    "/ssc-mts-admit-card",

    // SSC GD
    "/ssc-gd-syllabus",
    "/ssc-gd-exam-pattern",
    "/ssc-gd-salary",
    "/ssc-gd-cutoff",
    "/ssc-gd-books",
    "/ssc-gd-notification",
    "/ssc-gd-admit-card",

    // SSC Stenographer
    "/ssc-stenographer",
    "/ssc-stenographer-syllabus",
    "/ssc-stenographer-exam-pattern",
    "/ssc-stenographer-salary",
    "/ssc-stenographer-cutoff",
    "/ssc-stenographer-notification",
    "/ssc-stenographer-admit-card",

    // Tools
    "/tools",
    "/tools/age-calculator",
    "/tools/current-affairs-feed",
    "/tools/current-affairs-quiz",
    "/tools/eligibility-checker",
    "/tools/exam-countdown",
    "/tools/gk-flashcards",
    "/tools/goal-planner",
    "/tools/marks-calculator",
    "/tools/mock-analyzer",
    "/tools/motivation-generator",
    "/tools/notes-manager",
    "/tools/pdf-mock-converter",
    "/tools/percentage-calculator",
    "/tools/performance-tracker",
    "/tools/pomodoro-timer",
    "/tools/quiz-challenge",
    "/tools/rank-predictor",
    "/tools/revision-planner",
    "/tools/study-planner",
    "/tools/study-tracker",
    "/tools/syllabus-viewer",
    "/tools/timetable-generator",
    "/tools/topic-progress-tracker",
    "/tools/weakness-analyzer",

    // PYQs
    "/pyqs/ssc-cgl-2025-tier-1",
  ];

  const staticUrls = staticPages.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogUrls = blogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticUrls,
    ...blogUrls,
  ];
}