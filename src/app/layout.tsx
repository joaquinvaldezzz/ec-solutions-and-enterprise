import { type Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";

import "@/styles/main.css";

import { baseUrl } from "./sitemap";

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

const font = localFont({
  src: [
    {
      path: "../../public/fonts/Mona-Sans.woff2",
      weight: "200 900",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.variable}>
      <body className="min-w-80 bg-[#002f69] text-white antialiased [--header-height:4.5rem] lg:[--header-height:5rem]">
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
