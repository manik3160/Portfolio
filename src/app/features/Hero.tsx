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
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        Hi, I'm{" "}
        <Highlight className="text-black dark:text-white">Manik</Highlight>
        <div className="mt-6">
          <p className="text-gray-300 text-2xl md:text-3xl font-bold mb-6 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
            Full Stack Developer & Data Scientist
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer w-full overflow-hidden">
            I create beautiful, functional web applications with modern
            technologies. I love to play along with data, visualizing them, and
            transforming them into impactful ML models.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer w-full overflow-hidden">
            Passionate about clean code, user experience, and bringing ideas to
            life.
          </p>
        </div>
      </motion.h1>
    </HeroHighlight>
  );
}
