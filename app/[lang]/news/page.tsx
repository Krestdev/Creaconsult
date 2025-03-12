import LatestNews from "@/components/global/LatestNews";
import NewsList from "@/components/news/NewsList";
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
  console.log(dictionary);

  return (
    <main>
      {/* Lattest news topics */}
      <LatestNews />
      {/* News list */}
      <NewsList />
      {/* adds */}
      {/* events list */}
      {/* News Letter */}
      {/* contact */}
    </main>
  );
};

export default Page;
