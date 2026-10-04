import type { Metadata } from "next";
import "./globals.css";
import { Funnel_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import JsonLd from "@/components/JsonLd";
import { OG_IMAGE, SITE_URL } from "@/lib/seo";

const funnelSans = Funnel_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "LifeFirst Concepts & Technologies Pvt. Ltd. | Water, Wastewater and Sanitation Solution Company",
  description:
    "LifeFirst Concepts & Technologies Pvt. Ltd. is a leading provider of sustainable water and wastewater treatment solutions. Offering STP, ETP, water filtration systems, and turnkey environmental technologies for industries, communities, and global clients",
  keywords: [
    "water treatment",
    "wastewater treatment",
    "STP",
    "ETP",
    "water filtration",
    "sanitation solutions",
    "environmental technologies",
    "water management",
    "sustainable water solutions",
  ],
  openGraph: {
    title:
      "LifeFirst Concepts & Technologies Pvt. Ltd. | Water, Wastewater and Sanitation Solution Company",
    description:
      "LifeFirst Concepts & Technologies Pvt. Ltd. is a leading provider of sustainable water and wastewater treatment solutions. Offering STP, ETP, water filtration systems, and turnkey environmental technologies for industries, communities, and global clients",
    siteName: "LifeFirst",
    type: "website",
    locale: "en_IN",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "LifeFirst Concepts & Technologies Pvt. Ltd. | Water, Wastewater and Sanitation Solution Company",
    description:
      "LifeFirst Concepts & Technologies Pvt. Ltd. is a leading provider of sustainable water and wastewater treatment solutions.",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = SITE_URL;
  const logoUrl =
    "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766261038/life-first-logo-and-text-mark-transparent_lt25wu.png";

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LifeFirst Concepts & Technologies Pvt. Ltd.",
    url: baseUrl,
    logo: logoUrl,
    description:
      "Leading provider of sustainable water and wastewater treatment solutions. Offering STP, ETP, water filtration systems, and turnkey environmental technologies for industries, communities, and global clients.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9011-677-277",
      contactType: "Sales",
      email: "sales@life-first.in",
      areaServed: ["IN", "AE", "ZW", "ZA", "KE", "NG", "NL"],
      availableLanguage: ["en"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    subOrganization: [
      {
        "@type": "Organization",
        name: "LifeFirst Concepts & Technologies (Private) Limited",
        telephone: "+263-787-196333",
        email: "export@life-first.in",
        address: {
          "@type": "PostalAddress",
          streetAddress: "29 College Road, New Alexandra Park",
          addressLocality: "Harare",
          addressCountry: "ZW",
        },
      },
      {
        "@type": "Organization",
        name: "LifeFirst Concepts & Technologies (Pty) Limited",
        telephone: "+27-72-777-0653",
        email: "mdsa@life-first.in",
        address: {
          "@type": "PostalAddress",
          streetAddress: "282 Tryall Road",
          addressLocality: "Cape Town",
          addressRegion: "Western Cape",
          postalCode: "7441",
          addressCountry: "ZA",
        },
      },
      {
        "@type": "Organization",
        name: "LIFCOT Limited",
        telephone: "+254-721-796515",
        email: "mdken@life-first.in",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Luther Plaza, Nyerere Road, P.O. Box 161",
          addressLocality: "Nairobi",
          postalCode: "00100",
          addressCountry: "KE",
        },
      },
      {
        "@type": "Organization",
        name: "LifeFirst Water & Environmental Solutions Limited",
        telephone: "+234-806-393-6747",
        email: "nigbd@life-first.in",
        address: {
          "@type": "PostalAddress",
          streetAddress: "No 161, Ajao Road, Ikeja",
          addressRegion: "Lagos State",
          addressCountry: "NG",
        },
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/lifefirstconceptsandtechnologies",
      "https://x.com/lifefirstindia",
      "https://www.facebook.com/share/14HnstPQUQW/",
      "https://www.instagram.com/lifefirstconcepts",
      "https://www.youtube.com/@lifefirstindia",
    ],
    foundingDate: "2019",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "50-100",
    },
  };

  // WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LifeFirst Concepts & Technologies Pvt. Ltd.",
    url: baseUrl,
    description:
      "Water, Wastewater and Sanitation Solution Company providing sustainable treatment solutions for industries, communities, and global clients.",
    publisher: {
      "@type": "Organization",
      name: "LifeFirst Concepts & Technologies Pvt. Ltd.",
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/solutions?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={funnelSans.className}>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
