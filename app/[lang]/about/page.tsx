import Achievements from "@/components/about/Achievements";
import Story from "@/components/about/Story";
import Team from "@/components/about/Team";
import ContactUs from "@/components/global/ContactUs";
import Partners from "@/components/global/Partners";
import WhyChooseUs from "@/components/global/WhyChooseUs";
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

  return (
    <main>
      {/* our story */}
      <Story />
      {/* history timeline */}
      <Achievements />
      {/* why choose use */}
      <WhyChooseUs />
      {/* team */}
      <Team />
      {/* partners */}
      <Partners />
      {/* contact us */}
      <ContactUs />
    </main>
  );
};

export default Page;
