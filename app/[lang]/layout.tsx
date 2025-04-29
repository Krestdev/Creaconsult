import type { Metadata } from "next";
import { Poppins, Sacramento, Poiret_One } from "next/font/google";
import "../globals.css";
import React from "react";
import { getDictionary, Locale } from "@/lib/i18n";
import Nav from "@/components/base/Nav";
import Footer from "@/components/base/Footer";
import { MyContext } from "@/context/MyContext";
import QueryClientContext from "@/context/QueryClientContext";

const POPPINS = Poppins({
  weight: ["300"],
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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

// Configure Sacramento (handwriting)
const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sacramento",
});

const poiret_One = Poiret_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poiret_One",
});

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang}>
      <MyContext>
        <QueryClientContext>
          <body className={`${poppins.className} antialiased`}>
            {/* Navbar */}
            <Nav lang={lang} dictionary={dictionary} />
            {children}
            {/* footer */}
            <Footer dictionary={dictionary} />
          </body>
        </QueryClientContext>
      </MyContext>
    </html>
  );
}
