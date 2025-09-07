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

          <div className="relative overflow-hidden bg-gray-900/50 rounded-lg p-2 sm:p-4 mt-6">
            <div className="flex animate-scroll">
              
              <div className="flex gap-2 sm:gap-3 whitespace-nowrap">
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-600/20 text-blue-400 rounded-full text-xs sm:text-sm font-mono border border-blue-500/30 hover:bg-blue-600/40 hover:text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer">React</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-green-600/20 text-green-400 rounded-full text-xs sm:text-sm font-mono border border-green-500/30 hover:bg-green-600/40 hover:text-white hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 cursor-pointer">Node.js</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-yellow-600/20 text-yellow-400 rounded-full text-xs sm:text-sm font-mono border border-yellow-500/30 hover:bg-yellow-600/40 hover:text-white hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 cursor-pointer">JavaScript</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-purple-600/20 text-purple-400 rounded-full text-xs sm:text-sm font-mono border border-purple-500/30 hover:bg-purple-600/40 hover:text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer">TypeScript</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-cyan-600/20 text-cyan-400 rounded-full text-xs sm:text-sm font-mono border border-cyan-500/30 hover:bg-cyan-600/40 hover:text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer">SQL</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-500/20 text-blue-300 rounded-full text-xs sm:text-sm font-mono border border-blue-400/30 hover:bg-blue-500/40 hover:text-white hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300 cursor-pointer">MongoDB</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-teal-600/20 text-teal-400 rounded-full text-xs sm:text-sm font-mono border border-teal-500/30 hover:bg-teal-600/40 hover:text-white hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 cursor-pointer">Nextjs</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-orange-600/20 text-orange-400 rounded-full text-xs sm:text-sm font-mono border border-orange-500/30 hover:bg-orange-600/40 hover:text-white hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 cursor-pointer">Express</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-xs sm:text-sm font-mono border border-yellow-400/30 hover:bg-yellow-500/40 hover:text-white hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 cursor-pointer">Java</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-700/20 text-blue-300 rounded-full text-xs sm:text-sm font-mono border border-blue-600/30 hover:bg-blue-700/40 hover:text-white hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300 cursor-pointer">Numpy</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-800/20 text-blue-200 rounded-full text-xs sm:text-sm font-mono border border-blue-700/30 hover:bg-blue-800/40 hover:text-white hover:shadow-lg hover:shadow-blue-700/50 transition-all duration-300 cursor-pointer">Pandas</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-purple-500/20 text-purple-300 rounded-full text-xs sm:text-sm font-mono border border-purple-400/30 hover:bg-purple-500/40 hover:text-white hover:shadow-lg hover:shadow-purple-400/50 transition-all duration-300 cursor-pointer">Scikit-learn</span>
              </div>
              
              <div className="flex gap-2 sm:gap-3 whitespace-nowrap">
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-600/20 text-blue-400 rounded-full text-xs sm:text-sm font-mono border border-blue-500/30 hover:bg-blue-600/40 hover:text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer">React</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-green-600/20 text-green-400 rounded-full text-xs sm:text-sm font-mono border border-green-500/30 hover:bg-green-600/40 hover:text-white hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 cursor-pointer">Node.js</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-yellow-600/20 text-yellow-400 rounded-full text-xs sm:text-sm font-mono border border-yellow-500/30 hover:bg-yellow-600/40 hover:text-white hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 cursor-pointer">JavaScript</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-purple-600/20 text-purple-400 rounded-full text-xs sm:text-sm font-mono border border-purple-500/30 hover:bg-purple-600/40 hover:text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer">TypeScript</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-cyan-600/20 text-cyan-400 rounded-full text-xs sm:text-sm font-mono border border-cyan-500/30 hover:bg-cyan-600/40 hover:text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer">SQL</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-500/20 text-blue-300 rounded-full text-xs sm:text-sm font-mono border border-blue-400/30 hover:bg-blue-500/40 hover:text-white hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300 cursor-pointer">MongoDB</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-teal-600/20 text-teal-400 rounded-full text-xs sm:text-sm font-mono border border-teal-500/30 hover:bg-teal-600/40 hover:text-white hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 cursor-pointer">Nextjs</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-orange-600/20 text-orange-400 rounded-full text-xs sm:text-sm font-mono border border-orange-500/30 hover:bg-orange-600/40 hover:text-white hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 cursor-pointer">Express</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-xs sm:text-sm font-mono border border-yellow-400/30 hover:bg-yellow-500/40 hover:text-white hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 cursor-pointer">Java</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-700/20 text-blue-300 rounded-full text-xs sm:text-sm font-mono border border-blue-600/30 hover:bg-blue-700/40 hover:text-white hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300 cursor-pointer">Numpy</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-800/20 text-blue-200 rounded-full text-xs sm:text-sm font-mono border border-blue-700/30 hover:bg-blue-800/40 hover:text-white hover:shadow-lg hover:shadow-blue-700/50 transition-all duration-300 cursor-pointer">Pandas</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-purple-500/20 text-purple-300 rounded-full text-xs sm:text-sm font-mono border border-purple-400/30 hover:bg-purple-500/40 hover:text-white hover:shadow-lg hover:shadow-purple-400/50 transition-all duration-300 cursor-pointer">Scikit-learn</span>
              </div>
            </div>
          </div>
         
        </motion.h1>
    </HeroHighlight>
  );
}
