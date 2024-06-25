import React from 'react';
import icon from '../Assets/icon.png';
const Navbar = () => {
  return (
    <nav className="flex justify-center mt-8">
    
    <img src={icon} alt="icon" className='h-12'/>
    <img src={icon} alt="icon" className='h-12'/>
      <div className='w-3/5 h-16 ml-6'>
        <ul className='flex justify-evenly text-[#254336] font-semibold text-lg'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
