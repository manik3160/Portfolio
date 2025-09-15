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
        <footer className="relative w-full bg-black py-16 border-t border-cyan-500/20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/3 via-transparent to-purple-500/3"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            
            <div className="relative max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <motion.div 
                        className="flex items-center justify-center gap-3 text-gray-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-base font-medium">Made with</span>
                        <motion.div
                            animate={{ 
                                scale: [1, 1.3, 1],
                                rotate: [0, 5, -5, 0],
                                color: ['#ef4444', '#dc2626', '#b91c1c', '#ef4444']
                            }}
                            transition={{ 
                                duration: 1, 
                                repeat: Infinity, 
                                ease: "easeInOut" 
                            }}
                            className="relative"
                        >
                            <FaHeart className="text-red-500 drop-shadow-lg" />
                            <motion.div
                                className="absolute inset-0 bg-red-500/20 rounded-full blur-sm"
                                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                        </motion.div>
                        <span className="text-base font-medium">by</span>
                        <motion.span 
                            className={`text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent ${spaceMono.className}`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 500, damping: 20 }}
                        >
                            Manik
                        </motion.span>
                    </motion.div>

                    <motion.div 
                        className="flex flex-col items-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <motion.p 
                            className="text-gray-400 text-lg font-medium"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Follow me on
                        </motion.p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <motion.a
                                href="https://www.linkedin.com/in/manik-rajput-2916412b2/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-cyan-500/40 rounded-xl text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <motion.div
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <FaLinkedin size={22} className="relative z-10" />
                                </motion.div>
                                <span className={`font-bold text-base ${spaceMono.className} relative z-10`}>
                                    LinkedIn
                                </span>
                                <motion.div
                                    className="absolute right-2 w-2 h-2 bg-cyan-400 rounded-full"
                                    animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity, delay: 0.5 }}
                                />
                            </motion.a>
                            <motion.a
                                href="https://x.com/Manik892936"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-cyan-500/40 rounded-xl text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <motion.div
                                    animate={{ rotate: [0, -5, 5, 0] }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                                >
                                    <FaXTwitter size={22} className="relative z-10" />
                                </motion.div>
                                <span className={`font-bold text-base ${spaceMono.className} relative z-10`}>
                                    Twitter
                                </span>
                                <motion.div
                                    className="absolute right-2 w-2 h-2 bg-cyan-400 rounded-full"
                                    animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity, delay: 0.6 }}
                                />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="pt-8 border-t border-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent h-px"></div>
                            <motion.p 
                                className="text-gray-500 text-sm font-medium relative z-10"
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                © 2025 Manik. All rights reserved.
                            </motion.p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer; 