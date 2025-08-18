import React from "react";

const Title = ({ title, subTitle, align, font }) => {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <div className={`flex flex-col justify-center ${alignment}`}>
      <h1 className={`text-4xl text-white font-bold ${font}`}>{title}</h1>
      <p className="text-sm md:text-base text-gray-300 mt-2 max-w-174">
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
