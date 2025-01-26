"use client";
import React, { useEffect, useState } from "react";
import { downloadResume } from "@/utils/download";
import "./Details.css";
import { RiUserLocationLine } from "react-icons/ri";
import {
  MdOutlineFileDownload,
  MdOutlineFileDownloadDone,
} from "react-icons/md";

const Details = () => {
  const [download, setDownload] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Frontend Developer";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length - 1) {
        // Update text only with valid substring
        setText((prev) => prev + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval); // Stop typing when text is complete
      }
    }, 200); // Adjust typing speed

    return () => clearInterval(typingInterval); // Clean up on component unmount
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12)
      return (
        <>
          <span className="text-2xl md:text-4xl text-orange-600">M</span>orning
        </>
      );
    if (hour < 17)
      return (
        <>
          <span className="text-2xl md:text-4xl text-orange-600">A</span>
          fternoon
        </>
      );
    if (hour < 20)
      return (
        <>
          <span className="text-2xl md:text-4xl text-orange-600">E</span>vening
        </>
      );
    return (
      <>
        <span className="text-2xl md:text-4xl text-orange-600">N</span>ight
      </>
    );
  };
  const handleDownload = () => {
    downloadResume();
    setDownload(true); // Update state after download
  };

  return (
    <div className="details flex flex-col gap-10 px-100 pt-20  md:mt-0 md:pt-72  md:h-[100vh]  h-[85vh]  ">
      <div className="contentDetails text-right flex flex-col gap-3 md:flex md:flex-col  md:gap-8  text-black">
        <div className="greeting md:font-bold md:text-xl ">
          <span className="text-2xl md:text-4xl text-orange-600">Hi 👋, G</span>
          ood {getGreeting()}
          <span className="text-2xl md:text-4xl text-orange-600">😎</span>
        </div>
        <h1 className="name md:font-bold text-2xl  md:text-4xl pt-12 ">
          <span className="text-3xl md:text-6xl text-orange-600">P</span>avani
          <span className="text-3xl md:text-6xl text-orange-600"> VLN </span>
          <span className="text-3xl md:text-6xl text-orange-600">C</span>haran
        </h1>
        <h2 className="job md:font-bold md:text-3xl text-xl ">
          {text}
          <span className="cursor text-orange-600">|</span>{" "}
          {/* Optional blinking cursor */}
        </h2>
        <h3 className="location md:font-bold md:text-xl flex flex-row  justify-end flex-end place-items-end gap-2 ">
          <RiUserLocationLine /> Bangalore, India
        </h3>
        <div className="button flex flex-row gap-3 justify-end flex-end place-items-end pt-20  text-white">
          {!download ? (
            <button
              type="button"
              className="cvButton border flex flex-row gap-3 justify-end flex-end place-items-end  border-orange-700 px-10 py-2 bg-orange-700 md:bg-orange-700 md:hover:bg-orange-800 md:hover:border-orange-800  md:text-white md:px-20 md:py-2 "
              onClick={handleDownload}
            >
              <MdOutlineFileDownload className="text-2xl" />
              CV
            </button>
          ) : (
            <button
              type="button"
              className="cvButton border flex flex-row gap-3 justify-end flex-end place-items-end  border-green-700 px-10 py-2 bg-green-700 md:bg-green-700 md:text-white md:px-20 md:py-2"
              onClick={handleDownload}
            >
              <MdOutlineFileDownloadDone className="text-2xl" />
              CV
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
