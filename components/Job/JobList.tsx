"use client";

import clsx from "clsx";
import Link from "next/link";
import { ArrowRight } from "phosphor-react";
import { useEffect, useState } from "react";
import SectionContainer from "../global/SectionContainer";
import { filterJobs } from "@/lib/FilterJobs";
import { Dictionary } from "@/lib/i18n";

interface JobOfferProps {
  Jobs: any;
  dicrionary: Dictionary;
}

const JobList = ({ Jobs, dicrionary }: JobOfferProps) => {
  const [jobs, setJobs] = useState<Record<string, any>[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Record<string, any>[]>([]);
  const [filter, setFilter] = useState<"active" | "all">("all");
  const now = new Date();

  const filters: ("active" | "all")[] = ["all", "active"];

  useEffect(() => {
    setJobs(Jobs);
  }, [Jobs]);

  useEffect(() => {
    if (jobs.length > 0) {
      setFilteredJobs(filterJobs(jobs, filter));
    }
  }, [filter, jobs]);

  return (
    <SectionContainer>
      <div className="space-y-2 mb-4">
        <h2 className="font-semibold hidden md:block">
          {dicrionary.Jobs.title.title.main}
        </h2>
        <h4 className="font-semibold md:hidden">
          {dicrionary.Jobs.title.title.main}
        </h4>
        <h6 className="max-w-[700px]">
          {
            "Des solutions innovantes en ingénierie et maîtrise d'œuvre pour des projets d'exception."
          }
        </h6>
      </div>
      <div className="space-y-4">
        <ul className="flex gap-2 flex-wrap">
          {filters.map((option, index) => {
            return (
              <li key={index}>
                <button
                  onClick={() => setFilter(option)}
                  className={clsx(
                    "rounded-full px-4 py-2",
                    filter === option.toLocaleLowerCase()
                      ? "bg-[var(--primary)] text-white"
                      : "bg-[#700032]/10"
                  )}
                >
                  {option}
                </button>
              </li>
            );
            //
          })}
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredJobs.length > 0 &&
            filteredJobs
              .filter((job: any) => new Date(job.expire) > new Date())
              .sort(
                (a, b) =>
                  new Date(b.expire).getTime() - new Date(a.expire).getTime()
              )
              .map((job, index) => {
                console.log("expires on", job.expire);
                return (
                  <div key={index} className="shadow-md shadow-black">
                    <div className="w-full flex flex-col gap-4 mb-4 relative">
                      <img
                        src={`${process.env.NEXT_IMAGE_BASE}assets/${job.illustration}`}
                        alt="article"
                        className="w-full h-[250px] object-cover bg-slate-300"
                      />
                      <button
                        className={clsx(
                          "rounded px-2 py-1 absolute top-2 right-2",
                          "text-[var(--primary)]",
                          `${
                            !job.expire || new Date(job.expire) > now
                              ? "bg-green-200"
                              : "bg-red-200"
                          }`
                        )}
                      >
                        {/* Active expire */}

                        {!job.expire || new Date(job.expire) > now
                          ? "Active"
                          : "Expired"}
                      </button>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold hidden md:block">
                        {job.title}
                      </h4>

                      {/* <h6 className="font-semibold md:hidden">{job.title}</h6> */}
                      <ul className="flex gap-2 my-4 flex-wrap">
                        {job.tags &&
                          job.tags.map((filter: string, index: number) => {
                            return (
                              <li key={index}>
                                <button
                                  className={clsx(
                                    "rounded-full px-2 py-1",
                                    "bg-[var(--primary)] text-white"
                                  )}
                                >
                                  {filter}
                                </button>
                              </li>
                            );
                            //
                          })}
                      </ul>
                      <p>{job.summary}</p>
                      <Link
                        href={`jobs/${job.id}`}
                        className="flex gap-2 items-center text-[var(--primary)] font-semibold"
                      >
                        <p>{dicrionary.apply}</p> <ArrowRight size={24} />
                      </Link>
                    </div>
                  </div>
                );
              })}

          {filteredJobs
            .filter((job: any) => new Date(job.expire) <= new Date())
            .map((job, index) => {
              return (
                <div key={index} className="shadow-md shadow-black">
                  <div className="w-full flex flex-col gap-4 mb-4 relative">
                    <img
                      src={`${process.env.NEXT_IMAGE_BASE}assets/${job.illustration}`}
                      alt="article"
                      className="w-full h-[250px] object-cover bg-slate-300"
                    />
                    <button
                      className={clsx(
                        "rounded px-2 py-1 absolute top-2 right-2",
                        "text-[var(--primary)]",
                        `${
                          !job.expire || new Date(job.expire) > now
                            ? "bg-green-200"
                            : "bg-red-200"
                        }`
                      )}
                    >
                      {/* Active expire */}

                      {!job.expire || new Date(job.expire) > now
                        ? "Active"
                        : "Expired"}
                    </button>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold hidden md:block">
                      {job.title}
                    </h4>

                    {/* <h6 className="font-semibold md:hidden">{job.title}</h6> */}
                    <ul className="flex gap-2 my-4 flex-wrap">
                      {job.tags &&
                        job.tags.map((filter: string, index: number) => {
                          return (
                            <li key={index}>
                              <button
                                className={clsx(
                                  "rounded-full px-2 py-1",
                                  "bg-[var(--primary)] text-white"
                                )}
                              >
                                {filter}
                              </button>
                            </li>
                          );
                          //
                        })}
                    </ul>
                    <p>{job.summary}</p>
                    <Link
                      href={`jobs/${job.id}`}
                      className="flex gap-2 items-center text-[var(--primary)] font-semibold"
                    >
                      <p>{dicrionary.apply}</p> <ArrowRight size={24} />
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

export default JobList;
