import PageHeader from "@/components/global/PageHeader";
import ContactUs from "@/components/home/ContactUs";
import Whyus from "@/components/home/Whyus";
import ServiceDetail from "@/components/service/ServiceDetail";
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
      <ServiceDetail />
      <Whyus lang={lang} />
      <ContactUs />
      {/* why choose us */}
    </main>
  );
};

export default Page;
