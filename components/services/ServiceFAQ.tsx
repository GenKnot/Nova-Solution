'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
    question: string;
    answer: string;
}

interface ServiceFAQProps {
    title: string;
    subtitle: string;
    faqs: FAQ[];
}

const ServiceFAQ: React.FC<ServiceFAQProps> = ({
                                                   title,
                                                   subtitle,
                                                   faqs
                                               }) => {
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h2>
                    <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                    className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
                >
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border-b border-gray-100 last:border-b-0 ${openQuestion === index ? 'bg-gray-50' : ''}`}
                        >
                            <button
                                className="flex justify-between items-center w-full text-left px-6 py-5 focus:outline-none transition-colors"
                                onClick={() => toggleQuestion(index)}
                                aria-expanded={openQuestion === index}
                            >
                                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                                <div className={`ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${openQuestion === index ? 'bg-red-600 border-red-600 text-white' : 'bg-white border-gray-300 text-gray-500'}`}>
                                    {openQuestion === index ? '−' : '+'}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openQuestion === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-5 text-gray-600">
                                            <div className="h-0.5 w-10 bg-red-600 mb-4"></div>
                                            <p>{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceFAQ;