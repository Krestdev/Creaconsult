"use client";
import LatestNews from "@/components/global/LatestNews";
import NewsList from "@/components/news/NewsList";
import { Dictionary } from "@/lib/i18n/types";
import { newQuery } from "@/lib/queries/tanstack.queries";

interface LatestNewsProps {
  dictionary: Dictionary;
}

const ClientNews = ({ dictionary }: LatestNewsProps) => {
  const { data: News, isLoading: isAllLoading } = newQuery.news();

  if (isAllLoading) {
    return (
      <main>
        <p>Loading...</p>
      </main>
    );
  }
  return (
    <>
      {/* Lattest news topics */}
      {News && News.length > 0 && (
        <LatestNews LatestNews={News} dictionary={dictionary} />
      )}
      {/* News list */}
      {News && News.length > 0 && (
        <NewsList NewsListData={News} dictionary={dictionary} />
      )}
    </>
  );
};

export default ClientNews;
