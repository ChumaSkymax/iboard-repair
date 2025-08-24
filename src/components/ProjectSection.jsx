import React from "react";
import Title from "./Title";
import { assets, projects } from "../assets/assets";

const ProjectSection = () => {
  const handleClick = (e, targetId) => {
    e.preventDefault(); // prevent default jump
    const section = document.querySelector("#mail-your-device");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // smooth scroll
        block: "start", // align to top
      });
    }
  };
  return (
    <section
      id="repairs"
      className="scroll-mt-20 flex flex-col justify-center items-center bg-white px-8 md:px-16 lg:px-24 xl:32 py-16 "
    >
      <Title
        title="Behind the Repairs"
        subTitle="Take a look at some of the successful projects we've delivered. From complex repairs to custom solutions, our work speaks for itself."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 cursor-pointer">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group bg-gradient-to-br from-[#277478] to-[#00c897]
           rounded-2xl overflow-hidden hover:from-[#00c897] hover:to-[#277478]
            transition-all duration-300 border border-[#ffde59] shadow-xl hover:shadow-2xl"
          >
            <div className="relative overflow-hidden group h-48">
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-300 ease-in-out z-0"
              />
              <div className="absolute inset-0 bg-[#277478]/20 group-hover:bg-[#277478]/40 transition-all duration-300 z-10"></div>
            </div>

            <div className="flex flex-col justify-center text-left p-8 gap-5">
              <h1 className="text-2xl text-white font-bold">{project.title}</h1>
              <p className="text-white text-m">{project.description}</p>
              <div className="flex">
                <div className="flex items-center space-x-2 group">
                  <button
                    onClick={(e) => handleClick(e, "#contact-us")}
                    className="text-[#ffde59] group-hover:text-white font-semibold transition-colors cursor-pointer"
                  >
                    Book a Repair
                  </button>
                  <img
                    src={assets.arrowIcon}
                    alt="arrow-icon"
                    className="transform transition-transform duration-300 group-hover:translate-x-2"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(1) sepia(1) saturate(5) hue-rotate(45deg)",
                    }}
                  />
                </div>
                <div className="ml-auto">
                  <a
                    href="https://www.youtube.com/@IBoardrepairllc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-white border-2 border-[#ffde59] hover:bg-[#ffde59]/80 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
