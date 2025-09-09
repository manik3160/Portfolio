"use client";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function CodingAnimation() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const codeLines = [
    "const developer = {",
    "  name: 'Manik',",
    "  skills: ['React', 'Node.js', 'Python'],",
    "  passion: 'Creating amazing web apps'",
    "};",
    "",
    "console.log(`Hello, I'm ${developer.name}!`);",
    
  ];

  const nameToType = "Manik";

  useEffect(() => {
    const typeInterval = setInterval(() => {
      if (isTyping) {
        if (currentLine < codeLines.length) {
          const currentLineText = codeLines[currentLine];
          if (currentCharIndex < currentLineText.length) {
            setDisplayedText(prev => prev + currentLineText[currentCharIndex]);
            setCurrentCharIndex(prev => prev + 1);
          } else {
            setCurrentLine(prev => prev + 1);
            setCurrentCharIndex(0);
            setDisplayedText(prev => prev + "\n");
          }
        } else {
          setIsTyping(false);
          setIsCompleted(true);
        }
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentLine, currentCharIndex, isTyping, codeLines]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl">
      {/* Computer Screen */}
      <motion.div 
        className="relative bg-gray-900 rounded-lg shadow-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Screen Bezel */}
        <div className="bg-black p-2 rounded-t-lg">
          <div className="flex items-center space-x-2">
            <motion.div 
              className="w-3 h-3 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            />
            <motion.div 
              className="w-3 h-3 bg-yellow-500 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div 
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>
        </div>
        
        {/* Screen Content */}
        <div className="bg-gray-900 p-6 min-h-[450px] relative">
          {/* Terminal Header */}
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <motion.div 
                className="w-2 h-2 bg-gray-500 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
              />
              <motion.div 
                className="w-2 h-2 bg-gray-500 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              />
              <motion.div 
                className="w-2 h-2 bg-gray-500 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              />
            </div>
            <span className="text-gray-400 text-sm font-mono">terminal</span>
            <div className="w-6"></div>
          </div>

          {/* Code Display */}
          <div className="font-mono text-sm relative">
            <pre className="text-green-400 whitespace-pre-wrap leading-relaxed">
              {displayedText}
              {showCursor && isTyping && (
                <motion.span 
                  className="text-green-400"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              )}
            </pre>
            
            {/* Highlight your name when it appears */}
            {displayedText.includes("'Manik'") && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-blue-500/10 rounded"></div>
              </motion.div>
            )}
          </div>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-center space-x-3"
            >
              <div className="flex space-x-1">
                <motion.div
                  className="w-2 h-2 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="w-2 h-2 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className="w-2 h-2 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                />
              </div>
              <span className="text-gray-400 text-xs font-mono">Typing...</span>
            </motion.div>
          )}

          {/* Completion Message */}
          {isCompleted && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-6 p-4 bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/40 rounded-lg backdrop-blur-sm"
            >
              <div className="flex items-center space-x-2 mb-2">
                <motion.div 
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span className="text-green-400 text-sm font-mono">
                  ✓ Code executed successfully!
                </span>
              </div>
              <motion.p 
                className="text-gray-300 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Hello, I'm <span className="text-blue-400 font-bold text-base">{nameToType}</span>! 
                <br />
                
              </motion.p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Floating Code Elements */}
      <motion.div
        className="absolute -top-6 -right-6 w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-blue-500/30"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 8, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <span className="text-blue-400 text-sm font-mono font-bold">{}</span>
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-green-500/30"
        animate={{ 
          y: [0, 12, 0],
          rotate: [0, -8, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        <span className="text-green-400 text-sm font-mono font-bold">()</span>
      </motion.div>

      <motion.div
        className="absolute top-1/3 -left-6 w-6 h-6 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-500/30"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6],
          y: [0, -8, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.8
        }}
      />

      <motion.div
        className="absolute top-2/3 -right-8 w-5 h-5 bg-yellow-500/20 rounded-lg backdrop-blur-sm border border-yellow-500/30"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      >
        <span className="text-yellow-400 text-xs font-mono">[]</span>
      </motion.div>
    </div>
  );
}
