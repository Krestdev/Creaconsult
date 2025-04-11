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
import directus from "@/lib/directus/directus";
import { getDictionary, Locale } from "@/lib/i18n";
import { readItems } from "@directus/sdk";

interface HomePageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

async function getNews() {
  return directus.request(readItems("News"));
}

async function getJobOffers() {
  return directus.request(readItems("Job"));
}

export default async function Home({ params }: HomePageProps) {
  const News = await getNews();
  const Jobs = await getJobOffers();
  const lang = (await params).lang;
  const dictionary = await getDictionary(lang);
  return (
    <main>
      {/* Hero */}
      <Hero dictionary={dictionary} />
      {/* certification carousele */}
      <Certifications />
      {/* services */}
      <Services dictionary={dictionary} />
      {/* Projects */}
      <Projects />
      {/* why choose us */}
      <WhyChooseUs dictionary={dictionary} />
      {/* partners */}
      <Partners />
      {/* contact */}
      <ContacLink />
      {/* Job Offers adds list */}
      <JobBanner Jobs={Jobs} />
      {/* latest news */}
      <LatestNews LatestNews={News} />
      {/* news letter */}
      <Subscription />
    </main>
  );
}
