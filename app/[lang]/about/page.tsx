import Achievements from "@/components/about/Achievements";
import Story from "@/components/about/Story";
import Team from "@/components/about/Team";
import ContacLink from "@/components/global/ContacLink";
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
  console.log(dictionary == dictionary);

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
      <ContacLink />
    </main>
  );
};

export default Page;
