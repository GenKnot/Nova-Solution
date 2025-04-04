'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface ServiceFeaturesProps {
    title: string;
    subtitle: string;
    features: Feature[];
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({
                                                             title,
                                                             subtitle,
                                                             features
                                                         }) => {
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

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    // viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h2>
                    <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    // viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex justify-center mb-4 text-red-600">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">{feature.title}</h3>
                            <div className="h-1 w-12 bg-red-600 mx-auto mb-4"></div>
                            <p className="text-gray-600 text-center">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceFeatures;