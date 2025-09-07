'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaXTwitter, FaHeart } from 'react-icons/fa6';
import { Space_Mono } from 'next/font/google';

const spaceMono = Space_Mono({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-black py-12 border-t border-cyan-500/20 ">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="flex items-center justify-center gap-2 text-gray-300">
                        <span className="text-sm">Made with</span>
                        <motion.div
                            animate={{ 
                                scale: [1, 1.2, 1],
                                color: ['#ef4444', '#dc2626', '#ef4444']
                            }}
                            transition={{ 
                                duration: 1.5, 
                                repeat: Infinity, 
                                ease: "easeInOut" 
                            }}
                        >
                            <FaHeart className="text-red-500" />
                        </motion.div>
                        <span className="text-sm">by</span>
                        <span className={` font-semibold ${spaceMono.className}`}>
                            Manik
                        </span>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <p className="text-gray-400 text-sm">Follow me on</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.a
                                href="https://www.linkedin.com/in/manik-rajput-2916412b2/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaLinkedin size={20} />
                                <span className={`font-semibold ${spaceMono.className}`}>
                                    LinkedIn
                                </span>
                            </motion.a>
                            <motion.a
                                href="https://x.com/Manik892936"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaXTwitter size={20} />
                                <span className={`font-semibold ${spaceMono.className}`}>
                                    Twitter
                                </span>
                            </motion.a>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-cyan-500/10">
                        <p className="text-gray-500 text-xs">
                            © 2025 Manik. All rights reserved.
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer; 