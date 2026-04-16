"use client";
import NewsDetails from "@/components/news/NewsDetails";
import { Dictionary } from "@/lib/i18n/types";
import { newQuery } from "@/lib/queries/tanstack.queries";

interface LatestNewsProps {
  dictionary: Dictionary;
  slug: string;
}

const ClientDetailNews = ({ dictionary, slug }: LatestNewsProps) => {
  const { data: news, isLoading: isAllLoading } = newQuery.newById(slug);
  const { data: newsList, isLoading: isNewsListLoading } = newQuery.news();

  if (isAllLoading || isNewsListLoading) {
    return (
      <main>
        <p>Loading...</p>
      </main>
    );
  }
  return (
    <>
      {/* Job description */}
      {news && newsList && <NewsDetails NewsData={news} newsList={newsList} />}
    </>
  );
};

export default ClientDetailNews;
