import type { Metadata } from "next";
import "./globals.css";
import { Funnel_Sans } from "next/font/google";

const funnelSans = Funnel_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "LifeFirst Concepts & Technologies Pvt. Ltd. | Water, Wastewater and Sanitation Solution Company",
  description:
    "LifeFirst Concepts & Technologies Pvt. Ltd. is a leading provider of sustainable water and wastewater treatment solutions. Offering STP, ETP, water filtration systems, and turnkey environmental technologies for industries, communities, and global clients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={funnelSans.className}>{children}</body>
    </html>
  );
}
