import React from "react";

const Title = ({ title, subTitle, font }) => {
  return (
    <div className="flex flex-col justify-center items-start text-left md:items-center md:text-center">
      <h1 className={`text-4xl text-white font-bold ${font}`}>{title}</h1>
      <p className="text-sm md:text-base text-gray-300 mt-2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl">
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
