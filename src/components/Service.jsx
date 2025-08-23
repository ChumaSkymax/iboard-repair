import React from "react";
import Title from "./Title";
import { assets, services } from "../assets/assets";

const Service = () => {
  return (
    <section
      className="scroll-mt-20 flex flex-col 
    items-center bg-[#ffffff] px-6 md:px-16 lg:px-24 xl:px-32 py-14 "
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
            className="bg-gradient-to-br from-[#277478] to-[#00c897] rounded-2xl border border-[#277478] hover:from-[#277478]/90 hover:to-[#00c897]/90 hover:scale-105 hover:shadow-xl
                 transition-transform duration-300 ease-in-out m-4 p-6"
          >
            <div className="h-12 w-12  border-2 border-[#00c897] rounded-full flex justify-center items-center mb-4">
              <img src={service.icon} alt={service.title} className="w-8 " />
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-bold text-white">{service.title}</h1>
              <p className="text-gray-100 text-sm mt-2">
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
