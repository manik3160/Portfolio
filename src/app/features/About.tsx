"use client";
import { GridBackground } from "@/components/ui/grid-background";
import { FadeIn } from "@/components/ui/fade-in";
import { TypingText } from "@/components/ui/typing-text";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="about" ref={sectionRef}>
      <GridBackground className="py-20 px-8" fadeEffect={false}>
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="up">
          <h2 className="text-5xl font-bold text-center mb-12">
            <span className="text-gray-800 dark:text-white">
              {isVisible ? (
                <TypingText 
                  text="$ About Me" 
                  speed={200}
                  className="font-bold"
                  coloredText={{
                    text: "$",
                    color: "text-blue-600 dark:text-blue-400 font-mono"
                  }}
                />
              ) : (
                <span className="text-gray-400">$ About Me</span>
              )}
            </span>
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left" delay={200}>
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                {/* Floating geometric animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-4 border-blue-500 rounded-lg animate-spin-slow opacity-60"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 border-4 border-purple-500 rounded-full animate-pulse opacity-80"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg animate-bounce-slow opacity-90"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-ping opacity-70"></div>
                </div>
                {/* Central floating element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg animate-float opacity-100 shadow-lg"></div>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={400}>
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I&apos;m Manik — a full-stack web and data scientist with a strong passion for clean, 
                scalable code and modern technologies. Alongside building user-focused applications, 
                I love working with data — analysing and creating visualizations, and transforming 
                them into impactful ML models. I enjoy exploring emerging tech, staying curious about 
                how things work under the hood, and continuously leveling up my skills to solve 
                real-world problems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
                open-source projects, or diving deep into data analysis to uncover meaningful insights.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
      </GridBackground>
    </section>
  );
}
