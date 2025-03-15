import type { ReactNode } from "react";
import type { Metadata } from "next";

import { baseUrl } from "./sitemap";

import "../styles/main.css";

export const metadata: Metadata = {
  title: {
    default: "EC Solutions and Enterprise",
    template: "%s | EC Solutions and Enterprise",
  },
  description:
    "EC Solutions and Enterprise is a software development company that specializes in web development, mobile development, and custom software development.",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: {
      default: "EC Solutions and Enterprise",
      template: "%s | EC Solutions and Enterprise",
    },
    description:
      "EC Solutions and Enterprise is a software development company that specializes in web development, mobile development, and custom software development.",
    siteName: "EC Solutions and Enterprise",
    locale: "en_US",
  },
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
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-w-80 antialiased">{children}</body>
    </html>
  );
}
