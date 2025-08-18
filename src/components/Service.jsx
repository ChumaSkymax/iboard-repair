import React from "react";
import Title from "./Title";
import { assets, services } from "../assets/assets";

const Service = () => {
  return (
    <section
      className="scroll-mt-20 flex flex-col 
    items-center bg-black px-6 md:px-16 lg:px-24 xl:px-32 py-14 "
      id="what-we-fix"
    >
      <Title
        title="What We Fix"
        subTitle="Professional repair services for all your electronic 
      devices with expert technicians and quality parts"
      />
      <div
        className="grid grid-cols-1 sm:grid-cols-2
       md:grid-cols-3 mt-6"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black rounded-2xl border border-red-900/50  hover:bg-gray-800 hover:scale-105 hover:shadow-xl
                 transition-transform duration-300 ease-in-out m-4 p-4"
          >
            <div>
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="h-12 w-12  border-2 border-red-500/50  rounded-full flex justify-center items-center mt-6">
              <img src={service.icon} alt={service.title} className="w-8 " />
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-bold text-white">{service.title}</h1>
              <p className="text-gray-400 text-sm mt-2">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
