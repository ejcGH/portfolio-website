import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import ecresume from "../Assets/ec-resume.pdf";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#62738c] text-gray-200">
        Elouisa Cardano
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            {" "}
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            {" "}
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        {/* Hamburger  */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile */}
        <div
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#27354a] flex flex-col justify-center items-center"
          }
        >
          <ul>
            <li className="py-6 text-4xl">
              <Link
                onClick={handleClick}
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link
                onClick={handleClick}
                to="about"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link
                onClick={handleClick}
                to="skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link
                onClick={handleClick}
                to="projects"
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link
                onClick={handleClick}
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-blue-400">
              <a
                className="flex justify-between items-center w-full text-gray-100"
                href="https://linkedin.com/in/elouisa-c-dev
                "
                target="_blank"
              >
                LinkedIn <FaLinkedin size={45} />{" "}
              </a>
            </li>
            <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-gray-400">
              <a
                className="flex justify-between items-center w-full text-gray-100"
                href="https://github.com/ejcGH"
                target="_blank"
              >
                Github <FaGithub size={45} />{" "}
              </a>
            </li>
            <Link to="contact" smooth={true} duration={500}>
              <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-blue-400">
                <a
                  className="flex justify-between items-center w-full text-gray-100"
                  href="/"
                >
                  Email <HiOutlineMail size={45} />{" "}
                </a>
              </li>
            </Link>

            <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-gray-400">
              <a
                className="flex justify-between items-center w-full text-gray-100"
                href={ecresume}
                target="_blank"
              >
                Resume <BsFillPersonLinesFill size={45} />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
