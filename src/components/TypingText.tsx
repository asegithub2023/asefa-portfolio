// src/components/TypingText.tsx
import React, { useEffect, useState } from "react";

interface TypingTextProps {
  texts: string[];           // array of strings to loop
  typingSpeed?: number;      // ms per character
  deletingSpeed?: number;    // ms per character when deleting
  pauseTime?: number;        // ms pause after typing full text
}

const TypingText: React.FC<TypingTextProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentText = texts[textIndex];

    if (!isDeleting && displayedText.length < currentText.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to next text
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return <span>{displayedText}</span>;
};

export default TypingText;
