import PartnersDetails from "@/components/about/PartnersDetails";
import ContactUs from "@/components/home/ContactUs";
import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import Services from "@/components/home/Services";
import Whyus from "@/components/home/Whyus";
import { Locale } from "@/lib/i18n";

interface HomePageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function Home({ params }: HomePageProps) {
  const lang = (await params).lang;
  return (
    <main className=" font-[family-name:var(--font-DM-sans)]">
      <Hero lang={lang} />
      <Services />
      <Whyus lang={lang} />
      <ContactUs />
      <PartnersDetails />
    </main>
  );
}
