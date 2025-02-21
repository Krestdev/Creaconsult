import AboutIntro from "@/components/about/AboutIntro";
import Mission from "@/components/about/Mission";
import Structure from "@/components/about/Structure";
import Vission from "@/components/about/Vission";
import PageHeader from "@/components/PageHeader";
import { getDictionary, Locale } from "@/lib/i18n";
import React from "react";

interface AboutPageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function Page({ params }: AboutPageProps) {
  const { lang } = await params;
  console.log(lang);
  const dictionary = await getDictionary(lang);
  const page = dictionary.pages.about;

  return (
    <main>
      <PageHeader page={page} />
      <AboutIntro />
      <Structure />
      <Vission />
      <Mission />
      {/* values */}
      {/* team */}
    </main>
  );
}
