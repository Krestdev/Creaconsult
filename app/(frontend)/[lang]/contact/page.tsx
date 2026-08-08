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

  return (
    <main>
      {/* Contact */}
      <ContactUs dictionary={dictionary} lang={lang} />
      {/* <ContactUs createContacts={createContacts} /> */}
      {/* socials */}
      {/* map */}
      {/* newsletter */}
      <Subscription dictionary={dictionary} lang={lang} />
    </main>
  );
};

export default Page;
