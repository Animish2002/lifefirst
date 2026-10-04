import type { Metadata } from "next";

export const SITE_URL = "https://www.life-first.in";

// 1200x630 social share image (logo padded on white via Cloudinary)
export const OG_IMAGE = {
  url: "https://res.cloudinary.com/dsvfcckqy/image/upload/c_pad,w_1200,h_630,b_white,f_png/v1766261038/life-first-logo-and-text-mark-transparent_lt25wu.png",
  width: 1200,
  height: 630,
  alt: "LifeFirst Concepts & Technologies - Water, Wastewater and Sanitation Solution Company",
  type: "image/png",
};

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

// Per-page title, description, canonical URL and social tags
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "LifeFirst",
      type: "website",
      locale: "en_IN",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
