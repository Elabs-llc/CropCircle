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
        className="object-cover h-full w-full rounded-lg shadow-lg"
      />
    </div>
  );
};

const TextSection = () => {
  return (
    <div className="w-full p-6 md:p-12 flex flex-col justify-center items-center text-center max-h-full overflow-auto">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-green-700">
        For Farmers
      </h1>
      <p className="text-xl md:text-3xl text-gray-700 mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <NavLink
        to="/farmer/login"
        className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 text-lg md:text-xl transition duration-300"
      >
        Start Here
      </NavLink>
    </div>
  );
};

const FarmersSection = () => {
  const imageWrapperRef = useRef(null);
  const textWrapperRef = useRef(null);

  useEffect(() => {
    // GSAP animation for image section
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
          toggleActions: "play none none none",
        },
      }
    );

    // GSAP animation for text section
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
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div id='FarmersSection' className="flex flex-col md:flex-row justify-center items-center w-screen h-auto md:h-screen px-4 md:px-0">
      {/* Image Section */}
      <div
        ref={imageWrapperRef}
        className="w-full md:w-1/2 h-full flex items-center justify-center mb-8 md:mb-0"
      >
        <ImageSection />
      </div>

      {/* Text Section */}
      <div
        ref={textWrapperRef}
        className="w-full md:w-1/2 h-full flex items-center justify-center"
      >
        <TextSection />
      </div>
    </div>
  );
};

export default FarmersSection;
