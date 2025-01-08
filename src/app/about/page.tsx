"use client";
import { aboutMe, skillList } from "@/utils/actionList";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [toolTip, setToolTip] = useState<string | null>(null);
  return (
    <div className="aboutMain ">
      <div
        className="about flex flex-col gap-10 w-100% h-100% py-10 top-20 md:w-[80%] md:h-[80vh] md:top-32 md:p-10 border text-black"
        style={{ background: "#ffffff", opacity: "0.9" }}
      >
        {aboutMe.map((items, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 items-center"
          >
            <div className="img flex-shrink-0">
              <Image
                src={items.image}
                alt="profile"
                width={100}
                height={100}
                className="w-[30vh] h-[40vh] md:w-[20vh] md:h-[20vh] lg:w-[25vh] lg:h-[35vh] rounded-lg"
              />
            </div>
            <div className="content flex flex-col gap-5 px-5 py-4 md:flex-grow h-full">
              <h1 className="text-3xl font-bold">{items.name}</h1>
              <h3>{items.role}</h3>
              <p className="text-justify">{items.content}</p>
            </div>
          </div>
        ))}
        <div className="skillMain w-full md:w-[80%] lg:w-[60%] text-center border p-5 mx-auto rounded-md">
          <div className="skills flex flex-wrap justify-center gap-5 md:gap-8 text-xl md:text-3xl">
            {skillList.map((items, index) => (
              <div
                key={index}
                className=" relative flex items-center justify-center hover:text-orange-500 hover:scale-150 transition duration-300 ease-in-out"
                onMouseEnter={() => setToolTip(items.name)}
                onMouseLeave={() => setToolTip(null)}
              >
                {items.icon}
                {toolTip === items.name && (
                  <div className="absolute bottom-12 px-2 py-1 text-sm text-white bg-black rounded-md">
                    {toolTip}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
