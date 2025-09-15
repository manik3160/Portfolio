"use client";
import { useState, useEffect, useMemo } from "react";

export function CodingAnimation() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const codeLines = useMemo(() => [
    "const developer = {",
    "  name: 'Manik',",
    "  skills: ['Webdev', 'DSA', 'Data Science'],",
    "  passion: 'Creating amazing web apps'",
    "};",
    "",
    "console.log(`Hello, I'm ${developer.name}!`);",
  ], []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentLineIndex < codeLines.length) {
        const currentLine = codeLines[currentLineIndex];
        
        if (currentCharIndex < currentLine.length) {
          setDisplayedText(prev => prev + currentLine[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        } else {
          setDisplayedText(prev => prev + '\n');
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }
      } else {
        clearInterval(timer);
        setIsTypingComplete(true);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [currentLineIndex, currentCharIndex, codeLines]);

  return (
    <div className="relative w-full max-w-2xl">
      {/* Computer Screen */}
      <div className="relative bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
        {/* Screen Bezel */}
        <div className="bg-black p-2 rounded-t-lg">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
        </div>
        
        {/* Screen Content */}
        <div className="bg-gray-900 p-4 sm:p-6 min-h-[350px] sm:min-h-[450px] relative">
          {/* Terminal Header */}
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-500 rounded-full" />
              <div className="w-2 h-2 bg-gray-500 rounded-full" />
              <div className="w-2 h-2 bg-gray-500 rounded-full" />
            </div>
            <span className="text-gray-400 text-xs sm:text-sm font-mono">terminal</span>
            <div className="w-6"></div>
          </div>

          {/* Code Display */}
          <div className="font-mono text-xs sm:text-sm relative">
            <pre className="text-green-400 whitespace-pre-wrap leading-relaxed">
              {displayedText}
              {!isTypingComplete && <span className="animate-pulse">|</span>}
            </pre>
            
            {/* Highlight your name */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-blue-500/10 rounded"></div>
            </div>
          </div>

          {/* Status Message - Only show after typing is complete */}
          {isTypingComplete && (
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/40 rounded-lg backdrop-blur-sm animate-fade-in">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-green-400 text-xs sm:text-sm font-mono">
                  ✓ Code executed successfully!
                </span>
              </div>
                     <p className="text-gray-300 text-xs sm:text-sm">
                       Hello, I&apos;m <span className="text-blue-400 font-bold text-sm sm:text-base">Manik</span>! 
                       <br />
                       Ready to build amazing things together.
                     </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
