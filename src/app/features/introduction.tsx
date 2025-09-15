"use client";
import { HeroHighlightDemo } from "./Hero";
import { GridBackground } from "@/components/ui/grid-background";
import { CodingAnimation } from "@/components/ui/coding-animation";

export default function Introduction() {
  return (
    <GridBackground className="flex items-center justify-center min-h-screen px-4 sm:px-8 py-8" fadeEffect={false}>
      <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl gap-6 lg:gap-12">
        <div className="w-full lg:w-2/5 order-2 lg:order-1 flex justify-center">
          <CodingAnimation />
        </div>
        <div className="w-full lg:w-3/5 order-1 lg:order-2">
          <HeroHighlightDemo />
        </div>
      </div>
        
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </GridBackground>
  );
}