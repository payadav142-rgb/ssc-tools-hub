import type { MetadataRoute } from "next";

import { blogs } from "../data/blogs";

const BASE_URL =
  "https://ssc-tools-hub.vercel.app";

export default function sitemap():
MetadataRoute.Sitemap {

  const staticPages = [

    "",
    "/tools",
    "/resources",
    "/pyqs",
    "/blog",

    "/ssc-cgl-syllabus",
    "/ssc-chsl-syllabus",
    "/ssc-mts-syllabus",
    "/ssc-gd-syllabus",

    "/ssc-cgl-exam-pattern",
    "/ssc-chsl-exam-pattern",
    "/ssc-mts-exam-pattern",
    "/ssc-gd-exam-pattern",

    "/ssc-cgl-salary",
    "/ssc-cgl-cutoff",
    "/ssc-cgl-books",
    "/ssc-cgl-exam-date",
    "/ssc-cgl-notification",
    "/ssc-cgl-job-profile",
    "/ssc-cgl-post-preference",

    "/ssc-chsl-salary",
    "/ssc-mts-salary",
    "/ssc-gd-salary",

    "/ssc-cgl-admit-card",

  ];

  const staticUrls =
    staticPages.map((route) => ({

      url:
        `${BASE_URL}${route}`,

      lastModified:
        new Date(),

      changeFrequency:
        "weekly" as const,

      priority:
        route === ""
          ? 1
          : 0.8,

    }));

  const blogUrls =
    blogs.map((blog) => ({

      url:
        `${BASE_URL}/blog/${blog.slug}`,

      lastModified:
        new Date(),

      changeFrequency:
        "weekly" as const,

      priority:
        0.7,

    }));

  return [

    ...staticUrls,
    ...blogUrls,

  ];

}