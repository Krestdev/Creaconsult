"use client";

import { useQuery } from "@tanstack/react-query";
import { jobQuery } from "@/lib/queries/tanstack";
import Submit from "../Submit";
import { getDictionary, Locale } from "@/lib/i18n";
import { useEffect, useState } from "react";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
    id: string;
  }>;
}

function Page({ params }: contactPageProps) {
  const [dictionary, setDictionary] = useState<any>(null);
  const [resolvedParams, setResolvedParams] = useState<{lang: Locale; id: string} | null>(null);
  
  useEffect(() => {
    params.then(async (resolved) => {
      setResolvedParams(resolved);
      const dict = await getDictionary(resolved.lang);
      setDictionary(dict);
    });
  }, [params]);
  
  const { data: job, isLoading: isJobLoading } = jobQuery.jobById(resolvedParams?.id || "");

  // Loading state
  if (isJobLoading || !dictionary || !resolvedParams) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      {job && <Submit JobData={job} dictionary={dictionary} />}
    </div>
  );
}

export default Page;