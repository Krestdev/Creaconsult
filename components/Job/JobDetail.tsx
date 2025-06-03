"use client";

import clsx from "clsx";
import Link from "next/link";
import { Suitcase } from "phosphor-react";
import { useEffect, useState } from "react";
import SectionContainer from "../global/SectionContainer";
import { Dictionary } from "@/lib/i18n";
import { Button } from "../ui/button";

const JobDetail = ({ JobData, dictionary }: { JobData: any, dictionary: Dictionary }) => {
  const [Job, setJob] = useState<Record<string, any>>();
  const now = new Date();

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
              <h2><span className="font-semibold">{`${dictionary.JobsDetail.intitule}: `}</span>{Job.title}</h2>
              {/* <h5>
                <span className="font-semibold">{dictionary.JobsDetail.nombre}</span>{": "}
                {Job.applications}
              </h5> */}
              <h5>
                <span className="font-semibold">{dictionary.JobsDetail.lieu}</span>{": "}
                {Job.location}
              </h5>
              <h5>
                <span className="font-semibold">{dictionary.JobsDetail.contrat}</span>{": "}
                {Job.type}
              </h5>
              <h5>
                <span className="font-semibold">{dictionary.JobsDetail.delai}</span>{": "}
                {Job.expire ? new Date(Job.expire).toUTCString() : ""}
              </h5>
            </div>
            <div className="space-y-2 md:hidden">
              <h4><span className="font-semibold">{`${dictionary.JobsDetail.intitule}: `}</span>{Job.title}</h4>
              {/* <h5>
                <span className="font-semibold">{dictionary.JobsDetail.nombre}</span>{": "}
                {Job.applications}
              </h5> */}
              <h6>
                <span className="font-semibold">{dictionary.JobsDetail.lieu}</span>{": "}
                {Job.location}
              </h6>
              <h6>
                <span className="font-semibold">{dictionary.JobsDetail.contrat}</span>{": "}
                {Job.type}
              </h6>
              <h6>
                <span className="font-semibold">{dictionary.JobsDetail.delai}</span>{": "}
                {Job.expire ? new Date(Job.expire).toUTCString() : ""}
              </h6>
            </div>
            <button
              className={clsx(
                "rounded px-2 py-1",
                "text-[var(--primary)]",
                `${!Job.expire || new Date(Job.expire) > now
                  ? "bg-green-200"
                  : "bg-red-200"
                }`
              )}
            >
              {/* Active expire */}

              {!Job.expire || new Date(Job.expire) > now ? dictionary.JobsDetail.actif : dictionary.JobsDetail.expire}
            </button>
          </div>
          <hr className="w-full border-1 mt-4 border-[#700032]/50" />
          <div className="flex">
            <div className="md:w-2/3 w-full">
              <div className="space-y-4 my-[24px]">
                <div>
                  <h3 className="font-semibold hidden md:block">{dictionary.JobsDetail.competence}</h3>
                  <h6 className="font-semibold md:hidden">{dictionary.JobsDetail.competence}</h6>
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
                  <h3 className="font-semibold hidden md:block">{dictionary.JobsDetail.description}</h3>
                  <h5 className="font-semibold md:hidden">{dictionary.JobsDetail.description}</h5>
                  <div dangerouslySetInnerHTML={{ __html: Job.description }} className="editor" />
                </div>
              </div>
              <div className="flex gap-4 flex-col md:flex-row md:items-center">
                <Button disabled={new Date(Job.expire) <= now} className={`${new Date(Job.expire) <= now ? "cursor-not-allowed" : ""}`}>
                  <Link
                    href={`https://www.krestholding.com/offres`}
                    target="_blank"
                    className={clsx(
                      "text-white px-6 py-4 flex gap-2 justify-center shadow-md shadow-gray-500",
                      "bg-[var(--primary)]"
                    )}
                  >
                    <Suitcase size={16} />
                    {dictionary.JobsDetail.postuler}
                  </Link>
                </Button>
                <button
                  onClick={copyToClipboard}
                  className={clsx(
                    "text-white px-6 py-4 flex gap-2 justify-center shadow-md shadow-gray-500",
                    "bg-green-500"
                  )}
                >
                  <Suitcase size={16} />
                  {isCopied ? dictionary.JobsDetail.copie : dictionary.JobsDetail.copier}
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
