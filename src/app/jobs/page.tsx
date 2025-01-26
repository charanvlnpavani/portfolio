"use client";
import { experience } from "@/utils/actionList";
import React, { useState } from "react";

const Pages = () => {
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);
  return (
    <div className="workStatus border flex flex-col md:flex-row  p-6 gap-6">
      {/* Sidebar Navigation */}
      <div
        className="company-list w-full md:w-1/4 border-r border-gray-300 p-4 overflow-y-auto"
        style={{ maxHeight: "40vh" }}
      >
        {experience.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer p-3 rounded-lg text-center transition duration-200 ease-in-out 
              ${
                selectedCompanyIndex === index
                  ? "bg-gray-200 font-bold text-green-500"
                  : "text-gray-800"
              }
            `}
            onClick={() => setSelectedCompanyIndex(index)}
          >
            {item.company}
          </div>
        ))}
      </div>

      {/* Content Area */}
      <div
        className="company-details w-full md:w-3/4 p-6 overflow-y-auto"
        style={{ maxHeight: "70vh" }}
      >
        <h1 className="text-2xl font-semibold  text-gray-800 text-center md:text-center ">
          Work Experience
        </h1>
        <hr className="w-full h-[2px] bg-gray-300 mb-6" />

        <div className="timeline-content">
          <h2 className="text-xl font-bold text-gray-800">
            {experience[selectedCompanyIndex].company}
          </h2>
          <p className="text-sm font-medium text-gray-600 mb-2">
            {experience[selectedCompanyIndex].role} |{" "}
            {experience[selectedCompanyIndex].duration}
          </p>
          <ul className="text-sm text-gray-700 leading-relaxed list-disc list-inside">
            {experience[selectedCompanyIndex].description
              .split("\n")
              .map((line, index) => (
                <li key={index}>{line}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pages;
