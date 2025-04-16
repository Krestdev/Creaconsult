import JobBanner from "@/components/Job/JobBanner";
import JobList from "@/components/Job/JobList";
import directus from "@/lib/directus/directus";
import { getDictionary, Locale } from "@/lib/i18n";
import { readItems } from "@directus/sdk";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

async function getJobOffers() {
  return directus.request(
    readItems("Job", {
      filter: {
        status: {
          _eq: "published",
        },
      },
    })
  );
}

const Page = async ({ params }: contactPageProps) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  // const page = dictionary.pages.contact;
  console.log(dictionary == dictionary);

  const jobs = await getJobOffers();

  return (
    <main>
      {/* Job Offers adds list */}
      {jobs.length > 0 && <JobBanner Jobs={jobs} dicrionary={dictionary} />}
      {/* Job Offers list */}
      <JobList Jobs={jobs} dicrionary={dictionary} />
      {/* News Letter */}
    </main>
  );
};

export default Page;
