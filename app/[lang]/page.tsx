import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Whyus from "@/components/Whyus";
import { Locale } from "@/lib/i18n";
import Image from "next/image";

interface HomePageProps {
  params: {
    lang: Locale;
  };
}

export default async function Home({ params }: HomePageProps) {
  const lang = (await params).lang;
  return (
    <main className=" font-[family-name:var(--font-DM-sans)]">
      <Hero lang={lang} />
      <Services />
      <Whyus lang={lang} />
      <Partners />
      <ContactUs />
    </main>
  );
}
