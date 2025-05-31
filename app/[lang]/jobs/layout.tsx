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
  title: "Creaconsult - Jobs offers",
  description:
    "Join our team of experts and contribute to innovative projects in engineering and project management. Explore our job offers and become part of our commitment to excellence.",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export default async function Layout({ children, params }: LayoutProps) {
  return (
    <PageIntro
      title={(await params).lang == "en" ? "Job Offers" : "Emplois"}
      img="/ui/intro/jobsintro.webp"
    >
      {children}
    </PageIntro>
  );
}
