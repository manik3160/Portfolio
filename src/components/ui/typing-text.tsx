"use client";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
  coloredText?: {
    text: string;
    color: string;
  };
}

export function TypingText({ 
  text, 
  speed = 50, 
  className = "", 
  showCursor = true,
  onComplete,
  coloredText
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursorState, setShowCursorState] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
      onComplete?.();
    }
  }, [currentIndex, text, speed, onComplete]);

  useEffect(() => {
    if (isTyping) {
      const cursorInterval = setInterval(() => {
        setShowCursorState(prev => !prev);
      }, 500);

      return () => clearInterval(cursorInterval);
    }
  }, [isTyping]);

  const renderText = () => {
    if (!coloredText) {
      return displayedText;
    }

    const coloredLength = coloredText.text.length;
    const coloredPart = displayedText.substring(0, coloredLength);
    const remainingPart = displayedText.substring(coloredLength);

    return (
      <>
        <span className={coloredText.color}>{coloredPart}</span>
        <span>{remainingPart}</span>
      </>
    );
  };

  return (
    <span className={className}>
      {renderText()}
      {showCursor && showCursorState && isTyping && (
        <motion.span 
          className="text-blue-500 dark:text-blue-400"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      )}
    </span>
  );
}
