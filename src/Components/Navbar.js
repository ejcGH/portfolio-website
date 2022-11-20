import React, { useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";


export const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () =>  setNav(!nav)

  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#27354a] text-gray-200">
        Navbar
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
       
        {/* Hamburger  */}
              <div onClick={ handleClick} className="md:hidden z-10">
                  {!nav ? <FaBars/> : <FaTimes/> }
        </div>
        {/* Mobile */}
              <div className={!nav ? 'hidden' :  'absolute top-0 left-0 w-full h-screen bg-[#27354a] flex flex-col justify-center items-center' }>
          <ul>
            <li className="py-6 text-4xl" >Home</li>
            <li className="py-6 text-4xl" >About</li>
            <li className="py-6 text-4xl" >Projects</li>
            <li className="py-6 text-4xl" >Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};
