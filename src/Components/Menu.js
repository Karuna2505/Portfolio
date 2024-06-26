import React from 'react'

function Menu({handleMenu}) {
  return (
    <div className="absolute top-0 left-0 w-full bg-[#DAD3BE] flex flex-col justify-evenly items-center z-20"> 
      <img src="/cancel.png" alt="cancel button" onClick={handleMenu} className='fixed top-4 right-2'/>
      <ul className="text-[#254336] font-semibold text-lg space-y-4 mt-4">
        <li>
          <a href="#about" className="effect cursor-pointer" >
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="effect cursor-pointer" >
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="effect cursor-pointer">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="effect cursor-pointer" >
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
