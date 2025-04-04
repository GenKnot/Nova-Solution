'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Step {
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface ServiceProcessProps {
    title: string;
    subtitle: string;
    steps: Step[];
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({
                                                           title,
                                                           subtitle,
                                                           steps
                                                       }) => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 opacity-20 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-50 opacity-30 rounded-tr-full"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h2>
                    <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeInUp}
                            className="mb-12 last:mb-0"
                        >
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                                    {step.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>

                            {index < steps.length - 1 && (
                                <div className="h-16 w-0.5 bg-red-200 mx-auto mt-4 md:ml-8 md:h-8 hidden md:block"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceProcess;