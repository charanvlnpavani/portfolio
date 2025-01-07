"use client";
import {  experience, project, substackBlogs } from "@/utils/actionList";
import Image from "next/image";
import React, { useState } from "react";

const Pages = () => {
  const [showAll, setShowAll] = useState(false);
  const [showBlogAll, setBlogAll] = useState(false);
  const toggleShowAll = () => setShowAll(!showAll);
  const toggleBlogAll = () => setBlogAll(!showBlogAll);

  return (
    <div className="workStatus  ">
      <div
        className="timeline-container  w-85% h-full mt-20 px-10 py-10 top-23 md:w-[80%] md:h-[100%] md:m-32 md:p-10 border text-black m-auto"
        id="work"
      >
        <h1 className="text-2xl text-center md:text-center font-semibold text-gray-800 ">
          Work Experience
        </h1>
        <hr className="w-full h-[2px] bg-gray-300 mb-8" />
        <div className="timeline flex flex-col gap-10 relative">
          {/* Vertical Line */}
          <div className="absolute  w-[1px] h-full bg-gray-300"></div>

          {experience.map((item, index) => (
            <div
              key={index}
              className="timeline-item flex items-start gap-6 relative"
            >
              {/* Marker */}
              <div className="timeline-marker w-1 h-5 bg-blue-500 rounded-full mt-1"></div>

              {/* Content */}
              <div className="timeline-content">
                <h2 className="text-xl font-bold text-gray-800">
                  {item.company}
                </h2>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {item.role} | {item.duration}
                </p>
                <ul className="text-sm text-gray-700 leading-relaxed list-disc list-inside">
                  {item.description.split("\n").map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="status w-full h-full  px-10 py-10 top-20 md:w-[80%] md:m-32 md:p-10 border text-black m-auto"
        id="project"
      >
        <h1 className="text-2xl font-bold text-center mb-5 text-gray-800">
          My Projects
        </h1>
        <hr className="w-full h-[2px] bg-gray-300 mb-8" />
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[100%] h-auto py-10">
          {(showAll ? project : project.slice(0, 3)).map((item, index) => (
            <div
              className="status-item bg-white shadow-lg hover:shadow-2xl md:h-auto rounded-lg p-6 transition duration-300 ease-in-out flex flex-col gap-5"
              key={index}
            >
              <h2 className="text-2xl font-semibold text-center text-gray-700">
                {item.name}
              </h2>
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="rounded-lg w-[100%] h-[200px] object-cover"
              />
              <p className="text-gray-600 text-sm text-justify text-base mb-4 ">
                {item.description}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-blue-600 hover:text-blue-800 underline"
              >
                <button className="btn btn-primary">View Project</button>
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={toggleShowAll}
            className="px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      </div>

      <div
        className="status w-full h-full mt-10 px-10 py-10 top-20 md:w-[80%] md:m-32 md:p-10 border text-black m-auto"
        id="blog"
      >
        <h1 className="text-4xl font-bold text-center mb-5 text-gray-800">
          My Substack Posts
        </h1>
        <hr className="substack-post-embed w-full h-[2px] bg-gray-300 mb-8" />
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[100%] h-auto py-10">
          {(showBlogAll ? substackBlogs : substackBlogs.slice(0, 3)).map(
            (blog, index) => (
              <div
                key={index}
                className="status-item bg-white shadow-lg hover:shadow-2xl rounded-lg p-6 transition duration-300 ease-in-out flex flex-col gap-5"
              >
                <h2 className="text-2xl font-semibold text-center text-gray-700">
                  {blog.title}
                </h2>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={300}
                  height={200}
                  className="rounded-lg w-full h-[200px] object-contain"
                />
                <p className="text-gray-600 text-sm text-justify mb-4">
                  {blog.description}
                </p>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-center py-2.5 px-5 text-blue-600 hover:text-blue-800 underline"
                >
                  Read on Substack
                </a>
              </div>
            )
          )}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={toggleBlogAll}
            className="px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            {showBlogAll ? "Show Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Pages;
