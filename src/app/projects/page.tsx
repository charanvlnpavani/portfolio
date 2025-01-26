"use client";
import { project } from "@/utils/actionList";
import Image from "next/image";
import React from "react";

const Pages = () => {
  return (
    <div className="workStatus  ">
      <div
        className="status w-full h-full px-10 py-10 top-20 md:w-[90%] md:m-32 md:p-10 border text-black m-auto   md:m-auto"
        id="project"
      >
        <h1 className="text-2xl font-bold text-center mb-5 text-gray-800">
          My Projects
        </h1>
        <hr className="w-full h-[2px] bg-gray-300 mb-8" />
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 w-[100%] h-auto py-10">
          {project.map((item, index) => (
            <div
              className="status-item bg-white shadow-md hover:shadow-lg rounded-2xl p-6 transition duration-300 ease-in-out flex flex-row gap-5"
              key={index}
            >
              {/* Left Section */}
              <div className="flex flex-col items-center justify-center w-1/3 bg-gray-100 rounded-l-2xl p-4">
                <div className="w-20 h-20 bg-gray-300 rounded-full mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <button
                  className="w-full py-2 bg-blue-500 text-white rounded-lg mb-2 hover:bg-blue-600"
                  onClick={() => window.open(item.link)}
                >
                  Preview
                </button>
                <button
                  className="w-full py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                  onClick={() => window.open(item.git)}
                >
                  Code
                </button>
              </div>

              {/* Right Section */}
              <div className="flex-1 flex flex-col justify-around">
                <h2 className="text-xl font-semibold text-gray-700 mb-2 text-center">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-sm text-justify mb-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Pages;
