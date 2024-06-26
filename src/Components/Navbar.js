import React, { useState, useEffect } from "react";
import icon from "../Assets/icon.png";
import Menu from "./Menu";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="h-auto overflow-hidden z-10  mt-6 ">
      {isMobile ? (
        <div className="flex justify-between">

        <div className="flex px-4">
        <img src={icon} alt="icon" className="h-12 mt-2 cursor-pointer" />
        <img src={icon} alt="icon" className="h-12 mt-2 cursor-pointer" />
      </div>
        <button onClick={handleMenu} className="mx-4 h-10 w-10 ">
          <img src={menu ? "/cancel.png" : "/menu.png"} alt="menu-button" className="h-12 w-12"/>
        </button>
        </div>
      ) : (
        <div className="flex justify-evenly">
        <div className="flex px-4">
        <img src={icon} alt="icon" className="h-12 mt-2 cursor-pointer" />
        <img src={icon} alt="icon" className="h-12 mt-2 cursor-pointer" />
      </div>
        <div className="w-2/5 ml-52">
          <ul className="flex justify-evenly text-[#254336] font-semibold text-lg">
            <li>
              <a href="#about" className="effect cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="effect cursor-pointer">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="effect cursor-pointer">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="effect cursor-pointer">
                Contact
              </a>
            </li>
          </ul>
        </div>
        </div>
      )}
      {menu && isMobile && <Menu handleMenu={handleMenu}/>}
    </nav>
  );
};

export default Navbar;
