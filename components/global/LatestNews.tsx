"use client";

import { ArrowRight } from "phosphor-react";
import SectionContainer from "./SectionContainer";
import { useEffect, useState } from "react";
import Link from "next/link";

const LatestNews = ({ LatestNews }: { LatestNews: any }) => {
  const [news, setNews] = useState<Record<string, any>[]>([]);

  useEffect(() => {
    setNews(LatestNews.filter((article: any) => article.headline === true));
  }, [LatestNews]);

  return (
    <SectionContainer>
      <div className="flex flex-col gap-12">
        <h2 className="font-semibold hidden md:block">Headlines</h2>
        <h4 className="font-bold md:hidden">Headlines</h4>
        <div className="flex gap-8 flex-col xl:flex-row">
          {news.length > 0 && (
            <div className="xl:w-1/2">
              <div className="w-full flex flex-col gap-4 mb-4">
                <img
                  src={`${process.env.NEXT_IMAGE_BASE}assets/${news[0].cover}`}
                  alt="articel"
                  className="w-full h-[350px] object-cover bg-slate-300  shadow-md shadow-black"
                />
                <div className="flex flex-col md:flex-row gap-4">
                  {news[0].images.length > 0 &&
                    news[0].images.map(
                      (
                        imgData: { id: number; directus_files_id: string },
                        index: number
                      ) => {
                        return (
                          <img
                            key={index}
                            src={`${process.env.NEXT_IMAGE_BASE}assets/${imgData.directus_files_id}`}
                            alt="articel"
                            className="w-full md:max-w-[300px] h-[150px] object-cover bg-slate-300  shadow-md shadow-black"
                          />
                        );
                      }
                    )}
                </div>
              </div>
              <div>
                <small className=" italic">
                  created by{" "}
                  <b className=" text-[var(--primary)]">
                    {news[0].user_created.first_name}
                  </b>
                  {" -- "}
                  {new Date(news[0].date_created).toDateString()}
                </small>
                <h4 className="font-semibold hidden md:block">
                  {news[0].title}
                </h4>
                <h6 className="font-semibold md:hidden">{news[0].title}</h6>
                <p>{news[0].summary}</p>
                <Link
                  href={`/news/${news[0].slug}`}
                  className="flex w-fit p-2 duration-300 gap-2 items-center text-[var(--primary)] font-semibold mt-auto hover:bg-[var(--primary)] hover:text-white"
                >
                  <p>Read More</p> <ArrowRight size={24} />
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
                    src={`${process.env.NEXT_IMAGE_BASE}assets/${news[0].cover}`}
                    alt="img"
                  />
                  <div className="flex-1 flex flex-col">
                    <h4 className="hidden md:block !line-clamp-3">
                      {article.title}
                    </h4>
                    <h6 className="md:hidden !line-clamp-3">{article.title}</h6>
                    <small className="pb-2 italic">
                      created by{" "}
                      <b className=" text-[var(--primary)]">
                        {article.user_created.first_name}
                      </b>
                      {" -- "}
                      {new Date(article.date_created).toDateString()}
                    </small>
                    <p className="line-clamp-4">{article.summary}</p>
                    <Link
                      href={`/news/${article.slug}`}
                      className="flex w-fit p-2 duration-300 gap-2 items-center text-[var(--primary)] font-semibold mt-auto hover:bg-[var(--primary)] hover:text-white"
                    >
                      <p>Read More</p> <ArrowRight size={24} />
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
