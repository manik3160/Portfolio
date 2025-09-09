"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-2xl leading-relaxed lg:leading-snug text-center mx-auto hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        Hi, I&apos;m{" "}
        <Highlight className="text-black dark:text-white">Manik</Highlight>
        <div className="mt-6">
          <p className="text-gray-300 text-xl md:text-2xl font-bold mb-4 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
            Full Stack Developer & Data Scientist
          </p>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer w-full overflow-hidden">
            I create beautiful, functional web applications with modern technologies.
            I love to play along with data and covert them into meaningful ML models.
            <br />Passionate about clean code, user experience, and bringing ideas to life.
          </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center items-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                projectsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-sm rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                See My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-6 py-3 bg-transparent border-2 border-white/30 text-white font-medium text-sm rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/10 hover:shadow-xl hover:shadow-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </div>

          <div className="relative overflow-hidden bg-gray-900/50 rounded-lg p-2 sm:p-4 mt-6">
            <div className="flex animate-scroll">
              
              <div className="flex gap-3 sm:gap-4 whitespace-nowrap">
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-600/30 to-blue-500/20 text-blue-400 rounded-xl text-xs sm:text-sm font-mono border border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-600/50 hover:to-blue-500/40 hover:text-white hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >React</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-green-600/30 to-green-500/20 text-green-400 rounded-xl text-xs sm:text-sm font-mono border border-green-500/50 hover:bg-gradient-to-r hover:from-green-600/50 hover:to-green-500/40 hover:text-white hover:shadow-xl hover:shadow-green-500/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >Node.js</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-yellow-600/30 to-yellow-500/20 text-yellow-400 rounded-xl text-xs sm:text-sm font-mono border border-yellow-500/50 hover:bg-gradient-to-r hover:from-yellow-600/50 hover:to-yellow-500/40 hover:text-white hover:shadow-xl hover:shadow-yellow-500/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >JavaScript</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-purple-600/30 to-purple-500/20 text-purple-400 rounded-xl text-xs sm:text-sm font-mono border border-purple-500/50 hover:bg-gradient-to-r hover:from-purple-600/50 hover:to-purple-500/40 hover:text-white hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >TypeScript</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-cyan-600/30 to-cyan-500/20 text-cyan-400 rounded-xl text-xs sm:text-sm font-mono border border-cyan-500/50 hover:bg-gradient-to-r hover:from-cyan-600/50 hover:to-cyan-500/40 hover:text-white hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >SQL</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-500/30 to-blue-400/20 text-blue-300 rounded-xl text-xs sm:text-sm font-mono border border-blue-400/50 hover:bg-gradient-to-r hover:from-blue-500/50 hover:to-blue-400/40 hover:text-white hover:shadow-xl hover:shadow-blue-400/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >MongoDB</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-teal-600/30 to-teal-500/20 text-teal-400 rounded-xl text-xs sm:text-sm font-mono border border-teal-500/50 hover:bg-gradient-to-r hover:from-teal-600/50 hover:to-teal-500/40 hover:text-white hover:shadow-xl hover:shadow-teal-500/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >Nextjs</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-orange-600/30 to-orange-500/20 text-orange-400 rounded-xl text-xs sm:text-sm font-mono border border-orange-500/50 hover:bg-gradient-to-r hover:from-orange-600/50 hover:to-orange-500/40 hover:text-white hover:shadow-xl hover:shadow-orange-500/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >Express</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-yellow-500/30 to-yellow-400/20 text-yellow-300 rounded-xl text-xs sm:text-sm font-mono border border-yellow-400/50 hover:bg-gradient-to-r hover:from-yellow-500/50 hover:to-yellow-400/40 hover:text-white hover:shadow-xl hover:shadow-yellow-400/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >Java</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-700/30 to-blue-600/20 text-blue-300 rounded-xl text-xs sm:text-sm font-mono border border-blue-600/50 hover:bg-gradient-to-r hover:from-blue-700/50 hover:to-blue-600/40 hover:text-white hover:shadow-xl hover:shadow-blue-600/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >Numpy</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-800/30 to-blue-700/20 text-blue-200 rounded-xl text-xs sm:text-sm font-mono border border-blue-700/50 hover:bg-gradient-to-r hover:from-blue-800/50 hover:to-blue-700/40 hover:text-white hover:shadow-xl hover:shadow-blue-700/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >Pandas</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-purple-500/30 to-purple-400/20 text-purple-300 rounded-xl text-xs sm:text-sm font-mono border border-purple-400/50 hover:bg-gradient-to-r hover:from-purple-500/50 hover:to-purple-400/40 hover:text-white hover:shadow-xl hover:shadow-purple-400/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >Scikit-learn</motion.span>
              </div>
              
              <div className="flex gap-3 sm:gap-4 whitespace-nowrap">
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-600/30 to-blue-500/20 text-blue-400 rounded-xl text-xs sm:text-sm font-mono border border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-600/50 hover:to-blue-500/40 hover:text-white hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >React</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-green-600/30 to-green-500/20 text-green-400 rounded-xl text-xs sm:text-sm font-mono border border-green-500/50 hover:bg-gradient-to-r hover:from-green-600/50 hover:to-green-500/40 hover:text-white hover:shadow-xl hover:shadow-green-500/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >Node.js</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-yellow-600/30 to-yellow-500/20 text-yellow-400 rounded-xl text-xs sm:text-sm font-mono border border-yellow-500/50 hover:bg-gradient-to-r hover:from-yellow-600/50 hover:to-yellow-500/40 hover:text-white hover:shadow-xl hover:shadow-yellow-500/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >JavaScript</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-purple-600/30 to-purple-500/20 text-purple-400 rounded-xl text-xs sm:text-sm font-mono border border-purple-500/50 hover:bg-gradient-to-r hover:from-purple-600/50 hover:to-purple-500/40 hover:text-white hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >TypeScript</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-cyan-600/30 to-cyan-500/20 text-cyan-400 rounded-xl text-xs sm:text-sm font-mono border border-cyan-500/50 hover:bg-gradient-to-r hover:from-cyan-600/50 hover:to-cyan-500/40 hover:text-white hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >SQL</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-500/30 to-blue-400/20 text-blue-300 rounded-xl text-xs sm:text-sm font-mono border border-blue-400/50 hover:bg-gradient-to-r hover:from-blue-500/50 hover:to-blue-400/40 hover:text-white hover:shadow-xl hover:shadow-blue-400/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >MongoDB</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-teal-600/30 to-teal-500/20 text-teal-400 rounded-xl text-xs sm:text-sm font-mono border border-teal-500/50 hover:bg-gradient-to-r hover:from-teal-600/50 hover:to-teal-500/40 hover:text-white hover:shadow-xl hover:shadow-teal-500/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >Nextjs</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-orange-600/30 to-orange-500/20 text-orange-400 rounded-xl text-xs sm:text-sm font-mono border border-orange-500/50 hover:bg-gradient-to-r hover:from-orange-600/50 hover:to-orange-500/40 hover:text-white hover:shadow-xl hover:shadow-orange-500/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >Express</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-yellow-500/30 to-yellow-400/20 text-yellow-300 rounded-xl text-xs sm:text-sm font-mono border border-yellow-400/50 hover:bg-gradient-to-r hover:from-yellow-500/50 hover:to-yellow-400/40 hover:text-white hover:shadow-xl hover:shadow-yellow-400/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >Java</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-700/30 to-blue-600/20 text-blue-300 rounded-xl text-xs sm:text-sm font-mono border border-blue-600/50 hover:bg-gradient-to-r hover:from-blue-700/50 hover:to-blue-600/40 hover:text-white hover:shadow-xl hover:shadow-blue-600/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >Numpy</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-800/30 to-blue-700/20 text-blue-200 rounded-xl text-xs sm:text-sm font-mono border border-blue-700/50 hover:bg-gradient-to-r hover:from-blue-800/50 hover:to-blue-700/40 hover:text-white hover:shadow-xl hover:shadow-blue-700/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >Pandas</motion.span>
                <motion.span 
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-purple-500/30 to-purple-400/20 text-purple-300 rounded-xl text-xs sm:text-sm font-mono border border-purple-400/50 hover:bg-gradient-to-r hover:from-purple-500/50 hover:to-purple-400/40 hover:text-white hover:shadow-xl hover:shadow-purple-400/60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >Scikit-learn</motion.span>
              </div>
            </div>
          </div>
         
        </motion.h1>
    </HeroHighlight>
  );
}
