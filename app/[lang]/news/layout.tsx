import PageIntro from "@/components/global/PageIntro";
import { Locale } from "@/lib/i18n";
import { Metadata } from "next";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: Locale;
  }>;
}

export const metadata: Metadata = {
  title: "Creacosult - News",
  description:
    "Get the latest news and updates from Creacosult. Stay informed about our projects, achievements, and industry insights.",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export default async function Layout({ children, params }: LayoutProps) {
  return (
    <PageIntro
      title={(await params).lang == "en" ? "News" : "Actualité"}
      img="/ui/intro/NewsIntro.jpg"
    >
      {children}
    </PageIntro>
  );
}
