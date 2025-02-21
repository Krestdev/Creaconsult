import PageHeader from "@/components/PageHeader";
import { getDictionary, Locale } from "@/lib/i18n";
import React from "react";

interface ServicePageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const Page = async ({ params }: ServicePageProps) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const page = dictionary.pages.service;

  return (
    <main>
      <PageHeader page={page} />
      {/* general into */}
      {/* service 1 */}
      {/* service 1 */}
      {/* service 1 */}
      {/* why choose us */}
    </main>
  );
};

export default Page;
