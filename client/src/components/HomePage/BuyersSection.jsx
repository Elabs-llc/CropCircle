import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img3 from '../../assets/images/img3.jpg';

gsap.registerPlugin(ScrollTrigger);

const ImageSection = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <img
        src={img3}
        alt="Produce"
        className="object-cover h-full w-full rounded-lg shadow-lg"
      />
    </div>
  );
};

const TextSection = () => {
  return (
    <div className="w-full px-4 md:px-8 flex flex-col justify-center items-center text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">
        For Buyers
      </h1>
      <p className="text-xl md:text-3xl text-gray-700 mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <NavLink
        to="/customer/login"
        className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 text-lg md:text-xl transition duration-300"
      >
        Start Here
      </NavLink>
    </div>
  );
};

const BuyersSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full min-h-screen bg-gray-50">
      {/* Text Section */}
      <div
        ref={textRef}
        className="flex justify-center w-full md:w-1/2 h-auto"
      >
        <TextSection />
      </div>

      {/* Image Section */}
      <div
        ref={imageRef}
        className="flex justify-center w-full md:w-1/2 h-auto"
      >
        <ImageSection />
      </div>
    </div>
  );
};

export default BuyersSection;