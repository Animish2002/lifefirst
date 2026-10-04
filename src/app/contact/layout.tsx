import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact LifeFirst | Water Treatment Project Enquiries",
  description:
    "Contact LifeFirst for STP, ETP and water treatment projects. Pune headquarters with offices in Zimbabwe, South Africa, Kenya, Nigeria and the Netherlands.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
