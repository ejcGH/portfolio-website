import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#62738c]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ccd6f6]">Hi my name is,</p>
        <h1 className="text-4xl sm:text-6xl font-semibold text-[#bfd8f9]">
          Elouisa Cardano
        </h1>
        <h1 className="font-semibold text-2xl sm:text-6xl text-[#2b3242] ">
          A Fullstack Developer
        </h1>
        <h1 className="text-[#ccd6f6] max-w-[600px]">
          I'm a fullstack developer specializing in building websites from the
          ground up. While developing and designing digital experiences, I'm
          also an aspiring video game developer learning C# on the side.
        </h1>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="group font-semibold text-[#2b3242] flex items-center border-2 px-3 py-2 my-5 hover:bg-[#bfd8f9] hover:border-[#bfd8f9]">
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>
      {/* <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
            <img src={elouisa} className=""/>
          </div> */}
    </div>
  );
};

export default Home;
