'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const Footer = () => {
    const locale = useLocale();
    const currentYear = new Date().getFullYear();

    // Navigation categories
    const navCategories = [
        {
            title: 'Services',
            links: [
                { name: 'Managed IT Services', href: `/services/managed-it` },
                { name: 'Co-Managed IT Services', href: `/services/co-managed-it` },
                { name: 'Cyber-Security', href: `/services/cyber-security` },
                { name: 'Cloud Services', href: `/services/cloud` }
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Career', href: `/career` },
                { name: 'The ns Blog', href: `/blog` },
                { name: 'Site Map', href: `/site-map` },
                { name: 'Service provider checklist', href: `/checklist` },
                { name: 'Privacy Policy', href: `/privacy-policy` }
            ]
        },
        {
            title: 'About',
            links: [
                { name: 'FAQ', href: `/faq` },
                { name: 'Contact', href: `/contact` },
                { name: 'Client Portal', href: 'https://portal.nstech.com', external: true }
            ]
        }
    ];

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main footer content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company info */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <Image
                                src="/ns-logo-white.svg"
                                alt="Nova Solution"
                                width={120}
                                height={48}
                                className="mb-4"
                            />
                            <p className="text-sm mt-4">
                                Since 2003, NS Technologies has accumulated expertise in managing a wide range of networks, infrastructures and applications.
                            </p>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-lg font-semibold mb-3">Contact</h3>
                            <div className="space-y-2 text-sm">
                                <p>514.xxx-xxxx</p>
                                <p>info@novasolution.ca</p>
                                <p>Canada</p>
                                <p>Montréal, QC H3C 3R7</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation links */}
                    {navCategories.map((category, idx) => (
                        <div key={idx}>
                            <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                            <ul className="space-y-2">
                                {category.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        {link.external ? (
                                            <a
                                                href={link.href}
                                                className="text-sm hover:text-white transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {link.name}
                                            </a>
                                        ) : (
                                            <Link
                                                href={`/${locale}${link.href}`}
                                                className="text-sm hover:text-white transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-gray-950 py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
                    <p>© {currentYear} Nova Solution. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;