"use client";

import { useEffect, useState } from "react";
import SectionContainer from "../global/SectionContainer";
import Link from "next/link";
import { ArrowRight } from "phosphor-react";

interface NewsListPorps {
  NewsData: any;
  newsList: Record<string, any>[] | null;
}

const NewsDetails = ({ NewsData, newsList }: NewsListPorps) => {
  const [news, setNews] = useState<Record<string, any>>();
  useEffect(() => {
    setNews(NewsData);
  }, [NewsData]);

  return (
    <SectionContainer>
      {news && (
        <div className="flex">
          <div className="space-y-4 md:max-w-4xl">
            <h2 className="font-semibold hidden md:block">{news.title}</h2>
            <h5 className="font-semibold md:hidden">{news.title}</h5>
            <h6>
              Created by{" "}
              <span className="font-bold">
                <b className=" text-[var(--primary)]">
                  {news.user_created.first_name}
                </b>
                {" . "}
              </span>
              {new Date(news.date_created).toDateString()}
            </h6>
            <div className="space-y-4">
              <img
                src={`${process.env.NEXT_IMAGE_BASE}assets/${news.cover}`}
                alt="news"
                className="w-full max-h-[300px] object-cover object-center"
              />

              <h4>{news.subtitle}</h4>
              <p>{news.summary}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8">
              {news.images.map(
                (
                  imgData: { id: number; directus_files_id: string },
                  index: number
                ) => {
                  return (
                    <div className="relative w-full h-fit" key={index}>
                      <img
                        src={`${process.env.NEXT_IMAGE_BASE}assets/${imgData.directus_files_id}`}
                        alt={`${imgData.directus_files_id}`}
                        className="w-full h-full max-h-[200px] object-cover"
                      />
                      <div className="absolute p-4 w-full bottom-0 bg-gradient-to-b from-transparent to-[#700032]">
                        <small className="font-semibold text-white">
                          {imgData.id}
                        </small>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            <div dangerouslySetInnerHTML={{ __html: news.content }} />
          </div>
          <div className="xl:w-1/2 space-y-4">
            {newsList &&
              newsList.map((article) => {
                return (
                  <div
                    className="flex gap-4 flex-col md:flex-row"
                    key={article.id}
                  >
                    <img
                      className="md:w-[300px] h-[250px] object-cover bg-slate-300 shadow-md shadow-black"
                      src={`${process.env.NEXT_IMAGE_BASE}assets/${article.cover}`}
                      onError={(e) => {
                        e.currentTarget.src = "/ui/creamotif unique red.svg";
                      }}
                      alt="img"
                    />

                    <div className="flex-1 flex flex-col">
                      <Link href={`news/${news.slug}`}>
                        <h4 className="hidden md:block !line-clamp-3">
                          {article.title}
                        </h4>
                        <h6 className="md:hidden">{article.title}</h6>
                      </Link>
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
      )}
    </SectionContainer>
  );
};

export default NewsDetails;
