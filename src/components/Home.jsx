import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-3xl">I'm</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">SaDi</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experience. Currently, I'm focused on
          building responsive full-stack web applications.
          <div>
            <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Home;
