import React from "react";
import Title from "./Title";
import { features } from "../assets/assets";

const WhyChooseUs = () => {
  return (
    <section className="scroll-mt-20 bg-white px-4 md:px-16 lg:px-24 xl:32 py-16">
      <Title
        title="Why Choose Us"
        subTitle="We're the trusted choice for professional device repairs with unmatched quality and service.

"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-transparent p-6 rounded-xl border-2 border-yellow-500 [#ffde59]
    hover:bg-gray-50 hover:scale-105 hover:shadow-xl
    transition-transform duration-300 ease-in-out"
          >
            <div className="mb-4 bg-gradient-to-br from-[#277478] to-[#00c897] rounded-full p-2 w-12 h-12 flex justify-center items-center">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-10 h-10"
              />
            </div>
            <h1 className="text-lg font-bold text-gray-900">{feature.title}</h1>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
