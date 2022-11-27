import React from "react";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import javascript from "../Assets/javascript.png";
import node from "../Assets/node.png";
import react from "../Assets/react.png";
import github from "../Assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#62738c] w-full h-screen text-[#2b3242]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl  font-semibold  inline border-b-4 border-[#ccd6f6]">Skills</p>
          <p className="py-4 text-gray-200 ">These are the technologies I use</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 ">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={html} alt="Html icon" className="w-20 mx-auto" />
            <p className="my-4">Html</p>
                  </div>
                  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={css} alt="Html icon" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
                  </div>
                  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={javascript} alt="Html icon" className="w-20 mx-auto" />
            <p className="my-4">Javascript</p>
                  </div>
                  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={node} alt="Html icon" className="w-20 mx-auto" />
            <p className="my-4">Node.Js</p>
                  </div>
                  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={react} alt="Html icon" className="w-20 mx-auto" />
            <p className="my-4">ReactJs</p>
                  </div>
                  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={github} alt="Html icon" className="w-20 mx-auto" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
