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
  title: "Creacosult - Services",
  description:
    "Innovative engineering and project management solutions for exceptional projects. Explore our services and discover how we can help you achieve your goals.",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export default async function Layout({ children, params }: LayoutProps) {
  return (
    <PageIntro
      title={(await params).lang == "en" ? "Services" : "Nos Services"}
      img="/ui/intro/ServiceIntro.webp"
    >
      {children}
    </PageIntro>
  );
}
