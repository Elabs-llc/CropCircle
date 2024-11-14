import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import backgroundImage from '../../assets/images/backgroundImage.jpg';
import '../../index.css';

const HeroSection = () => {
  const texts = [
    "Empowering Small-Scale Farmers",
    "with Direct Access",
    "to Sustainable Markets"
  ];

  // Create refs for each text line
  const textRefs = useRef([]);

  useEffect(() => {
    // GSAP animation to fade in each text line with a stagger effect
    gsap.fromTo(
      textRefs.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        stagger: 0.5,
        ease: "power3.out"
      }
    );
  }, []);

  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute right-0 top-0 h-full w-1/2 flex items-start justify-center">
        <div className="trapezium flex items-center justify-center">
          <div className="text-black text-2xl md:text-4xl lg:text-5xl font-bold text-center">
            {texts.map((text, index) => (
              <div
                key={index}
                ref={(el) => (textRefs.current[index] = el)}
                className="mb-4"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
