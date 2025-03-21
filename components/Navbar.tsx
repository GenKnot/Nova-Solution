'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import MobileMenu from './MobileMenu';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
    const t = useTranslations('nav');
    const locale = useLocale();
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-4 md:space-x-10">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href={`/${locale}`} className="flex">
                            <Image
                                src="/logo.svg"
                                alt="S3 Technologies"
                                width={100}
                                height={40}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <div className="relative group">
                            <button className="font-medium text-gray-800 hover:text-red-600 transition-colors flex items-center">
                                {t('services')}
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className="absolute left-0 mt-2 w-56 opacity-0 transform scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-200 bg-white shadow-lg rounded-lg ring-1 ring-black ring-opacity-5 p-2 z-50">
                                {/* Add dropdown items here */}
                                <Link href={`/${locale}/services/managed-it`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 rounded-md transition-colors">
                                    Managed IT Services
                                </Link>
                                <Link href={`/${locale}/services/co-managed-it`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 rounded-md transition-colors">
                                    Co-Managed IT Services
                                </Link>
                                <Link href={`/${locale}/services/cyber-security`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 rounded-md transition-colors">
                                    Cyber-Security
                                </Link>
                                <Link href={`/${locale}/services/cloud`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 rounded-md transition-colors">
                                    Cloud Services
                                </Link>
                            </div>
                        </div>
                        <Link href={`/${locale}/about`} className="font-medium text-gray-800 hover:text-red-600 transition-colors">
                            {t('about')}
                        </Link>
                        <Link href={`/${locale}/career`} className="font-medium text-gray-800 hover:text-red-600 transition-colors">
                            {t('career')}
                        </Link>
                        <Link href={`/${locale}/blog`} className="font-medium text-gray-800 hover:text-red-600 transition-colors">
                            {t('blog')}
                        </Link>
                        <Link href={`/${locale}/faq`} className="font-medium text-gray-800 hover:text-red-600 transition-colors">
                            {t('faq')}
                        </Link>
                        <Link href={`/${locale}/contact`} className="font-medium text-gray-800 hover:text-red-600 transition-colors">
                            {t('contact')}
                        </Link>
                    </nav>

                    {/* Right side elements */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="https://portal.s3tech.com"
                            className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('clientPortal')}
                        </Link>

                        <LanguageSwitcher />

                        {/*<a href="tel:514.284.6262" className="hidden md:flex items-center text-gray-800 hover:text-red-600 transition-colors">*/}
                        {/*    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>*/}
                        {/*    </svg>*/}
                        {/*    514.284.6262*/}
                        {/*</a>*/}

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="bg-white p-2 rounded-md text-gray-800 focus:outline-none"
                            >
                                {mobileMenuOpen ? (
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <MobileMenu closeMenu={() => setMobileMenuOpen(false)} />
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;