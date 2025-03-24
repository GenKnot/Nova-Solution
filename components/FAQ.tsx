'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';

const FAQ = () => {
    const locale = useLocale();
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };


    const faqItems = [
        {
            question: 'How long have you been in business?',
            answer: 'Nova Solution Technologies has been providing IT services to Quebec businesses since 2003. With over 20 years of experience, we have developed deep expertise in managed IT services, cybersecurity, and cloud solutions tailored to the unique needs of small and medium-sized businesses.'
        },
        {
            question: 'What\'s a typical client for Nova Solution?',
            answer: 'Our typical clients are small to medium-sized businesses with 20-300 employees across various industries in Quebec. We specialize in serving businesses that need comprehensive IT support but may not have the resources for a full in-house IT department, or those looking to complement their existing IT team with specialized expertise.'
        },
        {
            question: 'What are your services?',
            answer: 'We offer a comprehensive range of IT services including Managed IT Services for businesses without an IT team, Co-Managed IT Services to complement existing IT departments, Cybersecurity solutions to protect against modern threats, and Cloud Services with expertise in Microsoft 365 and Azure. Each service can be tailored to meet your specific business needs.'
        },
        {
            question: 'What areas do you serve?',
            answer: 'We primarily serve businesses in Greater Montreal and throughout Quebec. Our team can provide on-site support within these regions while also offering remote services to clients across the province.'
        },
        {
            question: 'How do you handle IT emergencies?',
            answer: 'We provide 24/7 emergency support for critical issues. Our team has established response protocols and guaranteed response times based on the severity of the issue. For clients with managed service agreements, we proactively monitor systems to prevent many emergencies before they occur.'
        },
        {
            question: 'What makes Nova Solution different from other IT service providers?',
            answer: 'Nova Solution Technologies stands out through our strategic approach to IT, focusing on both immediate support needs and long-term planning. We offer detailed IT roadmaps and budgets, industry-leading cybersecurity expertise, and a team of certified professionals with experience across diverse business environments. Our 97% client retention rate speaks to our commitment to excellence and customer satisfaction.'
        }
    ];

    return (
        <section id="faq" className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 opacity-30 rounded-tl-full"></div>
            <div className="absolute top-0 left-20 w-32 h-32 bg-red-50 opacity-40 rounded-full"></div>

            {/* Dotted pattern decoration */}
            <div className="absolute bottom-10 left-10 opacity-20">
                <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="2" fill="#E53E3E" />
                    <circle cx="10" cy="30" r="2" fill="#E53E3E" />
                    <circle cx="10" cy="50" r="2" fill="#E53E3E" />
                    <circle cx="10" cy="70" r="2" fill="#E53E3E" />
                    <circle cx="10" cy="90" r="2" fill="#E53E3E" />
                    <circle cx="30" cy="10" r="2" fill="#E53E3E" />
                    <circle cx="30" cy="30" r="2" fill="#E53E3E" />
                    <circle cx="30" cy="50" r="2" fill="#E53E3E" />
                    <circle cx="30" cy="70" r="2" fill="#E53E3E" />
                    <circle cx="30" cy="90" r="2" fill="#E53E3E" />
                    <circle cx="50" cy="10" r="2" fill="#E53E3E" />
                    <circle cx="50" cy="30" r="2" fill="#E53E3E" />
                    <circle cx="50" cy="50" r="2" fill="#E53E3E" />
                    <circle cx="50" cy="70" r="2" fill="#E53E3E" />
                    <circle cx="50" cy="90" r="2" fill="#E53E3E" />
                    <circle cx="70" cy="10" r="2" fill="#E53E3E" />
                    <circle cx="70" cy="30" r="2" fill="#E53E3E" />
                    <circle cx="70" cy="50" r="2" fill="#E53E3E" />
                    <circle cx="70" cy="70" r="2" fill="#E53E3E" />
                    <circle cx="70" cy="90" r="2" fill="#E53E3E" />
                    <circle cx="90" cy="10" r="2" fill="#E53E3E" />
                    <circle cx="90" cy="30" r="2" fill="#E53E3E" />
                    <circle cx="90" cy="50" r="2" fill="#E53E3E" />
                    <circle cx="90" cy="70" r="2" fill="#E53E3E" />
                    <circle cx="90" cy="90" r="2" fill="#E53E3E" />
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
                    <div className="h-1 w-24 bg-red-600 mx-auto mt-4"></div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                    className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
                >
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={`border-b border-gray-100 last:border-b-0 ${openQuestion === index ? 'bg-gray-50' : ''}`}
                        >
                            <button
                                className="flex justify-between items-center w-full text-left px-6 py-5 focus:outline-none transition-colors"
                                onClick={() => toggleQuestion(index)}
                                aria-expanded={openQuestion === index}
                            >
                                <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
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
                                            <p>{item.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mt-12 text-center"
                >
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;