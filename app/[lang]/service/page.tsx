import PageHeader from "@/components/PageHeader";
import { getDictionary, Locale } from "@/lib/i18n";
import React from "react";

interface ServicePageProps {
  params: {
    lang: Locale;
  };
}

const Page = async ({ params }: ServicePageProps) => {
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);
  const page = dictionary.pages.service;

  return (
    <main>
      <PageHeader page={page} lang={lang} />
      {/* general into */}
      {/* service 1 */}
      {/* service 1 */}
      {/* service 1 */}
      {/* why choose us */}
    </main>
  );
};

export default Page;
