import Achievements from "@/components/about/Achievements";
import Story from "@/components/about/Story";
import Team from "@/components/about/Team";
import ContacLink from "@/components/global/ContacLink";
import PageIntro from "@/components/global/PageIntro";
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
    <PageIntro
      title={(await params).lang == "en" ? "About us" : "À propos de nous"}
      img="/ui/intro/AboutIntro.webp"
    >
      {/* our story */}
      <Story dictionary={dictionary} />
      {/* history timeline */}
      <Achievements dictionary={dictionary} />
      {/* why choose use */}
      <WhyChooseUs dictionary={dictionary} />
      {/* team */}
      <Team dictionary={dictionary} />
      {/* partners */}
      <Partners dictionary={dictionary} />
      {/* contact us */}
      <ContacLink dictionary={dictionary} />
    </PageIntro>
  );
};

export default Page;
