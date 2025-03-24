import {useTranslations} from 'next-intl';
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Partners from "@/components/Partners";
import ContactForm from "@/components/ContactForm";

export default function Home() {
    const t = useTranslations();

    return (
        <>
            <Hero/>
            <Services/>
            <Testimonials/>
            <Partners />
            <FAQ/>
            <ContactForm />
        </>
    );
}