'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            console.log('Form submitted:', formData);
            setSubmitSuccess(true);
            setFormData({
                fullName: '',
                companyName: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            setSubmitError('An error occurred. Please try again.');
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 md:py-24 bg-red-600 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Looking for a new IT Company?</h2>
                    <p className="text-xl mt-4">Schedule a 30-minute assessment with our experts to:</p>

                    <ul className="mt-6 inline-block text-left">
                        <li className="flex items-start mb-2">
                            <span className="mr-2 mt-1">•</span>
                            <span>Review your current IT setup.</span>
                        </li>
                        <li className="flex items-start mb-2">
                            <span className="mr-2 mt-1">•</span>
                            <span>Review your current IT issues.</span>
                        </li>
                        <li className="flex items-start mb-2">
                            <span className="mr-2 mt-1">•</span>
                            <span>Discuss your IT needs.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 mt-1">•</span>
                            <span>Confirm if and how NS can help.</span>
                        </li>
                    </ul>
                </div>

                {submitSuccess ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-lg text-center"
                    >
                        <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                        <p className="mb-6">We've received your message and will contact you shortly to schedule your assessment.</p>
                        <button
                            onClick={() => setSubmitSuccess(false)}
                            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                        >
                            Send Another Message
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name*"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md bg-red-500 text-white placeholder-red-200 border border-red-400 focus:outline-none focus:ring-2 focus:ring-red-300"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="companyName"
                                    placeholder="Company Name*"
                                    required
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md bg-red-500 text-white placeholder-red-200 border border-red-400 focus:outline-none focus:ring-2 focus:ring-red-300"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Corporate Email*"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md bg-red-500 text-white placeholder-red-200 border border-red-400 focus:outline-none focus:ring-2 focus:ring-red-300"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md bg-red-500 text-white placeholder-red-200 border border-red-400 focus:outline-none focus:ring-2 focus:ring-red-300"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md bg-red-500 text-white placeholder-red-200 border border-red-400 focus:outline-none focus:ring-2 focus:ring-red-300"
                            ></textarea>
                        </div>

                        {submitError && (
                            <div className="mb-4 p-2 bg-red-800 text-white rounded-md text-center">
                                {submitError}
                            </div>
                        )}

                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-red-600 hover:bg-gray-100 transition-colors shadow-md"
                            >
                                {isSubmitting ? (
                                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
};

export default ContactForm;