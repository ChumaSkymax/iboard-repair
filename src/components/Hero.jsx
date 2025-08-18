import React from "react";

const Hero = () => {
  // Smooth scroll handler
  const handleClick = (e, targetId) => {
    e.preventDefault(); // prevent default jump
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // smooth scroll
        block: "start", // align to top
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center 
            px-6 md:px-16 lg:px-24 xl:px-32 
            bg-[url('/src/assets/hero.svg')] bg-no-repeat bg-cover bg-center h-screen"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Content with higher z-index */}
      <div className="z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Professional <span className="text-secondary">Board Repair</span>
        </h1>
        {/* <p className="mb-4 text-white mt-0 px-10">By Green Wireless</p> */}
        <p className="text-m md:text-xl md:text-center text-gray-300 mb-8 max-w-3xl mx-auto">
          Expert iPhone, iPad, MacBook, and gaming console repairs. Fast
          turnaround, nationwide mail-in service, and 90-day warranty.
        </p>
        <div className="flex flex-col items-start sm:flex-row gap-4 justify-center">
          <button
            onClick={(e) => handleClick(e, "#mail-your-device")}
            className="flex flex-row gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            <span className="text-m">Mail Your Device</span>
            <img src="" alt="" />
          </button>

          {/* AI Agent Button  */}
          {/* <button className="flex flex-row gap-2 text-white px-4 py-2 border-1 border-red-500 rounded-lg font-semibold hover:bg-white hover:text-black hover:border-none transition-all duration-300">
            <span className="text-m">AI Agent</span>
            <img src="" alt="" />
          </button>  */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
