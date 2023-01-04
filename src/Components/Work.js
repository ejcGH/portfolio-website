import { React } from "react";
import PBImg from "../Assets/PBImg.png";
import PortfolioImg from "../Assets/Portfolio.png";
import WorkoutPlannerImg from "../Assets/WorkoutPlanner.png";
import LocalEyes from "../Assets/LocalEyes.png";

const Work = () => {
  return (
   
      <div
        name="projects"
        className="bg-[#62738c] w-full h-screen text-[#ccd6f6]"
      >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-semibold inline border-b-4 border-[#ccd6f6] text-[#2b3242]">
              Work
            </p>
            <p className="py-6">Check out my projects</p>
          </div>

          {/* container */}
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-5 mb-3">
            <div
              style={{ backgroundImage: `url(${LocalEyes})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* hover effect */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font-semibold text-Red tracking-wider">
                  LocalEyes
                </span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-3xl font-semibold inline  text-[#2b3242]">
                LocalEyes
              </p>

              <p className="text-gray-200">
                Have you ever missed a deal at your favorite store because you{" "}
                <br />
                didn't hear about it in time? With LocalEyes, locals around you{" "}
                <br />
                can share their deal findings at any store they shop. <br />
                
                <br />
                Built with: HTML, CSS, BootStrap, JavaScript, React, Node.js,
                <br />
                Express.js, Google API, Cors
              </p>

              <a href="https://github.com/ejcGH/LocalEyes" target="_blank">
                <button className="mt-6 rounded px-4 py-2 text-white  bg-blue-400 ">
                  view code
                </button>
              </a>
            </div>

            {/* grid item */}
            <div
              style={{ backgroundImage: `url(${PBImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* hover effect */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font-semibold text-Red tracking-wider">
                  PomodoroBuddy
                </span>
              </div>
            </div>
            <div className="pt-8 text-center">
              <p className="text-3xl font-semibold inline  text-[#2b3242]">
                PomodoroBuddy
              </p>

              <p className="text-gray-200">
                Implenement the pomodoro technique in your own study/work
                <br />
                sessions! With the PomodoroBuddy, you'll have a countdown
                <br />
                timer and a todo list available to you.
                <br />
                <br />
                Built with: HTML, CSS, BootStrap, JavaScript, React, Context
                <br />
              </p>
              <a href="https://github.com/ejcGH/PomodoroBuddy" target="_blank">
                <button className="mt-6 rounded px-4 py-2 text-white  bg-blue-400 ">
                  view code
                </button>
              </a>
            </div>
            <div
              style={{ backgroundImage: `url(${PortfolioImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* hover effect */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font-semibold text-Red tracking-wider">
                  Portfolio website
                </span>
              </div>
            </div>
            <div className="pt-8 text-center">
              <p className="text-3xl font-semibold inline  text-[#2b3242]">
                Portfolio Website
              </p>

              <p className="text-gray-200">
                Elouisa Cardano personal portfolio website hosted on Netlify.
                <br />
                <br />
                Built with: HTML, CSS, Tailwind CSS, JavaScript, React,
                Getform.io
              </p>

              <a
                href="https://github.com/ejcGH/portfolio-website"
                target="_blank"
              >
                <button className="mt-6 rounded px-4 py-2 text-white  bg-blue-400">
                  view code
                </button>
              </a>
            </div>

            <div
              style={{ backgroundImage: `url(${WorkoutPlannerImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* hover effect */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font-semibold text-Red tracking-wider">
                  Workout Planner
                </span>
                </div>
              </div>
            <div className="text-center">
            <p className="text-3xl font-semibold inline  text-[#2b3242]">
                Gymnasio - Workout Builder
              </p>

              <p className="text-gray-200">
                Build a workout planner using Gymnasio, to get in better <br />
                shape and maintain consistency for the week! <br />
                <br/>
                Built with: HTML, CSS, EJS, JavaScript, React, Node.js,
                <br />
                Express.js, Bcrypt
              </p>

                  <a
                    href="https://github.com/ejcGH/Gymnasio-Workout-Planner"
                    target="_blank"
                  >
                    <button className="mt-6 rounded px-4 py-2 text-white  bg-blue-400">
                    view code
                    </button>
                  </a>
               
            </div>
          </div>
        </div>
      </div>

  );
};

export default Work;
