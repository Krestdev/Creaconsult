import Subscription from "@/components/global/Subscription";
import NewsDetails from "@/components/news/NewsDetails";
import directus from "@/lib/directus/directus";
import { getDictionary, Locale } from "@/lib/i18n";
import { readItem, readItems } from "@directus/sdk";
import { log } from "console";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
    slug: string;
  }>;
}

async function getNewsBySlug(slug: string) {
  try {
    const result = await directus.request(
      readItems("News", {
        filter: {
          slug: {
            _eq: slug,
          },
        },
        fields: [
          "*",
          {
            user_created: ["id", "first_name", "last_name", "email"],
            images: ["id", "directus_files_id"],
          },
        ],
        limit: 1,
      })
    );

    return result[0] || null;
  } catch (error) {
    console.error("error fetching news by slug:", error);
    return null;
  }
}

async function getNewsList() {
  try {
    const result = await directus.request(
      readItems("News", {
        fields: [
          "*",
          {
            user_created: ["id", "first_name", "last_name", "email"],
            images: ["id", "directus_files_id"],
          },
        ],
        limit: 3,
      })
    );

    return result || null;
  } catch (error) {
    console.error("error fetching news by slug:", error);
    return null;
  }
}

const Page = async ({ params }: contactPageProps) => {
  const { lang, slug } = await params;
  const dictionary = await getDictionary(lang);
  // const page = dictionary.pages.contact;

  const news = await getNewsBySlug(slug);
  const newsList = await getNewsList();

  return (
    <main>
      {/* Job description */}
      <NewsDetails NewsData={news} newsList={newsList} />
      {/* Job Offers adds list */}
      {/* News Letter */}
      <Subscription dictionary={dictionary} />
    </main>
  );
};

export default Page;
