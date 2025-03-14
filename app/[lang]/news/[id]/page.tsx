import Subscription from "@/components/global/Subscription";
import NewsDetails from "@/components/news/NewsDetails";
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
      {/* Job description */}
      <NewsDetails />
      {/* Job Offers adds list */}
      <NewsList />
      {/* News Letter */}
      <Subscription />
    </main>
  );
};

export default Page;
