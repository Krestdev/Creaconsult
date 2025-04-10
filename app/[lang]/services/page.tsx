import ContacLink from "@/components/global/ContacLink";
import Partners from "@/components/global/Partners";
import WhyChooseUs from "@/components/global/WhyChooseUs";
import ServicesDetails from "@/components/services/ServicesDetails";
import { getDictionary, Locale } from "@/lib/i18n";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const Page = async ({ params }: contactPageProps) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  // const page = dictionary.pages.contact;
  console.log(dictionary == dictionary);

  return (
    <main>
      {/* Services */}
      <ServicesDetails />
      {/* Pourquoi nous choisir */}
      <WhyChooseUs />
      {/* Partners */}
      <Partners />
      {/* Contact us */}
      <ContacLink />
    </main>
  );
};

export default Page;
