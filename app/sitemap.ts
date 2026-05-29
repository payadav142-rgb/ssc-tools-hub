import { MetadataRoute } from "next";

export default function sitemap():
MetadataRoute.Sitemap {

  return [

    {
      url:
        "http://localhost:3000",
      lastModified:
        new Date(),
    },

    {
      url:
        "http://localhost:3000/tools",
      lastModified:
        new Date(),
    },

    {
      url:
        "http://localhost:3000/resources",
      lastModified:
        new Date(),
    },

    {
      url:
        "http://localhost:3000/pyqs",
      lastModified:
        new Date(),
    },

    {
      url:
        "http://localhost:3000/dashboard",
      lastModified:
        new Date(),
    },

    {
      url:
        "http://localhost:3000/ssc-cgl-salary",
      lastModified:
        new Date(),
    },

    {
      url:
        "http://localhost:3000/ssc-cgl-cutoff",
      lastModified:
        new Date(),
    },

    {
      url:
        "http://localhost:3000/ssc-cgl-books",
      lastModified:
        new Date(),
    },

    {
      url:
        "http://localhost:3000/ssc-cgl-exam-date",
      lastModified:
        new Date(),
    },

    {
      url:
        "http://localhost:3000/ssc-cgl-notification",
      lastModified:
        new Date(),
    },

    {
      url:
        "http://localhost:3000/ssc-cgl-job-profile",
      lastModified:
        new Date(),
    },

    {
      url:
        "http://localhost:3000/ssc-cgl-post-preference",
      lastModified:
        new Date(),
    },

    {
      url:
        "http://localhost:3000/ssc-chsl-salary",
      lastModified:
        new Date(),
    },

    {
      url:
        "http://localhost:3000/ssc-mts-salary",
      lastModified:
        new Date(),
    },

    {
      url:
        "http://localhost:3000/ssc-gd-salary",
      lastModified:
        new Date(),
    },

    {
      url:
        "http://localhost:3000/ssc-cgl-admit-card",
      lastModified:
        new Date(),
    },

  ];

}