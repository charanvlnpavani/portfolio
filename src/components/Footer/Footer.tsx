"use client";
import React, { useState } from "react";
import "./Footer.css";
import {
  MdOutlineFileDownload,
  MdOutlineFileDownloadDone,
} from "react-icons/md";
import { buttonList } from "@/utils/actionList";
import Link from "next/link";
import { downloadResume } from "@/utils/download";

const Footer = () => {
  const [download, setDownload] = useState(false);
  const [active, setActive] = useState(0);

  const handleDownload = () => {
    downloadResume();
    setDownload(true); // Update state after download
  };

  return (
    <div className="footerMain flex gap-10 align-center justify-center bg-black text-white w-full h-[10vh] px-10 pt-10 ">
      <div className="footer flex flex-col gap-5 md:flex md:flex-col md:gap-8 ">
        <div className="content">
          <h1 className="text-3xl font-bold justify-center items-center md:text-4xl">
            Get In Touch
          </h1>
        </div>
        <div className="button flex flex-row gap-3 justify-center place-items-end">
          {!download ? (
            <Link href="/">
              <button
                type="button"
                className="cvButton border flex flex-row gap-3 justify-center place-items-end  border-orange-700 px-10 py-2 bg-orange-700 md:bg-orange-700 md:hover:bg-orange-800 md:hover:border-orange-800  md:text-white md:px-20 md:py-2 "
                onClick={handleDownload}
              >
                <MdOutlineFileDownload className="text-2xl" />
                CV
              </button>
            </Link>
          ) : (
            <Link href="/">
              <button
                type="button"
                className="cvButton border flex flex-row gap-3 justify-center place-items-end  border-green-700 px-10 py-2 bg-green-700 md:bg-green-700 md:text-white md:px-20 md:py-2"
                onClick={handleDownload}
              >
                <MdOutlineFileDownloadDone className="text-2xl" />
                CV
              </button>
            </Link>
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

export default Footer;
