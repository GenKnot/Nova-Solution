'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const Footer = () => {
    const locale = useLocale();
    const t = useTranslations('footer');
    const currentYear = new Date().getFullYear();


    const footerLinks = [
        {
            title: t('categories.services'),
            links: [
                { name: t('links.managedIT'), href: `/services/managed-it` },
                { name: t('links.coManagedIT'), href: `/services/co-managed-it` },
                { name: t('links.cyberSecurity'), href: `/services/cyber-security` },
                { name: t('links.cloudServices'), href: `/services/cloud` }
            ]
        },
        {
            title: t('categories.about'),
            links: [
                { name: t('links.faq'), href: `/#faq` },
                { name: t('links.contact'), href: `/#contact` }
            ]
        }
    ];

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-12 gap-8">

                    <div className="md:col-span-4">
                        <Image
                            src="/ns-logo-white.svg"
                            alt="Nova Solution"
                            width={140}
                            height={56}
                            className="mb-4"
                        />
                        <p className="text-sm text-gray-400 mt-4 pr-4">
                            {t('company.description')}
                        </p>


                        <div className="mt-6">
                            <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">{t('company.contact')}</h3>
                            <p className="text-sm text-gray-400">{t('company.phone')}</p>
                            <p className="text-sm text-gray-400">{t('company.email')}</p>
                            <p className="text-sm text-gray-400 mt-1">{t('company.address')}, {t('company.country')}</p>
                        </div>
                    </div>


                    <div className="hidden md:block md:col-span-2"></div>

                    {footerLinks.map((category, idx) => (
                        <div key={idx} className="md:col-span-3">
                            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">{category.title}</h3>
                            <ul className="space-y-2">
                                {category.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link
                                            href={`/${locale}${link.href}`}
                                            className="text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <p className="text-center text-xs text-gray-500">
                        {t('copyright', { year: currentYear })}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;