"use client";
import Submit from "../Submit";
import { getDictionary, Locale } from "@/lib/i18n";
import { jobQuery } from "@/lib/queries/tanstack.queries";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
    id: string;
  }>;
}

async function Page({ params }: contactPageProps) {
  const { id, lang } = await params;
  const dictionary = await getDictionary(lang);
  const { data: job, isLoading: isJobLoading } = jobQuery.jobById(id);

  if (isJobLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  // const job = await getJob(parseInt(id));
  return <div>{job && <Submit JobData={job} dictionary={dictionary} />}</div>;
}

export default Page;

// export async function generateStaticParams() {
//   const blogs = await new SanityService().getOffers();
//   return blogs.map((item) => ({ id: item._id }));
// }
