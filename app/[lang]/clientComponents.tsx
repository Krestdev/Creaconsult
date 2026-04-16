"use client";
import LatestNews from "@/components/global/LatestNews";
import JobBanner from "@/components/Job/JobBanner";
import { Dictionary, getDictionary, Locale } from "@/lib/i18n";
import { jobQuery, newQuery } from "@/lib/queries/tanstack.queries";
import React from "react";

interface Props {
  dictionary: Dictionary;
}

const ClientComponents = ({ dictionary }: Props) => {
  const { data: jobs, isLoading: isJobsLoading } = jobQuery.jobs();
  const { data: news, isLoading: isNewsLoading } = newQuery.news();

  return (
    <>
      {/* Job Offers adds list */}
      {jobs && <JobBanner Jobs={jobs} dictionary={dictionary} />}
      {/* latest news */}
      {news && <LatestNews LatestNews={news} dictionary={dictionary} />}
    </>
  );
};

export default ClientComponents;
