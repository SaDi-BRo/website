import React from 'react';
import Typed from 'react-typed';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-3xl">I'm</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">SaDi</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm&nbsp;
          <Typed
            strings={[
              'a Web Developer',
              'a Software Engineer',
              'Uzbek',
              'Junior',
              'Future Designer',
              'Linux Lover',
            ]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          <Typed
            strings={[
              "I'm a full-stack developer specializing in building (and occasionally designing) exceptional digital experience. Currently, I'm focused on building responsive full-stack web applications.",
            ]}
            typeSpeed={10}
          />
          <div>
            <Link to="work">
              <button className="group text-white border-2 px-7 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-2" />
                </span>
              </button>
            </Link>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Home;
