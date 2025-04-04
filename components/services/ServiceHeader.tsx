'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ServiceHeaderProps {
    title: string;
    subtitle: string;
    description: string;
    imagePath: string;
    imageAlt: string;
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({
                                                         title,
                                                         subtitle,
                                                         description,
                                                         imagePath,
                                                         imageAlt
                                                     }) => {
    return (
        <div className="relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="relative h-[30rem] lg:h-[35rem]">
                <Image
                    src={imagePath}
                    alt={imageAlt}
                    fill
                    priority
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className="brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/70"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 flex items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl mx-auto text-center text-white"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
                        <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6">{subtitle}</h2>
                        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                            {description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceHeader;