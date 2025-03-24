import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {ReactNode} from 'react';
import '../globals.css';
import Navbar from "@/components/Navbar";
import {Metadata} from "next";
import Footer from "@/components/Footer";


const locales = ['en', 'fr'];


export function generateStaticParams() {
    return locales.map(locale => ({locale}));
}


export const metadata: Metadata = {
    title: "NOVA Solution",
    description: "A Complete IT Department For Your Business",
};


async function getMessages(locale: string) {
    try {
        return (await import(`../../locales/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
}

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: ReactNode;
    params: { locale: string } | Promise<{ locale: string }>;
}) {

    const resolvedParams = await params;

    const {locale} = resolvedParams;

    if (!locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages(locale);

    return (
        <html lang={locale}>
        <body className="bg-white text-gray-900">
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar/>
            <main>{children}</main>
            <Footer />
        </NextIntlClientProvider>
        </body>
        </html>
    );
}