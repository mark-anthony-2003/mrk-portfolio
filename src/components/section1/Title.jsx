import { useState, useEffect } from 'react';

const phrases = [
  'Frontend Developer',
  'Backend Developer',
  'Fullstack Developer'
];

const Title = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const currentPhrase = phrases[currentIndex];

  useEffect(() => {
    if (visible && isAnimating) {
      const interval = setInterval(() => {
        if (letterIndex < currentPhrase.length) {
          setLetterIndex((prev) => prev + 1);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [visible, letterIndex, currentPhrase, isAnimating]);

  useEffect(() => {
    if (letterIndex === currentPhrase.length) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [letterIndex, currentPhrase]);

  useEffect(() => {
    if (!visible) {
      const timeout = setTimeout(() => {
        setLetterIndex(0);
        setIsAnimating(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length); 
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  useEffect(() => {
    if (!isAnimating && !visible) {
      const timeout = setTimeout(() => {
        setVisible(true);
        setIsAnimating(true);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating, visible]);

  return (
    <h1 className="text-4xl">
      {currentPhrase.split('').map((letter, index) => (
        <span
          key={index}
          className={`inline-block opacity-0 transition-opacity duration-300 delay-[${index * 100}ms] ${
            letterIndex >= index + 1 ? 'opacity-100' : ''
          }`}
        >
          {letter === ' ' ? '\u00A0' : letter} 
        </span>
      ))}
    </h1>
  );
};

export default Title;
