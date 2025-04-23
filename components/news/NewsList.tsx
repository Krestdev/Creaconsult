"use client";

import clsx from "clsx";
import Link from "next/link";
import { ArrowRight } from "phosphor-react";
import { useEffect, useState } from "react";
import SectionContainer from "../global/SectionContainer";
import { Dictionary } from "@/lib/i18n";

const NewsList = ({
  NewsListData,
  dictionary,
}: {
  NewsListData: any;
  dictionary: Dictionary;
}) => {
  const [news, setNews] = useState<Record<string, any>[]>([]);
  const [filteredNews, setFilteredNews] = useState<Record<string, any>[]>(news);

  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (
    filterType: "all" | "today" | "this-week" | "this-month" | "headline"
  ) => {
    setActiveFilter(filterType);
    const filtered = filterNews(filterType);
    setFilteredNews(filtered);
  };

  const filterNews = (
    filterType: "all" | "today" | "this-week" | "this-month" | "headline"
  ) => {
    const now = new Date();
    const today = new Date(now.setHours(0, 0, 0, 0));

    switch (filterType) {
      case "today":
        return news.filter((item) => {
          const itemDate = new Date(item.date_created);
          return itemDate >= today;
        });

      case "this-week":
        const weekStart = new Date(today);
        weekStart.setDate(weekStart.getDate() - weekStart.getDay()); // Start of week (Sunday)
        return news.filter((item) => {
          const itemDate = new Date(item.date_created);
          return itemDate >= weekStart;
        });

      case "this-month":
        const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
        return news.filter((item) => {
          const itemDate = new Date(item.date_created);
          return itemDate >= monthStart;
        });

      case "headline":
        return news.filter((item) => item.headline);

      default:
        return news;
    }
  };

  useEffect(() => {
    setNews(NewsListData);
    setFilteredNews(NewsListData);
  }, [NewsListData]);

  return (
    <SectionContainer>
      <div className="space-y-2 mb-4">
        <h2 className="font-semibold">{dictionary.pages.news.title}</h2>
        <h6 className="max-w-[700px]">
          {
            "Des solutions innovantes en ingénierie et maîtrise d'œuvre pour des projets d'exception."
          }
        </h6>
      </div>
      <div className="space-y-4">
        <ul className="flex gap-2">
          {[
            { picker: "all", label: "All" },
            { picker: "today", label: "Toay" },
            { picker: "this-week", label: "This Week" },
            { picker: "this-month", label: "This Month" },
            { picker: "headline", label: "Headline" },
          ].map((filter, index) => {
            return (
              <li key={index}>
                <button
                  onClick={() =>
                    handleFilter(
                      filter.picker as
                        | "all"
                        | "today"
                        | "this-week"
                        | "this-month"
                        | "headline"
                    )
                  }
                  className={clsx(
                    "rounded-full px-4 py-2",
                    activeFilter === filter.picker
                      ? "bg-[var(--primary)] text-white"
                      : "bg-[#700032]/10"
                  )}
                >
                  {filter.label}
                </button>
              </li>
            );
            //
          })}
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNews.length > 0 &&
            filteredNews.map((news, index) => {
              return (
                <div key={index}>
                  <div className="w-full flex flex-col gap-4 mb-4">
                    <img
                      src={
                        news.cover
                          ? `${process.env.NEXT_IMAGE_BASE}assets/${news.cover}`
                          : "/ui/creamotif unique red.svg"
                      }
                      alt="articel"
                      className="w-full h-[250px] object-cover bg-slate-300  shadow-md shadow-black"
                    />
                  </div>
                  <div>
                    <small className=" italic">
                      created by{" "}
                      <b className=" text-[var(--primary)]">
                        {news.user_created.first_name}
                      </b>
                      {" -- "}
                      {new Date(news.date_created).toDateString()}
                    </small>
                    <Link href={`news/${news.slug}`}>
                      <h4 className="font-semibold hidden md:block line-clamp-1">
                        {news.title}
                      </h4>
                      <h6 className="font-semibold md:hidden line-clamp-1">
                        {news.title}
                      </h6>
                    </Link>
                    <p className=" line-clamp-5">{news.summary}</p>
                    <Link
                      href={`news/${news.slug}`}
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
    </SectionContainer>
  );
};

export default NewsList;
