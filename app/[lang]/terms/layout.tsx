import PageIntro from "@/components/global/PageIntro";
import { Locale } from "@/lib/i18n";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <PageIntro title="News" img="/ui/intro/NewsIntro.webp">
      {children}
    </PageIntro>
  );
}
