"use client";
import { substackBlogs } from "@/utils/actionList";
import Image from "next/image";
import React from "react";

const Pages = () => {
  return (
    <div className="workStatus  ">
      <div
        className="status w-full h-full mt-10 px-10 py-10 top-20 md:w-[100%] md:m-32 md:p-10 border text-black m-auto md:m-auto"
        id="blog"
      >
        <h1 className="text-2xl font-bold text-center mb-5 text-gray-800">
          My Substack Posts
        </h1>
        <hr className="substack-post-embed w-full h-[2px] bg-gray-300 mb-8" />

        {/* Blog Cards */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[100%] h-auto py-10">
          {substackBlogs.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="status-item bg-white shadow-lg hover:shadow-2xl rounded-lg p-6 transition duration-300 ease-in-out flex items-center gap-5 cursor-pointer">
                {/* Circular Element */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    {/* Add an image or icon */}
                    <Image
                      src={blog.image || "/placeholder-icon.png"} // Replace with your icon path
                      alt={blog.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="h-16 border-l-2 border-gray-300"></div>

                {/* Blog Content */}
                <div className="flex flex-col">
                  <h2 className="text-xl font-semibold text-gray-700 text-center">
                    {blog.title}
                  </h2>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Pages;
