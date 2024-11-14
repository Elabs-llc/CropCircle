import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavLink } from 'react-router-dom';
import img2 from '../../assets/images/img2.jpg';

gsap.registerPlugin(ScrollTrigger);

const ImageSection = () => {
  return (
    <div className="w-full h-full">
      <img
        src={img2}
        alt="Farmers"
        className="object-cover h-full w-full"
      />
    </div>
  );
};

const TextSection = () => {
  return (
    <div className="w-full p-8 flex flex-col justify-center max-h-full overflow-auto">
      <h1 className="text-5xl font-bold mb-4 text-green-700">For Farmers</h1>
      <p className="text-3xl text-gray-700 mb-4 leading-tight"> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="inline-block mt-4"> 
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

const FarmersSection = () => {
  const imageWrapperRef = useRef(null);
  const textWrapperRef = useRef(null);

  useEffect(() => {
    
    gsap.fromTo(
      imageWrapperRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageWrapperRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    
    gsap.fromTo(
      textWrapperRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textWrapperRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      
      <div ref={imageWrapperRef} className="w-1/2 h-full flex items-center justify-center">
        <ImageSection />
      </div>
      <div ref={textWrapperRef} className="w-1/2 h-full flex items-center justify-center">
        <TextSection />
      </div>
    </div>
  );
};

export default FarmersSection;