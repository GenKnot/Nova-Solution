'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';

interface ServiceCTAProps {
    title: string;
    subtitle: string;
    buttonText: string;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({
                                                   title,
                                                   subtitle,
                                                   buttonText
                                               }) => {
    const locale = useLocale();

    return (
        <section className="py-16 bg-red-600 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#smallGrid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                        <p className="text-xl opacity-90 mb-8">{subtitle}</p>
                        <Link href={`/${locale}/#contact`}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-white text-red-600 font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-colors"
                            >
                                {buttonText}
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServiceCTA;