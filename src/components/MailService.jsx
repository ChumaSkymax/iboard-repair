import React from "react";
import Title from "./Title";
import { assets, Processes } from "../assets/assets";

const MailService = () => {
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
      id="mail-service"
      className="scroll-mt-20 flex flex-col items-center px-8 md:px-16 lg:px-24 xl:px-32 py-14 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <Title title="Fast & Reliable Mail-in Service" />

      <div>
        <p className="text-gray-300 text-center mt-2 mb-4">
          Can’t make it to our shop? No problem! With our secure mail-in
          service, you can send your device from anywhere. Once it arrives, our
          expert technicians get to work—diagnosing, repairing, and sending it
          back to you quickly and safely. It’s the easiest way to get
          professional repairs without leaving your home.
        </p>

        <div className="flex justify-between">
          <div>
            <Title title="The Process" />
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4 max-md:gap-6 py-6">
          {Processes.map((process, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 border border-gray-700 rounded-2xl p-6 
              hover:shadow-xl hover:shadow-gray-700/20 transition-all duration-300 transform hover:translate-y-2 hover:border-red-500/40"
            >
              <div className="flex flex-col overflow-hidden">
                <div className="flex justify-center items-center rounded-full bg-transparent border-2 border-gray-700 h-12 w-12">
                  <h1 className="text-white text-3xl font-bold">
                    {process.number}
                  </h1>
                </div>
                <h2 className="text-white text-2xl font-bold mt-4">
                  {process.title}
                </h2>
              </div>
              <p className="text-white text-base mt-4">{process.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            onClick={(e) => handleClick(e, "#mail-your-device")}
            className="flex items-center gap-2 cursor-pointer text-white bg-transparent border border-gray-700 px-4 py-2 rounded-2xl hover:bg-gray-300 hover:text-gray-900 transition-all duration-300 ease-in-out"
          >
            Get Started
            <img src={assets.arrowIcon} alt="arrow icon" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MailService;
