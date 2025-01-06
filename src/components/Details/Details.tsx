"use client";
import { buttonList } from "@/utils/actionList";
import React, { useState } from "react";
import Link from "next/link";

import "./Details.css";
import { RiUserLocationLine } from "react-icons/ri";
import {
  MdOutlineFileDownload,
  MdOutlineFileDownloadDone,
} from "react-icons/md";

const Details = () => {
  const [active, setActive] = useState(0);
  const [download, setDownload] = useState(false);
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };
  return (
    <div className="details flex flex-col gap-10 px-100 pt-72 mt-24 md:mt-0 md:pt-72  md:h-[100vh]  h-[85vh]  ">
      <div className="contentDetails text-right flex flex-col gap-3 md:flex md:flex-col md:gap-8">
        <div className="greeting md:font-bold md:text-xl">{getGreeting()}</div>
        <h1 className="name md:font-bold text-3xl  md:text-6xl ">
          Pavani VLN Charan
        </h1>
        <h2 className="job md:font-bold md:text-3xl text-xl ">
          Frontend Developer
        </h2>
        <h3 className="location md:font-bold md:text-xl flex flex-row  justify-end flex-end place-items-end gap-2 ">
          <RiUserLocationLine /> Bangalore, India
        </h3>
        <div className="button flex flex-row gap-3 justify-end flex-end place-items-end">
          {!download ? (
            <button
              type="button"
              className="cvButton border flex flex-row gap-3 justify-end flex-end place-items-end  border-orange-700 px-10 py-2 bg-orange-700 md:bg-orange-700 md:hover:bg-orange-800 md:hover:border-orange-800  md:text-white md:px-20 md:py-2 "
              onClick={() => setDownload(true)}
            >
              <MdOutlineFileDownload className="text-2xl" />
              CV
            </button>
          ) : (
            <button
              type="button"
              className="cvButton border flex flex-row gap-3 justify-end flex-end place-items-end  border-green-700 px-10 py-2 bg-green-700 md:bg-green-700 md:text-white md:px-20 md:py-2"
              onClick={() => setDownload(true)}
            >
              <MdOutlineFileDownloadDone className="text-2xl" />
              CV
            </button>
          )}
        </div>
        <div className="socialLinks flex flex-row gap-5 justify-end align-center">
          {buttonList.map((items, index) => (
            <Link
              href={items.link}
              key={index}
              onClick={() => setActive(index)}
            >
              <div
                className={`socialIcons cursor-pointer text-md ${
                  active === index ? "active" : ""
                }`}
              >
                {items.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
