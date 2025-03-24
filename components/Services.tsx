'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';

const Services = () => {
    const t = useTranslations('services');
    const locale = useLocale();

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };


    const serviceCards = [
        {
            id: 'managed',
            title: t('managed.title'),
            description: t('managed.description'),
            cta: t('managed.cta'),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            ),
            bgClass: 'bg-gradient-to-br from-pink-50 to-white',
            titleClass: 'text-gray-900',
            textClass: 'text-gray-700',
            buttonClass: 'bg-red-600 text-white hover:bg-red-700',
            path: `/${locale}/services/managed-it`
        },
        {
            id: 'coManaged',
            title: t('coManaged.title'),
            description: t('coManaged.description'),
            cta: t('coManaged.cta'),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            ),
            bgClass: 'bg-gradient-to-br from-pink-50 to-white',
            titleClass: 'text-gray-900',
            textClass: 'text-gray-700',
            buttonClass: 'bg-red-600 text-white hover:bg-red-700',
            path: `/${locale}/services/co-managed-it`
        },
        {
            id: 'security',
            title: 'Cyber-Security',
            description: 'Increasingly, Quebec\'s small and medium sized businesses are the target of cyber attacks. At NS, cybersecurity is at the heart of everything we do. Our dedicated IT Security team ensures your peace of mind by monitoring and reacting to any potential threats.',
            cta: 'LEARN MORE',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            ),
            bgClass: 'bg-gradient-to-br from-pink-50 to-white',
            titleClass: 'text-gray-900',
            textClass: 'text-gray-700',
            buttonClass: 'bg-red-600 text-white hover:bg-red-700',
            path: `/${locale}/services/cyber-security`
        },
        {
            id: 'cloud',
            title: 'Cloud Services',
            description: 'Get all the benefits of the cloud with the utmost confidence and security. NS technologies is a top tier Microsoft certified partner, specializing in Microsoft 365 and Azure. We have the expertise and resources to manage your cloud solutions.',
            cta: 'LEARN MORE',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>
            ),
            bgClass: 'bg-gradient-to-br from-pink-50 to-white',
            titleClass: 'text-gray-900',
            textClass: 'text-gray-700',
            buttonClass: 'bg-red-600 text-white hover:bg-red-700',
            path: `/${locale}/services/cloud`
        }
    ];

    return (
        <div className="relative py-16 md:py-24 overflow-hidden bg-white">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/6 h-1/6 bg-pink-100 opacity-30 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-1/8 h-1/8 bg-pink-100 opacity-20 rounded-tr-full"></div>

            {/* Dotted pattern decoration */}
            <div className="absolute top-1/4 right-8 w-40 h-40">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                        <path d="M2 2H98V98H2V2Z" stroke="#E53E3E" strokeWidth="0.5" strokeDasharray="4 4"/>
                    </g>
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        {t('msp.title')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('msp.subtitle')}
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 gap-8 xl:gap-10"
                >
                    {serviceCards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            variants={fadeInUp}
                            className={`${card.bgClass} rounded-lg shadow-md overflow-hidden border border-gray-100`}
                        >
                            <div className="p-8">
                                <div className="flex items-start mb-4">
                                    <div className="flex-shrink-0 mr-4">
                                        {card.icon}
                                    </div>
                                    <h3 className={`${card.titleClass} text-2xl font-bold leading-tight`}>
                                        {card.title}
                                    </h3>
                                </div>

                                <div className="h-0.5 w-20 bg-red-600 mb-6"></div>

                                <p className={`${card.textClass} mb-8`}>
                                    {card.description}
                                </p>

                                <Link href={card.path}>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`${card.buttonClass} font-semibold py-2 px-6 rounded-md transition-colors`}
                                    >
                                        {card.cta}
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Services;