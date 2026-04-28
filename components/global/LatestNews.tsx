"use client";

import { ArrowRight } from "phosphor-react";
import SectionContainer from "./SectionContainer";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Dictionary } from "@/lib/i18n";
import { useMyContext } from "@/context/MyContext";
import { New } from "@/lib/types";

interface LatestNewsProps {
  LatestNews: New[];
  dictionary: Dictionary;
}

const LatestNews = ({ LatestNews, dictionary }: LatestNewsProps) => {
  const [news, setNews] = useState<New[]>([]);

  const { setHasNewFeed } = useMyContext();

  useEffect(() => {
    setNews(LatestNews.filter((article: any) => article.headline === true));

    // Check if there are any new feeds in the last 7 days
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const hasNewFeed = LatestNews.some((feed: New) => {
      const feedDate = new Date(feed.publishedAt);
      console.log(feedDate);
      return feedDate >= sevenDaysAgo;
    });

    setHasNewFeed(hasNewFeed);
  }, [LatestNews]);

  return (
    <SectionContainer>
      <div className="flex flex-col gap-12">
        <h2 className="font-semibold hidden md:block">{dictionary.actu}</h2>
        <h4 className="font-bold md:hidden">{dictionary.actu}</h4>
        <div className="flex gap-8 flex-col xl:flex-row">
          {news.length > 0 && (
            <div className="xl:w-1/2">
              <div className="w-full flex flex-col gap-4 mb-4">
                <img
                  src={`${process.env.NEXT_IMAGE_BASE}${news[0].cover.url}`}
                  alt="articel"
                  className="w-full h-[350px] object-cover bg-slate-300  shadow-md shadow-black"
                />
                <div className="flex flex-col md:flex-row gap-4">
                  {news[0].images.length > 0 &&
                    news[0].images.map((imgData, index: number) => {
                      return (
                        <img
                          key={index}
                          src={`${process.env.NEXT_IMAGE_BASE}${imgData.url}`}
                          alt="articel"
                          className="w-full md:max-w-[300px] h-[150px] object-cover bg-slate-300  shadow-md shadow-black"
                        />
                      );
                    })}
                </div>
              </div>
              <div>
                <small className="italic">
                  {dictionary.autor}{" "}
                  <b className=" text-[var(--primary)]">Creaconsult</b>
                  {" -- "}
                  {new Date(news[0].publishedAt).toDateString()}
                </small>
                <h4 className="font-bold hidden md:block mt-6">
                  {news[0].title}
                </h4>
                <h6 className="font-semibold md:hidden">{news[0].title}</h6>
                <p className="text-[16px] line-clamp-2">{news[0].bref}</p>
                <Link
                  href={`/news/${news[0].documentId}`}
                  className="flex w-fit p-2 duration-300 gap-2 items-center text-[var(--primary)] font-semibold mt-auto hover:bg-[var(--primary)] hover:text-white"
                >
                  <p>{dictionary.voir}</p> <ArrowRight size={24} />
                </Link>
              </div>
            </div>
          )}

          <div className="xl:w-1/2 space-y-4">
            {news.map((article) => {
              return (
                <div
                  className="flex gap-4 flex-col md:flex-row"
                  key={article.id}
                >
                  <img
                    className="md:w-[300px] h-[250px] object-cover bg-slate-300 shadow-md shadow-black"
                    src={`${process.env.NEXT_IMAGE_BASE}${article.cover.url}`}
                    alt="img"
                  />
                  <div className="flex-1 flex flex-col">
                    <h5 className="hidden md:block !line-clamp-3 font-semibold">
                      {article.title}
                    </h5>
                    <h6 className="md:hidden !line-clamp-2 mt-2">
                      {article.subtitle}
                    </h6>
                    <small className="py-4 italic">
                      {dictionary.autor}{" "}
                      <b className=" text-[var(--primary)]">Creaconsult</b>
                      {" -- "}
                      {new Date(article.publishedAt).toDateString()}
                    </small>
                    <p className="line-clamp-2">{article.bref}</p>
                    <Link
                      href={`/news/${article.documentId}`}
                      className="flex w-fit p-2 duration-300 gap-2 items-center text-[var(--primary)] font-semibold hover:bg-[var(--primary)] hover:text-white"
                    >
                      <p>{dictionary.voir}</p> <ArrowRight size={24} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default LatestNews;
