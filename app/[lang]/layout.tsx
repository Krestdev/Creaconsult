import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import React from "react";
import { Locale } from "@/lib/i18n";
import Nav from "@/components/base/Nav";
import Footer from "@/components/base/Footer";

const POPPINS = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creacosult website - Home page",
  description:
    "High class consulting, monioring, support and analysis services",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: Locale;
  }>;
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const lang = (await params).lang;
  return (
    <html lang={lang}>
      <body className={`${POPPINS.className} antialiased`}>
        {/* Navbar */}
        <Nav />
        {children}
        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
