import { MetadataRoute } from "next";

const BASE_URL =
  "https://ssc-tools-hub.vercel.app";

export default function sitemap():
MetadataRoute.Sitemap {

  const routes = [

    "",
    "/tools",
    "/resources",
    "/pyqs",
    "/dashboard",
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

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

}