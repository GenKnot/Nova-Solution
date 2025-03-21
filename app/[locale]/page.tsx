import {useTranslations} from 'next-intl';
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  const t = useTranslations();

  return (
      <>
        <Hero />
        <Services />
      </>
  );
}