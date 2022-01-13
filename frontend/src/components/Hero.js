import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
          <div className="bg-white h-screen flex flex-col justify-center items-center">
              <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
              FICTOON
              </h1>
              <Link className='py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300
               ease-in-out flex items-center animate-bounce'>
                  Go to Convert
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              </Link>
          </div>
  );
};


export default Hero;
