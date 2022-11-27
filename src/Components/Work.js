import React from "react";
import PBImg from "../Assets/PBImg.png";
import PortfolioImg from "../Assets/Portfolio.png"
const Work = () => {
  return (
    <div className="bg-[#62738c] w-full md:h-screen text-[#ccd6f6]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-semibold inline border-b-4 border-[#ccd6f6] text-[#2b3242]">
            Work
          </p>
          <p className="py-6">Check out my projects</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${PBImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-semibold text-Red tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ejcGH/PomodoroBuddy" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
                  </div>
                  <div
            style={{ backgroundImage: `url(${PortfolioImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-semibold text-Red tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ejcGH/portfolio-website" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
