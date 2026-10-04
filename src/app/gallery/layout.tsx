import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Project Gallery: Photos & Videos | LifeFirst",
  description:
    "Photos and videos of LifeFirst water treatment plants, STPs, decentralised wastewater systems, exports and company events across India and Africa.",
  path: "/gallery",
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
