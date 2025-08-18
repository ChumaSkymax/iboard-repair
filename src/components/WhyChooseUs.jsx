import React from "react";
import Title from "./Title";
import { features } from "../assets/assets";

const WhyChooseUs = () => {
  return (
    <section className="scroll-mt-20 bg-black px-4 md:px-16 lg:px-24 xl:32 py-16">
      <Title
        title="Why Choose Us"
        subTitle="We're the trusted choice for professional device repairs with unmatched quality and service.

"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-black p-6 rounded-xl border border-gray-700
    hover:bg-gray-800 hover:scale-105 hover:shadow-xl
    transition-transform duration-300 ease-in-out"
          >
            <div className="mb-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-10 h-10"
              />
            </div>
            <h1 className="text-lg font-bold text-white">{feature.title}</h1>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
