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

          {/* Professional Tech Stack */}
          <div className="mt-8">
            <div className="text-center mb-6">
            
              </div>
            
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {[
                { name: "React", color: "hover:bg-blue-500/20 hover:border-blue-400 hover:text-blue-300" },
                { name: "Next.js", color: "hover:bg-gray-500/20 hover:border-gray-400 hover:text-gray-300" },
                { name: "TypeScript", color: "hover:bg-blue-600/20 hover:border-blue-500 hover:text-blue-400" },
                { name: "JavaScript", color: "hover:bg-yellow-500/20 hover:border-yellow-400 hover:text-yellow-300" },
                { name: "Node.js", color: "hover:bg-green-500/20 hover:border-green-400 hover:text-green-300" },
                { name: "Express", color: "hover:bg-gray-600/20 hover:border-gray-500 hover:text-gray-400" },
                { name: "MongoDB", color: "hover:bg-green-600/20 hover:border-green-500 hover:text-green-400" },
                { name: "SQL", color: "hover:bg-red-500/20 hover:border-red-400 hover:text-red-300" },
                { name: "Python", color: "hover:bg-yellow-600/20 hover:border-yellow-500 hover:text-yellow-400" },
                { name: "NumPy", color: "hover:bg-blue-700/20 hover:border-blue-600 hover:text-blue-500" },
                { name: "Pandas", color: "hover:bg-red-600/20 hover:border-red-500 hover:text-red-400" },
                { name: "Scikit-learn", color: "hover:bg-orange-500/20 hover:border-orange-400 hover:text-orange-300" },
                { name: "Java", color: "hover:bg-red-700/20 hover:border-red-600 hover:text-red-500" },
                { name: "Tailwind CSS", color: "hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-300" },
                { name: "Git", color: "hover:bg-orange-600/20 hover:border-orange-500 hover:text-orange-400" },
                { name: "Docker", color: "hover:bg-blue-500/20 hover:border-blue-400 hover:text-blue-300" }
              ].map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
              
              {/* See More Button */}
              <button
                onClick={() => {
                  const skillsSection = document.getElementById('skill');
                  skillsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 text-white rounded-full text-sm font-semibold hover:from-blue-600/30 hover:to-purple-600/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer flex items-center gap-2 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">See More</span>
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
         
        </motion.h1>
    </HeroHighlight>
  );
}
