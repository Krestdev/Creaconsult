import PageIntro from "@/components/global/PageIntro";
import { getDictionary, Locale } from "@/lib/i18n";
import ClientNews from "./clientNews";

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
      title={(await params).lang == "en" ? "News" : "Actualités"}
      img="/ui/intro/NewsIntro.webp"
    >
      <ClientNews dictionary={dictionary} />
      {/* adds */}
      {/* events list */}
      {/* News Letter */}
      {/* contact */}
    </PageIntro>
  );
};

export default Page;
