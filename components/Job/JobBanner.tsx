"use client";

import Link from "next/link";
import { ArrowRight } from "phosphor-react";
import { useEffect, useState } from "react";
import SectionContainer from "../global/SectionContainer";
import { Dictionary } from "@/lib/i18n";
import { Button } from "../ui/button";

interface JobOBannerProps {
  Jobs: any;
  dicrionary: Dictionary;
}

const JobBanner = ({ Jobs, dicrionary }: JobOBannerProps) => {
  const [jobs, setJobs] = useState<Record<string, any>[]>([]);
  const now = new Date();

  useEffect(() => {
    setJobs(Jobs);
  }, [Jobs]);

  return (
    <SectionContainer className="pb-[24px] ">
      <div className="space-y-8">
        <h2 className="font-semibold hidden md:block">
          {dicrionary.Jobs.banner.title}
        </h2>
        <h4 className="font-semibold md:hidden">
          {dicrionary.Jobs.banner.title}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {jobs
            .filter((job) => {
              return !job.expire || new Date(job.expire) > now;
            })
            .map((job, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between bg-[#700032]/10 p-4 bg-cover bg-center text-white"
                  style={{
                    backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.4),rgba(255,0,0,0.5)),url('${process.env.NEXT_IMAGE_BASE}assets/${job.illustration}')`,
                  }}
                >
                  <div className="space-y-2">
                    <h5 className="text-white font-semibold">{job.title}</h5>
                    <p>{job.summary}</p>
                  </div>
                  <Link
                    href={`/jobs/${job.id}`}
                    className="flex gap-2 items-center text-white w-fit px-2 py-1 bg-[var(--primary)] font-semibold"
                  >
                    <p>{dicrionary.apply}</p> <ArrowRight size={24} />
                  </Link>
                </div>
              );
            })}
          <div
            className=" flex flex-col gap-8 text-white justify-center items-center w-full aspect-square bg-cover bg-[var(--primary)]"
            style={{
              backgroundImage: `linear-gradient(to bottom,rgba(255,0,0,0.5),rgba(0,0,0,0.5)),url('/ui/footer/bglines.webp')`,
            }}
          >
            <h5 className="text-white font-light flex justify-center items-center">
              <span className="text-7xl">
                {
                  jobs.filter((job) => {
                    return !job.expire || new Date(job.expire) > now;
                  }).length
                }
              </span>{" "}
              {dicrionary.new}
            </h5>
            <h2 className="text-white mariyam text-center">{dicrionary.app}</h2>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default JobBanner;
