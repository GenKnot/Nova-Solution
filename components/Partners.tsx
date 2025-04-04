'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const Partners = () => {
    const t = useTranslations('partners');

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="partners" className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-pink-100 opacity-40 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-50 opacity-30 rounded-tr-full transform -translate-x-1/2 translate-y-1/4"></div>

            {/* Dotted line decoration */}
            <div className="absolute top-1/3 right-24 w-64 h-64 opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,0 L200,200" stroke="#E53E3E" strokeWidth="1" strokeDasharray="5,5" />
                    <path d="M200,0 L0,200" stroke="#E53E3E" strokeWidth="1" strokeDasharray="5,5" />
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-5 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="lg:col-span-2"
                    >
                        <div className="mb-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('title')}</h2>
                            <div className="h-1 w-20 bg-red-600 my-4"></div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{t('subtitle')}</h3>
                        </div>

                        <p className="text-gray-600 text-lg">
                            {t('description')}
                        </p>
                    </motion.div>

                    {/* Right side: Partnership categories */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="lg:col-span-3 grid md:grid-cols-2 gap-6"
                    >
                        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 rounded-bl-full opacity-50"></div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{t('categories.enterprise.title')}</h3>
                            <div className="h-0.5 w-12 bg-red-600 mb-4"></div>
                            <p className="text-gray-600 relative z-10">
                                {t('categories.enterprise.description')}
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 rounded-bl-full opacity-50"></div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{t('categories.security.title')}</h3>
                            <div className="h-0.5 w-12 bg-red-600 mb-4"></div>
                            <p className="text-gray-600 relative z-10">
                                {t('categories.security.description')}
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 rounded-bl-full opacity-50"></div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{t('categories.cloud.title')}</h3>
                            <div className="h-0.5 w-12 bg-red-600 mb-4"></div>
                            <p className="text-gray-600 relative z-10">
                                {t('categories.cloud.description')}
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 rounded-bl-full opacity-50"></div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{t('categories.infrastructure.title')}</h3>
                            <div className="h-0.5 w-12 bg-red-600 mb-4"></div>
                            <p className="text-gray-600 relative z-10">
                                {t('categories.infrastructure.description')}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Partners;