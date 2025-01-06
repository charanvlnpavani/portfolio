import React from "react";
import "./Self.css";
import Link from "next/link";

const Self = () => {
  return (
    <div className="selfMain">
      <div className="self flex flex-col gap-5 p-5 justify-center items-center top-36 md:w-[50%] md:h-[40vh] md:top-52 md:p-10 md:border md:border-1">
        <div className="title">
          <h2 className="text-3xl font-bold ">About</h2>
        </div>
        <div className="content flex flex-col gap-5 md:flex md:flex-col md:gap-8">
          <p className="text-center">
            Frontend Developer with 2 years of experience specializing in
            React.js, JavaScript, and modern web technologies, with a strong
            focus on creating responsive, user-centered interfaces. Recently
            shifted from backend PHP development to depend expertise in frontend
            technologies and drive user engagement through React-powered
            solutions. Seeking opportunities to leverage React.js proficiency
            and frontend skills in innovative projects.
          </p>
          <Link href="/about" className="text-center">
            <button className="aboutButton  border border-orange-700 px-10 py-2 bg-orange-700 md:bg-orange-700 md:text-white md:px-20 md:py-2 justify-center  md:hover:bg-orange-800 md:hover:border">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Self;
