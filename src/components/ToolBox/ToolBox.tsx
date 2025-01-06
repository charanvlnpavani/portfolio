import React from "react";
import { skillList } from "@/utils/actionList";

const ToolBox = () => {
  return (
    <div className="flex flex-col w-full px-5 py-10 md:px-28 lg:px-36 lg:py-32 h-full bg-blue-100">
      <div className="skillMain md:w-[80%] lg:w-[60%] m-auto">
        <div className="skills pb-10">
          <h1 className="text-3xl font-bold mb-5 text-blue-800">Skills</h1>
        </div>
        <div className="skillsLogos grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skillList.map((items, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border bg-blue-500 border-blue-500 text-white py-4 px-5 gap-2 rounded-lg hover:bg-white hover:text-blue-500 hover:border-blue-500 transition duration-300 ease-in-out"
            >
              <div className="text-4xl" title={items.name}>
                {items.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolBox;
