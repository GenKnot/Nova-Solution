'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const Services = () => {
    const t = useTranslations('services');

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-white py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        {t('msp.title')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('msp.subtitle')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Managed IT Services */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="bg-red-600 rounded-lg shadow-lg p-8 text-white"
                    >
                        <h3 className="text-2xl font-bold mb-4">{t('managed.title')}</h3>
                        <p className="mb-6">{t('managed.description')}</p>
                        <button className="bg-white text-red-600 font-semibold py-2 px-4 rounded hover:bg-gray-100 transition-colors">
                            {t('managed.cta')}
                        </button>
                    </motion.div>

                    {/* Co-Managed IT Services */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="bg-pink-50 rounded-lg shadow-lg p-8 text-gray-800"
                    >
                        <div className="flex items-center mb-4">
                            <div className="flex-shrink-0 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold">{t('coManaged.title')}</h3>
                        </div>
                        <p className="mb-6">{t('coManaged.description')}</p>
                        <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition-colors">
                            {t('coManaged.cta')}
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Services;