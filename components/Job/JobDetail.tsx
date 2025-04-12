"use client";

import clsx from "clsx";
import Link from "next/link";
import { Suitcase } from "phosphor-react";
import { useEffect, useState } from "react";
import SectionContainer from "../global/SectionContainer";

const JobDetail = ({ JobData }: { JobData: any }) => {
  const [Job, setJob] = useState<Record<string, any>>();
  useEffect(() => {
    setJob(JobData);
  }, [JobData]);

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <SectionContainer className="pb-0">
      {Job && (
        <>
          <div className="flex gap-4 justify-center items-start flex-col">
            <img
              src={`${process.env.NEXT_IMAGE_BASE}assets/${Job.illustration}`}
              alt="job"
              className="md:w-1/2 h-[300px] object-cover"
            />

            <div className="w-1/2 space-y-2 hidden md:block">
              <h3>{Job.title}</h3>
              <h5>
                <span className="font-semibold">Posts: </span>{" "}
                {Job.applications}
              </h5>
              <h5>
                <span className="font-semibold">Location: </span>
                {Job.location}
              </h5>
              <h5>
                <span className="font-semibold">Contract: </span>
                {Job.type}
              </h5>
              <h5>
                <span className="font-semibold">Expire Date: </span>
                {Job.expire ? new Date(Job.expire).toUTCString() : ""}
              </h5>
            </div>
            <div className="space-y-2 md:hidden">
              <h5 className="font-bold">{Job.title}</h5>
              <h6>
                <span className="font-semibold">Posts: </span>{" "}
                {Job.applications}
              </h6>
              <h6>
                <span className="font-semibold">Location: </span>
                {Job.location}
              </h6>
              <h6>
                <span className="font-semibold">Contract: </span>
                {Job.type}
              </h6>
              <h6>
                <span className="font-semibold">Expire Date: </span>
                {Job.expire ? new Date(Job.expire).toUTCString() : ""}
              </h6>
            </div>
          </div>
          <hr className="w-full border-1 mt-4 border-[#700032]/50" />
          <div className="flex">
            <div className="md:w-2/3 w-full">
              <div className="space-y-4 my-[24px]">
                <div>
                  <h3 className="font-semibold hidden md:block">Skills</h3>
                  <h5 className="font-semibold md:hidden">Skills</h5>
                  <ul className="flex gap-2 my-4 flex-wrap">
                    {Job.tags.map((filter: string, index: number) => {
                      return (
                        <li key={index}>
                          <button
                            className={clsx(
                              "px-2 py-1 shadow-md shadow-gray-500",
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
                </div>
                <div>
                  <h3 className="font-semibold hidden md:block">Description</h3>
                  <h5 className="font-semibold md:hidden">Description</h5>
                  <div dangerouslySetInnerHTML={{ __html: Job.description }} />
                </div>
              </div>
              <div className="flex gap-4 flex-col md:flex-row">
                <Link
                  href={`https://www.krestholding.com/offres`}
                  className={clsx(
                    "text-white px-6 py-4 flex gap-2 justify-center shadow-md shadow-gray-500",
                    "bg-[var(--primary)]"
                  )}
                >
                  <Suitcase size={16} />
                  Apply for this job
                </Link>
                <button
                  onClick={copyToClipboard}
                  className={clsx(
                    "text-white px-6 py-4 flex gap-2 justify-center shadow-md shadow-gray-500",
                    "bg-green-500"
                  )}
                >
                  <Suitcase size={16} />
                  {isCopied ? "Copied!" : "Copy Link"}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </SectionContainer>
  );
};

export default JobDetail;
