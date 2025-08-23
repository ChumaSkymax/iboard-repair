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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
