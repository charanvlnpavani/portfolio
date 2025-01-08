import React from "react";
import "./Work.css";
import { workList } from "@/utils/actionList";
const Work = () => {
  return (
    <div className="workMain w-full h-auto">
      <div className="work flex flex-col gap-5 md:gap-20 justify-center items-center w-[90%] h-full py-10 top-20 md:w-[85%] md:h-[80vh] md:top-32 md:p-10">
        <h1 className="text-3xl font-bold">Work</h1>
        <div className="workCards grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 md:gap-24 lg:gap-36">
          {workList.map((items, index) => (
            <a href={items.link} key={index}>
              <div className="w-[40vh] h-[40vh] md:w-56 md:h-56 lg:w-[40vh] lg:h-[60vh] bg-white text-white cursor-pointer rounded-3xl p-px card-wrapper">
                <div className={`${items.image} card-content`}>
                  <h1 className="text-3xl font-bold flex justify-center items-center md:text-4xl pt-20 md:pt-64">
                    {items.name}
                  </h1>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
