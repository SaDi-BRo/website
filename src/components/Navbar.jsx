import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  function handleClick() {
    setNav(!nav);
  }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <motion.div
        className="bg-pink-600 w-[32px] h-[32px] rounded-full fixed top-0 left-0"
        variants={variants}
        animate="default"
      />
      <div>
        <h1 className="px-4 cursor-pointer brand text-5xl font-bold select-none">
          SaDi
        </h1>
      </div>

      <ul className="hidden md:flex">
        <li className="px-4 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 cursor-pointer">
          <Link to="about">About</Link>
        </li>
        <li className="px-4 cursor-pointer">
          <a href="https://blog-red-theta-40.vercel.app/">Blog</a>
        </li>
        <li className="px-4 cursor-pointer">
          <Link to="skills">Skills</Link>
        </li>
        <li className="px-4 cursor-pointer">
          <Link to="work">Work</Link>
        </li>
        <li className="px-4 cursor-pointer">
          <Link to="contact">Contact</Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden">
        <FaBars />
      </div>

      <ul
        className={`absolute top-0 ${
          !nav ? 'left-[-100%]' : 'left-0'
        } w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center ease-in-out duration-500`}
      >
        <h1 className="absolute top-4 left-4 cursor-pointer brand text-5xl font-bold select-none">
          SaDi
        </h1>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/">
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about">
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <a href="https://blog-red-theta-40.vercel.app/">Blog</a>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills">
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work">
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact">
            Contact
          </Link>
        </li>

        <div onClick={handleClick} className="md:hidden absolute top-8 right-4">
          <FaTimes />
        </div>
      </ul>

      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] p-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="#"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] p-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="#"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] p-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="#"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] p-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="#"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
