import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case Studies: Water & Wastewater Projects | LifeFirst",
  description:
    "Real-world water, wastewater and sanitation projects delivered by LifeFirst, from decentralised STPs to water treatment plants, with results and impact.",
  path: "/case-studies",
});

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
