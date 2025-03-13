import PageIntro from "@/components/global/PageIntro";
import { Locale } from "@/lib/i18n";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: Locale;
  }>;
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <PageIntro title="Contact" img="/ui/intro/ContactIntro.jpg">
      {children}
    </PageIntro>
  );
}
