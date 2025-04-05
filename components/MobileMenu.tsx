'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {useLocale} from 'next-intl';
import {motion} from 'framer-motion';

interface MobileMenuProps {
    closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({closeMenu}) => {
    const t = useTranslations('nav');
    const locale = useLocale();
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    // Enhanced animation for better mobile menu experience
    const menuVariants = {
        hidden: {
            opacity: 0,
            x: "-100%",
            transition: {duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98]}
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98]}
        },
        exit: {
            opacity: 0,
            x: "-100%",
            transition: {duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98]}
        }
    };

    const itemVariants = {
        hidden: {opacity: 0, y: -10},
        visible: {opacity: 1, y: 0}
    };

    const services = [
        {
            name: 'Managed IT Services',
            path: '/services/managed-it'
        },
        {
            name: 'Co-Managed IT Services',
            path: '/services/co-managed-it'
        },
        {
            name: 'Cyber-Security',
            path: '/services/cyber-security'
        },
        {
            name: 'Cloud Services',
            path: '/services/cloud'
        }
    ];

    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 0.5}}
                exit={{opacity: 0}}
                className="fixed inset-0 bg-black z-40"
                onClick={closeMenu}
            />
            <motion.div
                className="fixed inset-y-0 left-0 w-full sm:w-80 bg-white overflow-y-auto z-50"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <Link
                        href={`/${locale}`}
                        className="text-lg font-bold text-red-600"
                        onClick={closeMenu}
                    >
                        Nova Solution
                    </Link>
                    <button
                        onClick={closeMenu}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Close menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>

                <div className="px-4 py-2 space-y-1">
                    <div className="border-b border-gray-200 py-2">
                        <button
                            onClick={() => toggleSection('services')}
                            className="flex justify-between items-center w-full px-3 py-2 text-base font-medium text-gray-800"
                        >
                            {t('services')}
                            <svg
                                className={`ml-2 w-4 h-4 transition-transform ${expandedSection === 'services' ? 'transform rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>

                        {expandedSection === 'services' && (
                            <div className="ml-4 mt-2 space-y-1 pb-2">
                                {services.map((service, idx) => (
                                    <div key={idx} className="mb-2">
                                        <div className="flex items-center">
                                            {idx === 0 && (
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     className="h-5 w-5 text-red-600 mr-2" viewBox="0 0 20 20"
                                                     fill="currentColor">
                                                    <path fillRule="evenodd"
                                                          d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            )}
                                            {idx === 1 && (
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     className="h-5 w-5 text-red-600 mr-2" viewBox="0 0 20 20"
                                                     fill="currentColor">
                                                    <path
                                                        d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                                                </svg>
                                            )}
                                            {idx === 2 && (
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     className="h-5 w-5 text-red-600 mr-2" viewBox="0 0 20 20"
                                                     fill="currentColor">
                                                    <path fillRule="evenodd"
                                                          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            )}
                                            {idx === 3 && (
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     className="h-5 w-5 text-red-600 mr-2" viewBox="0 0 20 20"
                                                     fill="currentColor">
                                                    <path
                                                        d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                                                </svg>
                                            )}
                                            <Link
                                                href={`/${locale}${service.path}`}
                                                className="flex-1 text-left text-gray-700 px-2 py-1"
                                                onClick={closeMenu}
                                            >
                                                {service.name}
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link
                        href={`/${locale}/#reviews`}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-red-600 hover:bg-gray-50"
                        onClick={closeMenu}
                    >
                        {t('reviews')}
                    </Link>

                    <Link
                        href={`/${locale}/#partners`}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-red-600 hover:bg-gray-50"
                        onClick={closeMenu}
                    >
                        {t('partners')}
                    </Link>

                    <Link
                        href={`/${locale}/#faq`}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-red-600 hover:bg-gray-50"
                        onClick={closeMenu}
                    >
                        {t('faq')}
                    </Link>

                    <Link
                        href={`/${locale}/#contact`}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-red-600 hover:bg-gray-50"
                        onClick={closeMenu}
                    >
                        {t('contact')}
                    </Link>

                    {/*<div className="pt-4 mt-4 border-t border-gray-200">*/}
                    {/*    <Link*/}
                    {/*        href="https://portal.nova-solution.ca"*/}
                    {/*        className="block px-3 py-2 text-base font-medium text-white bg-red-600 rounded-md text-center"*/}
                    {/*        onClick={closeMenu}*/}
                    {/*    >*/}
                    {/*        {t('clientPortal')}*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </div>
            </motion.div>
        </>
    );
};

export default MobileMenu;