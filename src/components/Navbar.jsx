import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [nav, setNav] = useState(false);

  function handleClick() {
    setNav(!nav);
  }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h1 className="px-4 cursor-pointer brand text-5xl font-bold select-none">
          SaDi
        </h1>
      </div>

      <ul className="hidden md:flex">
        <li className="px-4 cursor-pointer">Home</li>
        <li className="px-4 cursor-pointer">About</li>
        <li className="px-4 cursor-pointer">Skills</li>
        <li className="px-4 cursor-pointer">Work</li>
        <li className="px-4 cursor-pointer">Contact</li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      <div className="hidden"></div>
    </div>
  );
}

export default Navbar;
