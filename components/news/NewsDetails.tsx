/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect, useState } from "react";
import SectionContainer from "../global/SectionContainer";

const NewsDetails = ({ NewsData }: { NewsData: any }) => {
  const [news, setNews] = useState<Record<string, any>>();
  useEffect(() => {
    setNews(NewsData);
  }, []);

  return (
    <SectionContainer>
      {news && (
        <>
          <div className="space-y-4">
            <h2 className="font-semibold hidden md:block">{news.title}</h2>
            <h5 className="font-semibold md:hidden">{news.title}</h5>
            <h6>
              by <span className="font-bold">Michelle Marie</span>
            </h6>
            <div className="space-y-4">
              <img
                src={`${process.env.NEXT_IMAGE_BASE}assets/${news.images[0].directus_files_id}`}
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
        </>
      )}
    </SectionContainer>
  );
};

export default NewsDetails;
