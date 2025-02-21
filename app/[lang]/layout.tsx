import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";
import React from "react";
import { Locale } from "@/lib/i18n";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const dm_sans = DM_Sans({
  variable: "--font-DM-sans",
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
      <body className={`${dm_sans.variable} antialiased`}>
        <NavBar lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
