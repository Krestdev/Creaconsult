import AboutIntro from "@/components/about/AboutIntro";
import Mission from "@/components/about/Mission";
import PartnersDetails from "@/components/about/PartnersDetails";
import Structure from "@/components/about/Structure";
import Team from "@/components/about/Team";
import Values from "@/components/about/Values";
import Vission from "@/components/about/Vission";
import PageHeader from "@/components/global/PageHeader";
import { getDictionary, Locale } from "@/lib/i18n";

interface AboutPageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function Page({ params }: AboutPageProps) {
  const { lang } = await params;
  console.log(lang);
  const dictionary = await getDictionary(lang);
  const page = dictionary.pages.about;

  return (
    <main>
      <PageHeader page={page} />
      <AboutIntro />
      <Structure />
      <div className="">
        <Vission />
        <Mission />
      </div>
      <PartnersDetails />
      <Values />
      <Team />
    </main>
  );
}
