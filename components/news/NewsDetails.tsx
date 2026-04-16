"use client";

import { useEffect, useState } from "react";
import SectionContainer from "../global/SectionContainer";
import Link from "next/link";
import { ArrowRight } from "phosphor-react";
import { New } from "@/lib/types";

interface NewsListPorps {
  NewsData: New;
  newsList: New[] | null;
}

const NewsDetails = ({ NewsData, newsList }: NewsListPorps) => {
  const [news, setNews] = useState<New | null>(null);
  useEffect(() => {
    setNews(NewsData);
  }, [NewsData]);

  return (
    <SectionContainer>
      {news && (
        <div className="flex flex-col xl:flex-row gap-24">
          <div className="space-y-12 md:max-w-4xl w-full md:mr-8">
            <div>
              <h2 className="text-black font-semibold hidden md:block">
                {news.title}
              </h2>
              <h5 className="text-black font-semibold md:hidden">
                {news.title}
              </h5>
              <h6 className="text-gray-500 font-semibold text-sm md:text-base">
                Created by{" "}
                <span className="font-bold">
                  <b className=" text-[var(--primary)]">
                    {/*  Creaconsult */}
                    Creaconsult
                  </b>
                  {" . "}
                </span>
                {new Date(news.createdAt).toDateString()}
              </h6>
            </div>
            <div className="space-y-4">
              <p>{news.bref}</p>
              <img
                src={`${process.env.NEXT_IMAGE_BASE}${news.cover?.url}`}
                alt="news"
                className="w-full max-h-[300px] object-cover object-center"
              />
              <h4 className="text-black">{news.subtitle}</h4>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8">
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
            </div> */}
            <div
              dangerouslySetInnerHTML={{ __html: news.content }}
              className="!mt-5"
            />
          </div>
          <div className="xl:w-1/2 space-y-8">
            {newsList &&
              newsList.map((article) => {
                return (
                  <div className="flex gap-4 flex-col" key={article.id}>
                    <img
                      className="w-full h-[200px] object-cover bg-slate-300 shadow-md shadow-gray-400"
                      src={`${process.env.NEXT_IMAGE_BASE}assets/${article.cover}`}
                      onError={(e) => {
                        e.currentTarget.src = "/ui/creamotif unique red.svg";
                      }}
                      alt="img"
                    />

                    <div className="flex-1 flex flex-col">
                      <Link href={`/news/${article.slug}`}>
                        <h4 className="hidden md:block !line-clamp-3">
                          {article.title}
                        </h4>
                        <h6 className="md:hidden">{article.title}</h6>
                      </Link>
                      <small className="pb-2 italic">
                        created by{" "}
                        <b className=" text-[var(--primary)]">
                          {/*  Creaconsult */}
                          Creaconsult
                        </b>
                        {" -- "}
                        {new Date(article.createdAt).toDateString()}
                      </small>
                      <p className="line-clamp-4">{article.bref}</p>
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
