'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
    const t = useTranslations('hero');

    return (
        <div className="relative h-[40rem] flex items-center">
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/marc-olivier-jodoin-BG9oZ15a4Xk-unsplash.jpg"
                    alt="Montreal Skyline"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top top' }}
                    className="brightness-75"
                    priority
                />
            </div>


            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-amber-300 to-amber-400 opacity-20"></div>


            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-xl"
                >
                    <p className="text-white text-xl mb-4">{t('subtitle')}</p>
                    <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-8">
                        {t('title')}
                    </h1>

                    <div className="mt-12">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            {t('checklist')}
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;