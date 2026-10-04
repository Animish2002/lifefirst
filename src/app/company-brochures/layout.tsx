import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Company Brochures & Product Catalogues | LifeFirst",
  description:
    "Download LifeFirst's company profile and brochures for water and wastewater treatment plants, bio-digesters and the InFlow hydration monitoring system.",
  path: "/company-brochures",
});

export default function CompanyBrochuresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
