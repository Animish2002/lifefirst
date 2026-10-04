import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Awards, Recognitions & Certifications | LifeFirst",
  description:
    "LifeFirst's ISO and CE certifications, Startup India and MSME registrations, and awards including the SKOCH Award and India Achievers Award.",
  path: "/recognitions",
});

export default function RecognitionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
