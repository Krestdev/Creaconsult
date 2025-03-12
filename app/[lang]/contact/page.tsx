import ContactUs from "@/components/global/ContactUs";
import Subscription from "@/components/global/Subscription";
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

  return (
    <main>
      {/* Contact */}
      <ContactUs />
      {/* socials */}
      {/* map */}
      {/* newsletter */}
      <Subscription />
    </main>
  );
};

export default Page;
