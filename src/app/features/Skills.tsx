"use client";
import { GridBackground } from "@/components/ui/grid-background";
import { FadeIn, StaggeredFadeIn } from "@/components/ui/fade-in";
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
  return (
    <section id="skill">
      <GridBackground className="py-20 px-8" fadeEffect={false}>
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="up">
          <h2 className="text-5xl font-bold text-center mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-mono">
              $
            </span>
            <span className="text-gray-800 dark:text-white ml-3">
              Skills & Technologies
            </span>
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              name: "React", 
              icon: SiReact,
              size: "col-span-1 row-span-1",
              color: "from-blue-500 to-cyan-500",
              bgColor: "bg-blue-50 dark:bg-blue-900/20",
              borderColor: "border-blue-200 dark:border-blue-700"
            },
            { 
              name: "Node.js", 
              icon: SiNodedotjs,
              size: "col-span-1 row-span-1",
              color: "from-green-500 to-emerald-600",
              bgColor: "bg-green-50 dark:bg-green-900/20",
              borderColor: "border-green-200 dark:border-green-700"
            },
            { 
              name: "JavaScript", 
              icon: SiJavascript,
              size: "col-span-1 row-span-1",
              color: "from-yellow-400 to-orange-500",
              bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
              borderColor: "border-yellow-200 dark:border-yellow-700"
            },
            { 
              name: "TypeScript", 
              icon: SiTypescript,
              size: "col-span-1 row-span-1",
              color: "from-blue-600 to-blue-800",
              bgColor: "bg-blue-50 dark:bg-blue-900/20",
              borderColor: "border-blue-200 dark:border-blue-700"
            },
            { 
              name: "SQL", 
              icon: SiMysql,
              size: "col-span-1 row-span-1",
              color: "from-purple-500 to-pink-600",
              bgColor: "bg-purple-50 dark:bg-purple-900/20",
              borderColor: "border-purple-200 dark:border-purple-700"
            },
            { 
              name: "MongoDB", 
              icon: SiMongodb,
              size: "col-span-1 row-span-1",
              color: "from-green-400 to-green-600",
              bgColor: "bg-green-50 dark:bg-green-900/20",
              borderColor: "border-green-200 dark:border-green-700"
            },
            { 
              name: "Next.js", 
              icon: SiNextdotjs,
              size: "col-span-1 md:col-span-2 row-span-1",
              color: "from-black to-gray-800 dark:from-white dark:to-gray-200",
              bgColor: "bg-gray-50 dark:bg-gray-800/50",
              borderColor: "border-gray-200 dark:border-gray-600"
            },
            { 
              name: "Express", 
              icon: SiExpress,
              size: "col-span-1 row-span-1",
              color: "from-gray-600 to-gray-800",
              bgColor: "bg-gray-50 dark:bg-gray-800/50",
              borderColor: "border-gray-200 dark:border-gray-600"
            },
            { 
              name: "Java", 
              icon: FaJava,
              size: "col-span-1 row-span-1",
              color: "from-red-500 to-red-700",
              bgColor: "bg-red-50 dark:bg-red-900/20",
              borderColor: "border-red-200 dark:border-red-700"
            },
            { 
              name: "Numpy", 
              icon: SiNumpy,
              size: "col-span-1 row-span-1",
              color: "from-blue-400 to-blue-600",
              bgColor: "bg-blue-50 dark:bg-blue-900/20",
              borderColor: "border-blue-200 dark:border-blue-700"
            },
            { 
              name: "Pandas", 
              icon: SiPandas,
              size: "col-span-1 row-span-1",
              color: "from-purple-400 to-purple-600",
              bgColor: "bg-purple-50 dark:bg-purple-900/20",
              borderColor: "border-purple-200 dark:border-purple-700"
            },
            { 
              name: "Scikit-learn", 
              icon: SiScikitlearn,
              size: "col-span-1 md:col-span-2 row-span-1",
              color: "from-orange-500 to-red-500",
              bgColor: "bg-orange-50 dark:bg-orange-900/20",
              borderColor: "border-orange-200 dark:border-orange-700"
            },
          ].map((skill, index) => {
            const IconComponent = skill.icon;
            return (
            <FadeIn key={index} direction="up" delay={index * 100}>
              <div
                className={`group relative overflow-hidden rounded-2xl ${skill.bgColor} border-2 ${skill.borderColor} p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${skill.size}`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white to-transparent transform -skew-y-12 group-hover:animate-pulse"></div>
                </div>
                
                <div className="relative z-10 text-center space-y-4">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <IconComponent 
                      size={48} 
                      className={`text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  
                  {/* Skill name */}
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  {/* Decorative line */}
                  <div className={`w-16 h-1 mx-auto bg-gradient-to-r ${skill.color} rounded-full group-hover:w-24 transition-all duration-300`}></div>
                </div>
                
                {/* Corner decoration */}
                <div className={`absolute top-3 right-3 w-4 h-4 bg-gradient-to-br ${skill.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className={`absolute bottom-3 left-3 w-3 h-3 bg-gradient-to-br ${skill.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            </FadeIn>
            );
          })}
        </div>
      </div>
      </GridBackground>
    </section>
  );
}
