// "use client";
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
import { createItem, readItems } from "@directus/sdk";

interface HomePageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

async function getNews() {
  return directus.request(
    readItems("News", {
      filter: {
        status: {
          _eq: "published",
        },
      },
      fields: [
        "*",
        {
          user_created: ["id", "first_name", "last_name", "email"],
          images: ["id", "directus_files_id"],
        },
      ],
    })
  );
}

async function getJobOffers() {
  return directus.request(
    readItems("Job", {
      filter: {
        status: {
          _eq: "published",
        },
      },
    })
  );
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
      <ContacLink dictionary={dictionary} />
      {/* Job Offers adds list */}
      <JobBanner Jobs={Jobs} dicrionary={dictionary} />
      {/* latest news */}
      <LatestNews LatestNews={News} dicrionary={dictionary} />
      {/* news letter */}
      <Subscription dictionary={dictionary} lang={lang} />
    </main>
  );
}
