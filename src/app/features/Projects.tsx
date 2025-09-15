"use client";
import { useState } from "react";
import Image from "next/image";
import { GridBackground } from "@/components/ui/grid-background";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function Projects() {
  const [currentCard, setCurrentCard] = useState(0);

  const projects = [
    {
      title: "AI Code Editor",
      description: "Vibecode Editor is a web-based fullstack IDE built with Next.js and Monaco Editor. It enables real-time code execution via WebContainers, AI-driven coding help using local Ollama models, supports multiple stack templates, and includes a terminal with a smooth developer-first interface.",
      tech: ["Next.js",
       	"TailwindCSS", "ShadCN UI",
        	"TypeScript",
        	"NextAuth",
        	"Monaco Editor",
        "Ollama",
       	"WebContainers",
        	"xterm.js",
        	"MongoDB" ],
      image: "/vibecode.jpeg",
      link: "https://github.com/manik3160/House-Prediction"
    },
    {
      title: "Cloudinary SaaS",
      description: "Cloudinary SaaS is a platform that allows users to upload, store, and compress their  videos. It also allows users to change the ratio of images.",
      tech: ["Next.js", "React", "TypeScript", "Clerk", "Prisma", "Cloudinary", "Tailwind CSS", "DaisyUI"],
      image: "/cloud.jpeg",
      link: "https://github.com/manik3160/House-Prediction"
    },
    {
      title: "AI Reels Generator",
      description: "VidSnap-AI is an AI-powered SAAS that generates reels from plain text descriptions. It uses text-to-speech synthesis and combines it with background music and visuals to output complete reels automatically.",
      tech: ["Flask",
         "HTML", "Tailwind CSS", "JavaScript",
         "ElevenLabs API",
         "FFmpeg"
        ],
      image: "/Vid.jpeg",
      link: "https://github.com/manik3160/House-Prediction"
    },
    {
      title: "Riverflow",
      description: "A stackoverflow type platform where users can ask questions and get answers from the community.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS","ShadCN UI","MongoDB"],
      image: "/Riverflow.jpeg",
      link: "https://github.com/manik3160/House-Prediction"
    },
    {
      title: "AI Teaching Assistant",
      description: "RAG-based AI Learning Assistant which uses video content to answer questions.",
      tech: ["Python", "NumPy","Pandas", "OpenAI", "Whisper"],
      image: "/teach.jpeg",
      link: "https://github.com/manik3160/House-Prediction"
    },
    {
      title: "AI House Analysis",
      description: "A machine learning pipeline using scikit-learn to predict housing prices.",
      tech: ["Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Joblib"
        ],
      image: "/House.jpeg",
      link: "https://github.com/manik3160/House-Prediction"
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
            <span className="text-gray-800 dark:text-white">
              <span className="font-bold">
                <span className="text-blue-600 dark:text-blue-400 font-mono">$</span> Featured Projects
              </span>
            </span>
          </h2>
          
          {}
          <div className="relative flex items-center justify-center">
            {}
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

            {}
            <div className="w-full max-w-md mx-4">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="mb-4 text-center"
                  >
                    <Image
                      src={projects[currentCard].image}
                      alt={projects[currentCard].title}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
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

            {}
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

          {}
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
