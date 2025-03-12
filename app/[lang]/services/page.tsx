import ContactUs from "@/components/global/ContactUs";
import Partners from "@/components/global/Partners";
import WhyChooseUs from "@/components/global/WhyChooseUs";
import ServicesDetails from "@/components/services/ServicesDetails";
import { getDictionary, Locale } from "@/lib/i18n";
import React from "react";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const Page = async ({ params }: contactPageProps) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const page = dictionary.pages.contact;

  return (
    <main>
      {/* Services */}
      <ServicesDetails />
      {/* Pourquoi nous choisir */}
      <WhyChooseUs />
      {/* Partners */}
      <Partners />
      {/* Contact us */}
      <ContactUs />
    </main>
  );
};

export default Page;
