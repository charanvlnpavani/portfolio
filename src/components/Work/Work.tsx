"use client";
import React, { useState } from "react";
import "./Work.css";

import { contentMap } from "@/utils/actionList";

const Work = () => {
  const [activeContent, setActiveContent] = useState<number | null>(0); // Set default active index to 0

  const renderContent = () => {
    return activeContent !== null ? contentMap[activeContent]?.link : null;
  };

  return (
    <div className="workMain w-[80%] mt-10 h-auto bg-white" id="work">
      <div className="workStatus w-full h-full px-10 py-10 top-20 md:w-[90%] md:m-32 md:p-10  text-black m-auto   md:m-auto">
        <h1 className="text-2xl font-bold text-center mb-5 text-gray-800 text-orange-600">
          My Works
        </h1>
        <hr className="w-full h-[2px] bg-gray-300 mb-8" />
      </div>
      <div className="header flex flex-col gap-2 md:flex md:flex-row  md:gap-2 justify-around items-center w-full h-20 bg-white">
        {/* Top buttons */}
        {contentMap.map((item, index) => (
          <div
            key={index}
            className={`button w-32 h-10 bg-orange-500 rounded-md flex flex-col md:flex md:flex-row justify-center items-center cursor-pointer ${
              activeContent === index ? "bg-orange-700" : "hover:bg-orange-700"
            }`}
            onClick={() => setActiveContent(index)} // Set active content index
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className="content flex flex-col justify-start items-center w-[90%] mx-auto py-10">
        {/* Render content dynamically */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Work;
