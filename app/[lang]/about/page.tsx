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

  return (
    <main>
      {/* our story */}
      <Story dictionary={dictionary} />
      {/* history timeline */}
      <Achievements dictionary={dictionary} />
      {/* why choose use */}
      <WhyChooseUs dictionary={dictionary} />
      {/* team */}
      <Team dictionary={dictionary} />
      {/* partners */}
      <Partners />
      {/* contact us */}
      <ContacLink dictionary={dictionary} />
    </main>
  );
};

export default Page;
