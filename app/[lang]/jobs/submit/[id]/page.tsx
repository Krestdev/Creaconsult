import Submit from "../Submit";
import directus from "@/lib/directus/directus";
import { getDictionary, Locale } from "@/lib/i18n";
import { readItem } from "@directus/sdk";

async function getJob(id: number) {
    return directus.request(readItem("Job", id));
}

interface contactPageProps {
  params: Promise<{
    lang: Locale;
    id: string;
  }>;
}

async function  Page({ params }: contactPageProps) {

  const {id, lang} = await params;
  const dictionary = await getDictionary(lang);

  const job = await getJob(parseInt(id));
  return (
   <div>
    <Submit JobData={job} dictionary={dictionary} />
   </div>
  );
}

export default Page;

// export async function generateStaticParams() {
//   const blogs = await new SanityService().getOffers();
//   return blogs.map((item) => ({ id: item._id }));
// }
