'use client';

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {useTranslations} from 'next-intl';
import {useLocale} from 'next-intl';
import MobileMenu from './MobileMenu';
import {motion, AnimatePresence} from 'framer-motion';
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
                                alt="Nova Solution"
                                width={100}
                                height={40}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">

                        <div className="relative group">
                            <button
                                className="font-semibold text-gray-800 hover:text-red-600 transition-colors flex items-center">
                                {t('services')}
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div
                                className="absolute left-0 mt-2 w-64 opacity-0 transform scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-200 bg-white shadow-lg rounded-lg p-2 z-50">
                                <Link href={`/${locale}/services/managed-it`}
                                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 rounded-md transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-3"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    Managed IT Services
                                </Link>
                                <Link href={`/${locale}/services/co-managed-it`}
                                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 rounded-md transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-3"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                                    </svg>
                                    Co-Managed IT Services
                                </Link>
                                <Link href={`/${locale}/services/cyber-security`}
                                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 rounded-md transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-3"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    Cyber-Security
                                </Link>
                                <Link href={`/${locale}/services/cloud`}
                                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 rounded-md transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-3"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                                    </svg>
                                    Cloud Services
                                </Link>
                            </div>
                        </div>

                        <Link href={`#reviews`}
                              className="font-semibold text-gray-800 hover:text-red-600 transition-colors">
                            {t('reviews')}
                        </Link>

                        <Link href={`#partners`}
                              className="font-semibold text-gray-800 hover:text-red-600 transition-colors">
                            {t('partners')}
                        </Link>

                        <Link href={`#faq`}
                              className="font-semibold text-gray-800 hover:text-red-600 transition-colors">
                            {t('faq')}
                        </Link>
                    </nav>

                    {/* Right side elements */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href={`#contact`}
                            className="uppercase font-semibold hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
                            rel="noopener noreferrer"
                        >
                            {t('contact')}
                        </Link>

                        <LanguageSwitcher/>

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
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M4 6h16M4 12h16M4 18h16"/>
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
                    <MobileMenu closeMenu={() => setMobileMenuOpen(false)}/>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;