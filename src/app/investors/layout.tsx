import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Investor News & Announcements | LifeFirst",
  description:
    "Latest LifeFirst news, strategic partnerships and corporate announcements, including MoUs and expansion across Zimbabwe, Kenya and Africa.",
  path: "/investors",
});

export default function InvestorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
