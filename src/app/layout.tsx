import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AirbnbClone - Find Your Perfect Getaway",
  description:
    "Discover extraordinary places to stay, connect with hosts, and create unforgettable memories around the world.",
  keywords:
    "vacation rentals, holiday homes, travel accommodation, unique stays, vacation properties",
  openGraph: {
    title: "AirbnbClone - Find Your Perfect Getaway",
    description:
      "Discover extraordinary places to stay, connect with hosts, and create unforgettable memories around the world.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AirbnbClone - Find Your Perfect Getaway",
    description:
      "Discover extraordinary places to stay, connect with hosts, and create unforgettable memories around the world.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
