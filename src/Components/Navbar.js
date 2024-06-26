// Navbar.js
import React from 'react';
import icon from "../Assets/icon.png";

const Navbar = () => {

  return (
    <nav className="h-auto  z-10 flex justify-center items-center py-4 ">
      <img src={icon} alt="icon" className="h-12 mt-3 cursor-pointer" />
      <img src={icon} alt="icon" className="h-12 mt-3 cursor-pointer" />
      <div className="w-2/5 ml-52">
        <ul className="flex justify-evenly text-[#254336] font-semibold text-lg ">
        <li><a href="#about" className='effect cursor-pointer'>About</a></li>
        <li><a href="#skills" className='effect cursor-pointer'>Skills</a></li>
        <li><a href="#projects" className='effect cursor-pointer'>Projects</a></li>
        <li><a href="#contact" className=' effect cursor-pointer'>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
