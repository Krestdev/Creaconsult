import ContactUs from "@/components/global/ContactUs";
import LatestNews from "@/components/global/LatestNews";
import Partners from "@/components/global/Partners";
import Projects from "@/components/global/Projects";
import Subscription from "@/components/global/Subscription";
import WhyChooseUs from "@/components/global/WhyChooseUs";
import Certifications from "@/components/home/Certifications";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import JobBanner from "@/components/Job/JobBanner";
import { Locale } from "@/lib/i18n";

interface HomePageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function Home({ params }: HomePageProps) {
  // const lang = (await params).lang;
  console.log(params);
  return (
    <main>
      {/* Hero */}
      <Hero />
      {/* certification carousele */}
      <Certifications />
      {/* services */}
      <Services />
      {/* Projects */}
      <Projects />
      {/* why choose us */}
      <WhyChooseUs />
      {/* partners */}
      <Partners />
      {/* contact */}
      <ContactUs />
      {/* Job Offers adds list */}
      <JobBanner />
      {/* latest news */}
      <LatestNews />
      {/* news letter */}
      <Subscription />
    </main>
  );
}
