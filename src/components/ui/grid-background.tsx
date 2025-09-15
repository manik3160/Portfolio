import { cn } from "@/lib/utils";
import React from "react";

interface GridBackgroundProps {
  children: React.ReactNode;
  className?: string;
  fadeEffect?: boolean;
  gridSize?: string;
}

export function GridBackground({ 
  children, 
  className = "", 
  fadeEffect = true,
  gridSize = "40px_40px"
}: GridBackgroundProps) {
  const gridStyle = {
    backgroundSize: "40px 40px",
  };

  return (
    <div className={cn("relative w-full bg-white dark:bg-black", className)}>
      <div
        className={cn(
          "absolute inset-0 opacity-100 -z-10",
          "[background-image:linear-gradient(to_right,#e4e4e7_2px,transparent_2px),linear-gradient(to_bottom,#e4e4e7_2px,transparent_2px)]",
          "dark:[background-image:linear-gradient(to_right,#404040_2px,transparent_2px),linear-gradient(to_bottom,#404040_2px,transparent_2px)]",
        )}
        style={gridStyle}
      />
      
      {fadeEffect && (
        <div className="pointer-events-none absolute inset-0 -z-5 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
export function GridBackgroundDemo() {
  return (
    <GridBackground className="flex h-[50rem] w-full items-center justify-center">
      <p className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Backgrounds
      </p>
    </GridBackground>
  );
}
