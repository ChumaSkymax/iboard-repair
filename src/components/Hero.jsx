import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

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

  // Optimize video loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center 
            px-6 md:px-16 lg:px-24 xl:px-32 
            h-screen overflow-hidden"
    >
      {/* Video Background */}
      {showVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={assets.gameConsoleImg}
          onLoadedData={handleVideoLoad}
          className={`absolute inset-0 w-full h-full object-cover object-center z-0 
                     min-w-full min-h-full scale-110 sm:scale-100 transition-opacity duration-500 ${
                       videoLoaded ? "opacity-100" : "opacity-0"
                     }`}
          style={{
            objectPosition: "center",
            transform: "scale(1.1)",
            "@media (min-width: 640px)": {
              transform: "scale(1)",
            },
          }}
        >
          <source src={assets.gamingConsoleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Fallback background image while video loads */}
      {!videoLoaded && (
        <div
          className="absolute inset-0 w-full h-full object-cover object-center z-0 
                     min-w-full min-h-full scale-110 sm:scale-100"
          style={{
            backgroundImage: `url(${assets.gameConsoleImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Content with higher z-index */}
      <div className="z-10 relative mt-6 sm:mt-8">
        <h1 className="text-4xl sm:text-5xl md:text-5xl max-sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
          Professional <span className="text-[#00c897]">Board Repair</span> You
          Can Rely On
        </h1>
        {/* <p className="mb-4 text-white mt-0 px-10">By Green Wireless</p> */}
        <p className="text-sm sm:text-base md:text-xl text-center text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
          Expert iPhone, iPad, MacBook, and gaming console repairs. Fast
          turnaround, nationwide mail-in service, and 90-day warranty.
        </p>
        <div className="flex flex-col items-center sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            onClick={(e) => handleClick(e, "#mail-your-device")}
            className="flex flex-row gap-2 bg-gradient-to-r from-[#277478] to-[#00c897] text-white px-4 py-3 sm:py-2 rounded-lg font-semibold hover:from-[#00c897] hover:to-[#277478] transition-all duration-300 cursor-pointer whitespace-nowrap text-sm sm:text-base w-full sm:w-auto justify-center"
          >
            <span>Mail Your Device</span>
            <img src="" alt="" />
          </button>

          {/* AI Agent Button  */}
          {/* <button className="flex flex-row gap-2 text-white px-4 py-2 border-1 border-red-500 rounded-lg font-semibold hover:bg-white hover:text-black hover:border-none transition-all duration-300">
            <span className="text-m">AI Agent</span>
            <img src="" alt="" />
          </button>  */}
        </div>
        <div className="mt-8 sm:mt-8">
          <h2 className="text-xl sm:text-2xl text-white font-bold mb-3 sm:mb-4 text-center">
            Let's Fix Your Device
          </h2>
          <ul
            className="bg-gradient-to-r from-[#277478]/30 to-[#00c897]/30 py-4 px-2 sm:py-6 sm:px-4 rounded-lg text-white text-xs 
            sm:text-sm gap-3 sm:gap-4 flex flex-col sm:flex-row items-center justify-center"
          >
            <li className="flex flex-row gap-2 items-center">
              <span className="max-sm:hidden">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#277478] rounded-full"></div>
              </span>
              iPhone Repair
            </li>
            <li className="flex flex-row gap-2 items-center">
              <span className="max-sm:hidden">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#277478] rounded-full"></div>
              </span>
              iPad Repair
            </li>
            <li className="flex flex-row gap-2 items-center">
              <span className="max-sm:hidden">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#277478] rounded-full"></div>
              </span>
              MacBook Repair
            </li>
            <li className="flex flex-row gap-2 items-center">
              <span className="max-sm:hidden">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#277478] rounded-full"></div>
              </span>
              Gaming Console Repair
            </li>

            <li className="flex flex-row gap-2 items-center">
              <span className="max-sm:hidden">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#277478] rounded-full"></div>
              </span>
              Mail Service
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
