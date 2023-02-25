import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import logo from "../assets/5.svg";



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav)
  return (
    <div  className="w-full h-[60px]  z-10  drop-shadow-lg top-0 pl-4 pt-2 pb-2 ">
      <div className="px-2 py-3 flex justify-between items-center  h-full my-1 ">
        <div className="flex items-center">
        <img src={logo} alt="logo" className="left h-[40px] w-[200px]" />
          
          <ul className="hidden md:flex ml-3">
            <li>
              <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="upload" smooth={true} offset={-200} duration={500} className="cursor-pointer">
              Upload
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-200} duration={500} className="cursor-pointer">
              About
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={-50} duration={500} className="cursor-pointer">
              Support
              </Link>
            </li>
            
          </ul>
        </div>
        
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <Bars3Icon className="w-5" /> : <XMarkIcon className="w-5" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
      <li>
              <Link className="border-b-2 border-zinc-300 w-full cursor-pointer" to="home" onClick={handleClose}  smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link  className="border-b-2 border-zinc-300 w-full cursor-pointer"to="about" onClick={handleClose}  smooth={true} offset={-200} duration={500}>
              About
              </Link>
            </li>
            <li>
              <Link className="border-b-2 border-zinc-300 w-full cursor-pointer" to="support"  onClick={handleClose} smooth={true} offset={-50} duration={500}>
              Support
              </Link>
            </li>
           
      </ul>
    </div>
  );
};

export default Navbar;
