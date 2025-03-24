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
                    src="/marc-olivier-jodoin-BG9oZ15a4Xk-unsplash1.jpg"
                    alt="Montreal Skyline"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center center' }}
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
                    className="max-w-3xl mx-auto"
                >
                    <div className="text-center mb-8">
                        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                            <div className="flex justify-center">A Complete IT department</div>
                            <div className="flex justify-center">For Your Business</div>
                        </h1>
                    </div>

                    <p className="text-white text-xl text-center max-w-2xl mx-auto mb-12">
                        {t('subtitle')}
                    </p>
                </motion.div>
            </div>

            {/* Checklist button with rounded corners */}
            <div className="absolute bottom-0 right-0">
                <motion.button
                    className="bg-white text-gray-800 px-6 py-3 rounded-tl-md rounded-tr-md font-medium hover:bg-gray-100 transition-colors cursor-pointer"
                >
                    {t('checklist')}
                </motion.button>
            </div>
        </div>
    );
};

export default Hero;