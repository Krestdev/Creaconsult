/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import clsx from "clsx";
import { ArrowRight } from "phosphor-react";
import SectionContainer from "../global/SectionContainer";
import { useEffect, useState } from "react";
import Link from "next/link";
import directus from "@/lib/directus/directus";

const NewsList = ({ NewsListData }: { NewsListData: any }) => {
  const [news, setNews] = useState<Record<string, any>[]>([]);

  useEffect(() => {
    setNews(NewsListData);
  }, []);

  console.log(news);

  return (
    <SectionContainer>
      <div className="space-y-2 mb-4">
        <h2 className="font-semibold">News</h2>
        <h6 className="max-w-[700px]">
          {
            "Des solutions innovantes en ingénierie et maîtrise d'œuvre pour des projets d'exception."
          }
        </h6>
      </div>
      <div className="space-y-4">
        <ul className="flex gap-2">
          {["All", "New", "Last Week", "Date"].map((filter, index) => {
            const selected = index == 0;
            return (
              <li key={index}>
                <button
                  className={clsx(
                    "rounded-full px-4 py-2",
                    selected
                      ? "bg-[var(--primary)] text-white"
                      : "bg-[#700032]/10"
                  )}
                >
                  {filter}
                </button>
              </li>
            );
            //
          })}
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.length > 0 &&
            news.map((news, index) => {
              return (
                <div key={index}>
                  <div className="w-full flex flex-col gap-4 mb-4">
                    <img
                      // src={news.images[0],"/ui/news/main1.jpeg"}
                      src={
                        news.cover
                          ? `${directus.url}assets/${news.cover}`
                          : "/ui/creamotif unique red.svg"
                      }
                      alt="articel"
                      className="w-full h-[250px] object-cover bg-slate-300  shadow-md shadow-black"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold hidden md:block line-clamp-1">
                      {news.title}
                    </h4>
                    <h6 className="font-semibold md:hidden line-clamp-1">
                      {news.title}
                    </h6>
                    <p className=" line-clamp-5">{news.summary}</p>
                    <Link
                      href={`news/${news.id}`}
                      className="flex gap-2 items-center text-[var(--primary)] font-semibold"
                    >
                      <p>Read More</p> <ArrowRight size={24} />
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default NewsList;
