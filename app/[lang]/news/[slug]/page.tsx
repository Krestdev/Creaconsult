import Subscription from "@/components/global/Subscription";
import NewsDetails from "@/components/news/NewsDetails";
import { getDictionary, Locale } from "@/lib/i18n";
import { newQuery } from "@/lib/queries/tanstack.queries";
import ClientDetailNews from "./clientDetailNews";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
    slug: string;
  }>;
}

const Page = async ({ params }: contactPageProps) => {
  const { lang, slug } = await params;
  const dictionary = await getDictionary(lang);
  // const page = dictionary.pages.contact;

  return (
    <main>
      <ClientDetailNews slug={slug} />
      {/* Job Offers adds list */}
      {/* News Letter */}
      <Subscription dictionary={dictionary} lang={lang} />
    </main>
  );
};

export default Page;
