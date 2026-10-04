import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About LifeFirst | Water & Wastewater Treatment Company, India",
  description:
    "Founded in 2019 in Pune, LifeFirst designs and builds prefabricated water, wastewater and sanitation systems. Meet our leadership team and global offices.",
  path: "/about-us",
});

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
