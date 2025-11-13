import { MetadataRoute } from "next";
import solutionsData from "@/data/data.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://life-first.in";

  //Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about-us",
    "/solutions",
    "/case-studies",
    "/careers",
    "/company-brochures",
    "/contact",
    "/gallery",
    "/investors",
    "/privacy-policy",
    "/terms-of-use",
    "/recognitions"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic solution pages
  const solutionRoutes: MetadataRoute.Sitemap = solutionsData.map((solution) => ({
    url: `${baseUrl}/solutions/${solution.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...solutionRoutes];
}
