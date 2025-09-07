"use client";
import { useState } from "react";
import { GridBackground } from "@/components/ui/grid-background";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function Projects() {
  const [currentCard, setCurrentCard] = useState(0);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛒",
      link: "#"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analysis. Real-time data processing with beautiful charts and customizable widgets.",
      tech: ["Python", "Pandas", "Plotly", "FastAPI"],
      image: "📊",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio built with Next.js and Tailwind CSS. Features smooth animations and 3D effects for an engaging user experience.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "💼",
      link: "#"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration. Built with modern web technologies and features intelligent responses.",
      tech: ["React", "Socket.io", "OpenAI", "Node.js"],
      image: "🤖",
      link: "#"
    },
    {
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for tracking fitness activities. Includes workout plans, progress tracking, and social features.",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
      image: "💪",
      link: "#"
    }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % projects.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects">
      <GridBackground className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-mono">
              $
            </span>
            <span className="text-gray-800 dark:text-white ml-3">
              Featured Projects
            </span>
          </h2>
          
          {/* Carousel Container */}
          <div className="relative flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={prevCard}
              className="absolute left-4 z-10 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
              aria-label="Previous project"
            >
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Card Display */}
            <div className="w-full max-w-md mx-4">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-4xl mb-4 text-center"
                  >
                    {projects[currentCard].image}
                  </CardItem>
                  
                  <CardItem
                    translateZ="60"
                    className="text-2xl font-bold text-neutral-600 dark:text-white text-center mb-4"
                  >
                    {projects[currentCard].title}
                  </CardItem>
                  
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mx-auto text-center mb-6 dark:text-neutral-300"
                  >
                    {projects[currentCard].description}
                  </CardItem>
                  
                  <CardItem translateZ="100" className="w-full mb-6">
                    <div className="flex flex-wrap justify-center gap-2">
                      {projects[currentCard].tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardItem>
                  
                  <div className="flex justify-center items-center mt-6">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={projects[currentCard].link}
                      target="_blank"
                      className="px-6 py-3 rounded-xl text-sm font-normal dark:text-white bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
                    >
                      View Project →
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextCard}
              className="absolute right-4 z-10 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
              aria-label="Next project"
            >
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Card Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentCard
                    ? "bg-blue-600 dark:bg-blue-400 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </GridBackground>
    </section>
  );
}
