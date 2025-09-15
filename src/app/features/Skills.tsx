"use client";
import { GridBackground } from "@/components/ui/grid-background";
import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "motion/react";
import { useState } from "react";
import { 
  SiReact, 
  SiNodedotjs, 
  SiJavascript, 
  SiTypescript, 
  SiMysql, 
  SiMongodb, 
  SiNextdotjs, 
  SiExpress, 
  SiNumpy, 
  SiPandas, 
  SiScikitlearn 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Skills() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleFlip = (index: number) => {
    const newFlippedCards = new Set(flippedCards);
    if (newFlippedCards.has(index)) {
      newFlippedCards.delete(index);
    } else {
      newFlippedCards.add(index);
    }
    setFlippedCards(newFlippedCards);
  };

  return (
    <section id="skill">
      <GridBackground className="py-12 sm:py-20 px-4 sm:px-8" fadeEffect={false}>
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
            <span className="text-gray-800 dark:text-white">
              <span className="font-bold">
                <span className="text-blue-600 dark:text-blue-400 font-mono">$</span> Skills & Technologies
              </span>
            </span>
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            { 
              name: "React", 
              icon: SiReact,
              size: "col-span-1 row-span-1",
              color: "from-blue-500 to-cyan-500",
              bgColor: "bg-blue-50 dark:bg-blue-900/20",
              borderColor: "border-blue-200 dark:border-blue-700",
              description: "Building dynamic user interfaces with component-based architecture, hooks, and state management.",
              experience: "1+ years",
              projects: "2+ projects"
            },
            { 
              name: "Node.js", 
              icon: SiNodedotjs,
              size: "col-span-1 row-span-1",
              color: "from-green-500 to-emerald-600",
              bgColor: "bg-green-50 dark:bg-green-900/20",
              borderColor: "border-green-200 dark:border-green-700",
              description: "Server-side JavaScript runtime for building scalable network applications and APIs.",
              experience: "1+ years",
              projects: "2+ projects"
            },
            { 
              name: "JavaScript", 
              icon: SiJavascript,
              size: "col-span-1 row-span-1",
              color: "from-yellow-400 to-orange-500",
              bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
              borderColor: "border-yellow-200 dark:border-yellow-700",
              description: "Core programming language for web development, both frontend and backend applications.",
              experience: "1+ years",
              projects: "2+ projects"
            },
            { 
              name: "TypeScript", 
              icon: SiTypescript,
              size: "col-span-1 row-span-1",
              color: "from-blue-600 to-blue-800",
              bgColor: "bg-blue-50 dark:bg-blue-900/20",
              borderColor: "border-blue-200 dark:border-blue-700",
              description: "Strongly typed JavaScript superset for building robust and maintainable applications.",
              experience: "1+ years",
              projects: "2+ projects"
            },
            { 
              name: "SQL", 
              icon: SiMysql,
              size: "col-span-1 row-span-1",
              color: "from-purple-500 to-pink-600",
              bgColor: "bg-purple-50 dark:bg-purple-900/20",
              borderColor: "border-purple-200 dark:border-purple-700",
              description: "Structured query language for managing and manipulating relational databases.",
              experience: "1+ years",
              projects: "2+ projects"
            },
            { 
              name: "MongoDB", 
              icon: SiMongodb,
              size: "col-span-1 row-span-1",
              color: "from-green-400 to-green-600",
              bgColor: "bg-green-50 dark:bg-green-900/20",
              borderColor: "border-green-200 dark:border-green-700",
              description: "NoSQL database for modern applications with flexible document-based storage.",
              experience: "1+ years",
              projects: "2+ projects"
            },
            { 
              name: "Next.js", 
              icon: SiNextdotjs,
              size: "col-span-1 md:col-span-2 row-span-1",
              color: "from-black to-gray-800 dark:from-white dark:to-gray-200",
              bgColor: "bg-gray-50 dark:bg-gray-800/50",
              borderColor: "border-gray-200 dark:border-gray-600",
              description: "React framework with server-side rendering, static generation, and API routes for full-stack development.",
              experience: "1+ years",
              projects: "2+ projects"
            },
            { 
              name: "Express", 
              icon: SiExpress,
              size: "col-span-1 row-span-1",
              color: "from-gray-600 to-gray-800",
              bgColor: "bg-gray-50 dark:bg-gray-800/50",
              borderColor: "border-gray-200 dark:border-gray-600",
              description: "Minimal and flexible Node.js web application framework for building APIs and web servers.",
              experience: "1+ years",
              projects: "2+ projects"
            },
            { 
              name: "Java", 
              icon: FaJava,
              size: "col-span-1 row-span-1",
              color: "from-red-500 to-red-700",
              bgColor: "bg-red-50 dark:bg-red-900/20",
              borderColor: "border-red-200 dark:border-red-700",
              description: "Object-oriented programming language for enterprise applications and Android development.",
              experience: "1+ years",
              projects: "250+ DSA problems"
            },
            { 
              name: "Numpy", 
              icon: SiNumpy,
              size: "col-span-1 row-span-1",
              color: "from-blue-400 to-blue-600",
              bgColor: "bg-blue-50 dark:bg-blue-900/20",
              borderColor: "border-blue-200 dark:border-blue-700",
              description: "Python library for numerical computing with powerful N-dimensional array objects.",
              experience: "1+ years",
              projects: "2+ projects"
            },
            { 
              name: "Pandas", 
              icon: SiPandas,
              size: "col-span-1 row-span-1",
              color: "from-purple-400 to-purple-600",
              bgColor: "bg-purple-50 dark:bg-purple-900/20",
              borderColor: "border-purple-200 dark:border-purple-700",
              description: "Data manipulation and analysis library for Python with powerful data structures.",
              experience: "1+ years",
              projects: "2+ projects"
            },
            { 
              name: "Scikit-learn", 
              icon: SiScikitlearn,
              size: "col-span-1 md:col-span-2 row-span-1",
              color: "from-orange-500 to-red-500",
              bgColor: "bg-orange-50 dark:bg-orange-900/20",
              borderColor: "border-orange-200 dark:border-orange-700",
              description: "Machine learning library for Python with simple and efficient tools for data mining and analysis.",
              experience: "1+ years",
              projects: "2+ projects"
            },
          ].map((skill, index) => {
            const IconComponent = skill.icon;
            const isFlipped = flippedCards.has(index);
            
            return (
            <FadeIn key={index} direction="up" delay={index * 100}>
              <div 
                className={`${skill.size} h-56 sm:h-64 cursor-pointer`}
                onClick={() => toggleFlip(index)}
              >
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {/* Front of card */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl ${skill.bgColor} border-2 ${skill.borderColor} p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ${skill.size}`}>
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                    
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-5 hover:opacity-10 transition-opacity duration-500">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white to-transparent transform -skew-y-12 hover:animate-pulse"></div>
                    </div>
                    
                    <div className="relative z-10 text-center space-y-4 h-full flex flex-col justify-center">
                      {/* Icon */}
                      <div className="flex justify-center mb-2 sm:mb-4">
                        <IconComponent 
                          size={40} 
                          className={`text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform duration-300 sm:w-12 sm:h-12`}
                        />
                      </div>
                      
                      {/* Skill name */}
                      <h3 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-300">
                        {skill.name}
                      </h3>
                      
                      {/* Decorative line */}
                      <div className={`w-16 h-1 mx-auto bg-gradient-to-r ${skill.color} rounded-full hover:w-24 transition-all duration-300`}></div>
                      
                      {/* Click to flip text - only for React card */}
                      {skill.name === "React" && (
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          Click to flip
                        </p>
                      )}
                    </div>
                    
                    {/* Corner decoration */}
                    <div className={`absolute top-3 right-3 w-4 h-4 bg-gradient-to-br ${skill.color} rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className={`absolute bottom-3 left-3 w-3 h-3 bg-gradient-to-br ${skill.color} rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>

                  {/* Back of card */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl ${skill.bgColor} border-2 ${skill.borderColor} p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 ${skill.size}`} style={{ transform: "rotateY(180deg)" }}>
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-20 rounded-2xl`}></div>
                    
                    <div className="relative z-10 text-center space-y-4 h-full flex flex-col justify-center">
                      {/* Skill name */}
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-3">
                        {skill.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4">
                        {skill.description}
                      </p>
                      
                      {/* Experience and Projects */}
                      <div className="space-y-1 sm:space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-500 dark:text-gray-400">Experience:</span>
                          <span className="font-semibold text-gray-700 dark:text-gray-200">{skill.experience}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-500 dark:text-gray-400">{skill.name === "Java" ? "Problems:" : "Projects:"}</span>
                          <span className="font-semibold text-gray-700 dark:text-gray-200">{skill.projects}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner decoration */}
                    <div className={`absolute top-3 right-3 w-4 h-4 bg-gradient-to-br ${skill.color} rounded-full opacity-60`}></div>
                    <div className={`absolute bottom-3 left-3 w-3 h-3 bg-gradient-to-br ${skill.color} rounded-full opacity-60`}></div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
            );
          })}
        </div>
      </div>
      </GridBackground>
      
      <style jsx>{`
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
