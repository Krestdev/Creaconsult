import LatestNews from "@/components/global/LatestNews";
import PageIntro from "@/components/global/PageIntro";
import NewsList from "@/components/news/NewsList";
import directus from "@/lib/directus/directus";
import { getDictionary, Locale } from "@/lib/i18n";
import { readItems } from "@directus/sdk";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

async function getNews() {
  return directus.request(
    readItems("News", {
      filter: {
        status: {
          _eq: "published",
        },
      },
      fields: [
        "*",
        {
          user_created: ["id", "first_name", "last_name", "email"],
          images: ["id", "directus_files_id"],
        },
      ],
    })
  );
}

const Page = async ({ params }: contactPageProps) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const News = await getNews();

  return (
    <PageIntro
      title={(await params).lang == "en" ? "News" : "Actualités"}
      img="/ui/intro/NewsIntro.webp"
      >
      {/* Lattest news topics */}
      <LatestNews LatestNews={News} dicrionary={dictionary} />
      {/* News list */}
      <NewsList NewsListData={News} dictionary={dictionary} />
      {/* adds */}
      {/* events list */}
      {/* News Letter */}
      {/* contact */}
    </PageIntro>
  );
};

export default Page;
