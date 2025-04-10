import Terms from "@/components/global/Terms";
import { getDictionary, Locale } from "@/lib/i18n";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const Page = async ({ params }: contactPageProps) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  // const page = dictionary.pages.contact;
  console.log(dictionary == dictionary);

  return (
    <main>
      <Terms />
    </main>
  );
};

export default Page;
