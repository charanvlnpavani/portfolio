"use client";
import { project } from "@/utils/actionList";
import Image from "next/image";
import React from "react";

const Pages = () => {
  return (
    <div className="workStatus  ">
      <div
        className="status w-full h-full px-5 py-10 top-20 md:w-[90%] md:m-32 md:p-10 border text-black m-auto   md:m-auto"
        id="project"
      >
        <h1 className="text-2xl font-bold text-center mb-5 text-gray-800">
          My Projects
        </h1>
        <hr className="w-full h-[2px] bg-gray-300 mb-8" />
        <div className="grid gap-10 grid-rows-2 md:grid-cols-1 lg:grid-cols-2 w-[100%] h-auto ">
          {project.map((item, index) => (
            <div
              className="status-item bg-white  hover:shadow-lg rounded-2xl  transition duration-300 ease-in-out flex flex-col md:flex-row  justify-center items-center "
              key={index}
            >
              {/* Left Section */}
              <div className="flex flex-col  items-center justify-center w-1/3 rounded-l-2xl p-4">
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
                  className=" py-2 px-8 bg-orange-600 hover:bg-orange-700 text-white rounded-lg mb-2 "
                  onClick={() => window.open(item.link)}
                >
                  Preview
                </button>
                <button
                  className=" py-2 px-10 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                  onClick={() => window.open(item.git)}
                >
                  Code
                </button>
              </div>

              {/* Right Section */}
              <div className="flex-1 flex flex-col justify-around ">
                <h2 className="text-xl font-semibold text-gray-700 mb-2 text-center text-orange-600">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-sm text-justify mb-4  md:px-3 px-3">
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
