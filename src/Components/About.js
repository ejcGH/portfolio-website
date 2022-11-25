import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#62738c] text-gray-200 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-semibold inline border-b-4 border-[#ccd6f6] text-[#2b3242]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-5">
          <div className="text-4xl sm:text-right text-[#ccd6f6] font-semibold">
            <p>
              Hey there! I'm Elouisa, follow me along my continuous journey as a
              fullstack developer.
            </p>
          </div>
          <div>
            When I'm not busy designing, creating and developing, I love to
            hike, read and try all different kinds of cuisine while always
            craving for knowledge and constant growth. I specialize in creating
            tools and websites for clients ranging from individuals to small
            businesses. 
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
