import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "Hottest Dog Token | Help this dog cool the F*CK down!",
  description:
    "Discover the Hottest Dog Token: A unique cryptocurrency project aimed at supporting dog charities in warm climates. Join our community and make a difference!",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hottestdog.org/",
    siteName: "Hottest Dog Token",
    images: [
      {
        url: "https://hottestdog.org/share-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hottest Dog Token",
      },
    ],
  },
  keywords: [
    "Hottest Dog Token",
    "cryptocurrency",
    "dog charity",
    "warm climates",
    "community token",
    "Solana ecosystem",
  ],
  authors: [{ name: "Hottest Dog Token Team" }],
  category: "Cryptocurrency",
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
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
