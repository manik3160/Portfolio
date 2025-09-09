"use client";
import { useState, useEffect, useRef } from "react";
import { GridBackground } from "@/components/ui/grid-background";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from 'react-icons/fa6';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, vx: number, vy: number}>>([]);
  const [animationTime, setAnimationTime] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Animation loop for continuous orbit
  useEffect(() => {
    // Only start animation on client side
    if (typeof window === 'undefined') return;
    
    const animate = () => {
      setAnimationTime(Date.now());
      requestAnimationFrame(animate);
    };
    animate();
  }, []); 

  // Create floating particles
  useEffect(() => {
    // Only run on client side to avoid hydration mismatch
    if (typeof window === 'undefined') return;
    
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }));
    setParticles(newParticles);

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        vx: particle.x > window.innerWidth || particle.x < 0 ? -particle.vx : particle.vx,
        vy: particle.y > window.innerHeight || particle.y < 0 ? -particle.vy : particle.vy,
      })));
      requestAnimationFrame(animateParticles);
    };
    animateParticles();
  }, []);

  // Mouse tracking for magnetic effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/manik3160",
      color: "from-gray-600 to-gray-800",
      glowColor: "shadow-gray-500/50"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/manik-rajput-2916412b2/",
      color: "from-blue-500 to-blue-700",
      glowColor: "shadow-blue-500/50"
    },
    {
      name: "Twitter",
      icon: FaXTwitter,
      href: "https://x.com/Manik892936",
      color: "from-sky-400 to-sky-600",
      glowColor: "shadow-sky-500/50"
    },
    {
      name: "Email",
      icon: FaEnvelope,
      href: "mailto:maniksingh3606@gmail.com",
      color: "from-red-500 to-red-700",
      glowColor: "shadow-red-500/50"
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {isClient && particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: particle.x,
              top: particle.y,
              transform: `translate(${Math.sin(animationTime * 0.001 + particle.id) * 10}px, ${Math.cos(animationTime * 0.001 + particle.id) * 10}px)`
            }}
          />
        ))}
      </div>

      <GridBackground className="py-20 px-8" fadeEffect={false}>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8">
            <span className="text-blue-600 dark:text-blue-400 font-mono">
              $
            </span>
            <span className="text-gray-800 dark:text-white ml-3">
              Let&apos;s Connect
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-20 animate-fade-in">
            I&apos;m always interested in new opportunities and exciting projects.
          </p>
          
        

          {/* Solar System Orbit */}
          <div className="relative w-full h-[600px] flex items-center justify-center">
            {/* Central Sun */}
            <div className="absolute z-10 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-2xl shadow-yellow-500/50 animate-pulse">
              <div className="absolute inset-2 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full" />
              <div className="absolute inset-4 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full" />
            </div>

            {/* Orbit Paths */}
            <div className="absolute w-[500px] h-[500px] border border-blue-300/20 rounded-full animate-spin-slow" />
            <div className="absolute w-[400px] h-[400px] border border-purple-300/20 rounded-full animate-spin-reverse" />
            <div className="absolute w-[300px] h-[300px] border border-green-300/20 rounded-full animate-spin-slow" />
            <div className="absolute w-[200px] h-[200px] border border-pink-300/20 rounded-full animate-spin-reverse" />

            {/* Orbiting Social Cards */}
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              const orbitRadius = 250 - (index * 50); // Different orbits: 250, 200, 150, 100
              const orbitSpeed = 0.3 + (index * 0.15); // Different speeds
              const angle = ((isClient ? animationTime : 0) * 0.0008 * orbitSpeed + index * Math.PI / 2) % (2 * Math.PI);
              const centerX = 0;
              const centerY = 0;
              
              const x = centerX + Math.cos(angle) * orbitRadius;
              const y = centerY + Math.sin(angle) * orbitRadius;
              
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    absolute group cursor-pointer
                    ${isVisible ? 'opacity-100' : 'opacity-0'}
                    ${hoveredCard === index ? 'z-20' : 'z-10'}
                  `}
                  style={{
                    transform: `translate(${x}px, ${y}px) scale(${hoveredCard === index ? 1.25 : 1})`,
                    transition: `opacity 0.5s ease-out ${index * 200}ms, transform 0.3s ease-out`,
                    willChange: 'transform'
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Planet Card */}
                  <div className={`
                    relative p-8 rounded-3xl border-2 border-transparent
                    bg-gradient-to-br from-white/20 to-white/10 dark:from-gray-800/60 dark:to-gray-900/60
                    backdrop-blur-md
                    ${hoveredCard === index ? 'backdrop-blur-lg shadow-2xl border-white/30 dark:border-gray-600/50' : ''}
                    ${hoveredCard === index ? `shadow-${social.glowColor}` : ''}
                    transition-all duration-300
                    w-32 h-32 flex items-center justify-center
                  `}>
                    {/* Planet Rings */}
                    <div className="absolute -inset-3 rounded-full border border-white/10 animate-pulse" />
                    <div className="absolute -inset-6 rounded-full border border-white/5 animate-pulse" style={{ animationDelay: '1s' }} />
                    
                    {/* Planet Surface */}
                    <div className="flex flex-col items-center space-y-4 relative z-10">
                      <div className={`
                        p-5 rounded-full bg-gradient-to-br ${social.color} 
                        shadow-lg
                        ${hoveredCard === index ? 'shadow-2xl scale-110' : ''}
                        transition-all duration-300
                      `}>
                        <Icon className={`w-8 h-8 text-white ${hoveredCard === index ? 'animate-pulse' : ''}`} />
                      </div>
                      
                      <span className={`text-sm font-bold transition-colors duration-300 whitespace-nowrap ${
                        hoveredCard === index ? 'text-white' : 'text-gray-700 dark:text-gray-200'
                      }`}>
                        {social.name}
                      </span>
                    </div>

                    {/* Hover Effects */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 transition-opacity duration-300 ${
                      hoveredCard === index ? 'opacity-100' : 'opacity-0'
                    }`} />
                    
                    {/* Trailing Effect */}
                    <div className={`absolute -left-12 top-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent to-blue-400/50 transform -translate-y-1/2 transition-opacity duration-300 ${
                      hoveredCard === index ? 'opacity-100' : 'opacity-0'
                    }`} />
                  </div>
                </a>
              );
            })}

            {/* Asteroid Belt */}
            <div className="absolute w-[450px] h-[450px] border border-gray-400/10 rounded-full animate-spin-slow" />
            {isClient && Array.from({ length: 12 }, (_, i) => {
              const angle = (i * Math.PI / 6 + animationTime * 0.0003) % (2 * Math.PI);
              const x = Math.cos(angle) * 225;
              const y = Math.sin(angle) * 225;
              
              return (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-gray-400/60 rounded-full animate-pulse"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    animationDelay: `${i * 0.15}s`
                  }}
                />
              );
            })}
          </div>

        </div>
      </GridBackground>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 12s linear infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}