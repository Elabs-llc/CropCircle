import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img3 from '../../assets/images/img3.jpg';

gsap.registerPlugin(ScrollTrigger);

const ImageSection = () => {
  return (
    <div className="w-1/2 h-full flex items-center justify-center"> 
      <img src={img3} alt="Produce" className="object-cover h-full w-full rounded-lg shadow-lg" />
    </div>
  );
};

const TextSection = () => {
  return (
    <div className="w-1/2 p-8 flex flex-col justify-center max-h-full overflow-auto"> 
      <h1 className="text-5xl font-bold mb-4 text-green-700">For Buyers</h1>
      <p className="text-3xl text-gray-700 mb-4 leading-tight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="inline-block mt-6">
        <NavLink
          to="/your-target-route"
          className="bg-green-600 text-white font-bold py-4 px-8 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 text-xl"
        >
          Start Here
        </NavLink>
      </div>
    </div>
  );
};

const BuyersSection = () => {
  const textRef = useRef(null);

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
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <div className="flex justify-between items-center w-screen h-screen px-8 bg-gray-50">
      <div ref={textRef} className="w-1/2"> 
        <TextSection />
      </div>
      <ImageSection />
    </div>
  );
};

export default BuyersSection;