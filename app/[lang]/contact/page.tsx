import PageHeader from "@/components/PageHeader";
import { getDictionary, Locale } from "@/lib/i18n";
import React from "react";

interface contactPageProps {
  params: {
    lang: Locale;
  };
}

const Page = async ({ params }: contactPageProps) => {
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);
  const page = dictionary.pages.contact;

  return (
    <main>
      <PageHeader page={page} lang={lang} />
      {/* General intro*/}
      {/* visson */}
      {/* mission */}
      {/* values */}
      {/* team */}
    </main>
  );
};

export default Page;
