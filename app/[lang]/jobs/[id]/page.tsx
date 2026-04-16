"use client";
import JobBanner from "@/components/Job/JobBanner";
import JobDetail from "@/components/Job/JobDetail";
import { getDictionary, Locale } from "@/lib/i18n";
import { jobQuery } from "@/lib/queries/tanstack.queries";
import ClientDetailJobs from "./clientDetailJobs";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
    id: string;
  }>;
}

const Page = async ({ params }: contactPageProps) => {
  const { lang, id } = await params;
  const dictionary = await getDictionary(lang);

  const { data: job, isLoading: isJobLoading } = jobQuery.jobById(id);
  const { data: jobs, isLoading: isAllLoading } = jobQuery.jobs();

  if (isAllLoading && isJobLoading) {
    return (
      <main>
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main>
      <ClientDetailJobs dictionary={dictionary} slug={id} />
      {/* News Letter */}
    </main>
  );
};

export default Page;
