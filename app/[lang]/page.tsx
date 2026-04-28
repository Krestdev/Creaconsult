import ContacLink from "@/components/global/ContacLink";
import LatestNews from "@/components/global/LatestNews";
import Partners from "@/components/global/Partners";
import Projects from "@/components/global/Projects";
import Subscription from "@/components/global/Subscription";
import WhyChooseUs from "@/components/global/WhyChooseUs";
import Certifications from "@/components/home/Certifications";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import JobBanner from "@/components/Job/JobBanner";
import { getDictionary, Locale } from "@/lib/i18n";
import { jobQuery, newQuery } from "@/lib/queries/tanstack.queries";
import ClientComponents from "./clientComponents";

interface HomePageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function Home({ params }: HomePageProps) {
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);
  return (
    <main className="overflow-clip">
      {/* Hero */}
      <Hero dictionary={dictionary} />
      {/* certification carousele */}
      <Certifications />
      {/* services */}
      <Services dictionary={dictionary} />
      {/* Projects */}
      <Projects dictionary={dictionary} />
      {/* why choose us */}
      <WhyChooseUs dictionary={dictionary} />
      {/* partners */}
      <Partners dictionary={dictionary} />
      {/* contact */}
      <ContacLink dictionary={dictionary} />
      <ClientComponents dictionary={dictionary} />
      {/* news letter */}
      <Subscription dictionary={dictionary} lang={lang} />
    </main>
  );
}
