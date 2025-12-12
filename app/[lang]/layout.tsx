import Footer from "@/components/base/Footer";
import Nav from "@/components/base/Nav";
import { MyContext } from "@/context/MyContext";
import QueryClientContext from "@/context/QueryClientContext";
import { getDictionary } from "@/lib/i18n"; // Enlever Locale de l'import
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import React from "react";
import "../globals.css";

export const metadata: Metadata = {
  title: "Creaconsult - overview",
  description:
    "Turn your projects into reality with Creaconsult. Our team of experts in engineering and project management is here to help you achieve your goals. Explore our services and discover how we can support you.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang } = await params;
  
  // Vérifier que la langue est valide avant de passer à getDictionary
  const validLang = lang === "en" || lang === "fr" ? lang : "en";
  
  const dictionary = await getDictionary(validLang);

  return (
    <html lang={validLang}>
      <MyContext>
        <QueryClientContext>
          <body className={`antialiased`}>
            {/* Navbar */}
            <Nav lang={validLang} dictionary={dictionary} />
            {children}
            {/* footer */}
            <Footer dictionary={dictionary} />
            <GoogleAnalytics gaId="G-93XDV3G21J" />
          </body>
        </QueryClientContext>
      </MyContext>
    </html>
  );
}