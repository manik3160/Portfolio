"use client";
import { HeroHighlightDemo } from "./Hero";
import { GridBackground } from "@/components/ui/grid-background";

export default function Introduction() {
  return (
    <GridBackground className="flex items-center justify-center min-h-screen px-8" fadeEffect={false}>
      <div className="flex items-center justify-between w-full max-w-6xl">
        <div className="flex-1 max-w-lg">
          <video
            src="/cube.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="flex-1 ml-8 max-w-lg">
          
          
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