import Subscription from "@/components/global/Subscription";
import NewsDetails from "@/components/news/NewsDetails";
import directus from "@/lib/directus/directus";
import { getDictionary, Locale } from "@/lib/i18n";
import { readItem, readItems } from "@directus/sdk";
import { log } from "console";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
    id: string;
  }>;
}

async function getNews(id: number) {
  return directus.request(readItem("News", id));
}

async function getFiles(fileIds: number[]) {
  if (!fileIds.length) return [];

  try {
    const files = await directus.request(
      readItems("News_files", {
        fields: ["id", "directus_files_id"],
        filter: { id: { _in: fileIds } },
      })
    );
    log(files);
    return files;
  } catch (err) {
    console.log(err);
  }
}

const Page = async ({ params }: contactPageProps) => {
  const { lang, id } = await params;
  const dictionary = await getDictionary(lang);
  // const page = dictionary.pages.contact;
  console.log(dictionary == dictionary);

  const news = await getNews(parseInt(id));
  news.images = await getFiles(news.images);

  return (
    <main>
      {/* Job description */}
      <NewsDetails NewsData={news} />
      {/* Job Offers adds list */}
      {/* News Letter */}
      <Subscription />
    </main>
  );
};

export default Page;
