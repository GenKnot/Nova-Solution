'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const Testimonials = () => {
    const locale = useLocale();
    const t = useTranslations('testimonials');

    const testimonials = t.raw('items');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="reviews" className="relative py-16 md:py-24 bg-gray-900 text-white overflow-hidden">
            <div className="absolute top-0 left-0 w-1/3 h-full">
                <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,0 L100,100 L150,200 L100,300 L0,400" stroke="white" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.2" />
                </svg>
            </div>

            <div className="absolute bottom-0 right-0 w-1/3 h-full">
                <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M300,0 L200,100 L250,200 L200,300 L300,400" stroke="white" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.2" />
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase">{t('title')}</h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {testimonials.map((testimonial: any, index: number) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="bg-white rounded-lg p-6 text-gray-800 shadow-lg flex flex-col h-full"
                        >
                            <div className="mb-4 h-6">
                                <h3 className="text-xl font-bold text-gray-900 uppercase">{testimonial.company}</h3>
                            </div>
                            <p className="text-gray-600 mb-6 flex-grow">{testimonial.quote}</p>
                            <div className="flex items-center mt-auto">
                                <div className="flex-shrink-0 mr-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;