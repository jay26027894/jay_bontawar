import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextPressure from './TextPressure';

const RotatingText = ({
  texts,
  mainClassName,
  staggerFrom, // Not fully implemented in this simplified version, but kept for prop consistency
  initial,
  animate,
  exit,
  staggerDuration, // Not fully implemented
  splitLevelClassName, // Not fully implemented
  transition,
  rotationInterval,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(timer);
  }, [texts, rotationInterval]);

  const currentText = texts[currentIndex];

  return (
    <div className={mainClassName}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText} // Key is crucial for AnimatePresence to detect changes
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
          className={splitLevelClassName} // Apply the splitLevelClassName here if it's meant for the inner text
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};


export default function App() {
  return (
    // You would typically have a main App component rendering your Hero
    <Hero />
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-24 px-6 text-center max-w-4xl mx-auto"
    >
      <h1 className="text-4xl md:text-3xl mb-4 bg-gradient-to-r from-pink-700 to-purple-400 bg-clip-text text-transparent">Hi, my name is</h1>
      
<div style={{position: 'relative', height: '150px'}}>
  <TextPressure
    text="Jay Bontawar"
    flex={true}
    alpha={true}
    stroke={true}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={16}
  />
</div>

      <div className="flex items-center justify-center gap-2 text-2xl md:text-2xl font-bold tracking-tight mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        {}
        <span>I am a&nbsp;</span>
        {}
        <RotatingText
          texts={["Web Developer", "Web Designer", "Problem Solver"]} 
          mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={1000}
        />
        
      </div>
      <div className="mt-16 animate-bounce text-pink-500 text-4xl">↓</div>
    </section>
  );
}
