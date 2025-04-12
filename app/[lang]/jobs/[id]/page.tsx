import JobBanner from "@/components/Job/JobBanner";
import JobDetail from "@/components/Job/JobDetail";
import directus from "@/lib/directus/directus";
import { getDictionary, Locale } from "@/lib/i18n";
import { readItem, readItems } from "@directus/sdk";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
    id: string;
  }>;
}

async function getJob(id: number) {
  return directus.request(readItem("Job", id));
}
async function getJobs() {
  return directus.request(readItems("Job"));
}

const Page = async ({ params }: contactPageProps) => {
  const { lang, id } = await params;
  const dictionary = await getDictionary(lang);
  // const page = dictionary.pages.contact;
  console.log(dictionary == dictionary);

  const job = await getJob(parseInt(id));
  const jobs = await getJobs();

  return (
    <main>
      {/* Job description */}
      <JobDetail JobData={job} />
      {/* Job Offers adds list */}
      <JobBanner Jobs={jobs} />
      {/* News Letter */}
    </main>
  );
};

export default Page;
