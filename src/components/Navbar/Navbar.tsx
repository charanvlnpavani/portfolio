"use client";

import { buttonList, menuList } from "@/utils/actionList";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const [active, setActive] = useState(-1);

  return (
    <div
      className={`sidebar-container flex flex-col gap-5 justify-normal px-8 py-10 fixed top-0 left-0 w-24 h-screen  md:shadow-md text-black md:bg-gray-50 md:w-32 
        ${click ? "bg-gray-100" : "bg-transparent"} ${
        click ? "shadow-lg" : "shadow-none"
      } `}
      style={{ zIndex: 1000 }}
    >
      {/* Logo and Menu Toggle */}
      <div>
        {!click ? (
          <button
            className="menuIcon font-bold text-2xl bg-white rounded-md p-2 cursor-pointer text-black md:hidden"
            onClick={() => setClick(true)}
          >
            <CiMenuKebab />
          </button>
        ) : (
          <button
            className="menuIcon font-bold text-2xl cursor-pointer text-black md:hidden"
            onClick={() => setClick(false)}
          >
            <RxCross1 />
          </button>
        )}
      </div>
      <div className="logo flex flex-row items-center justify-between">
        <Link
          href="/"
          onClick={() => setActive(-1)}
          className="text-lg cursor-pointer font-bold text-black hidden md:block"
        >
          <img src="C.webp" alt="logo" className="w-20 h-16" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="flex flex-col gap-3 justify-between h-full">
        <div className="menuList hidden md:flex flex-col gap-5">
          {menuList.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              onClick={() => setActive(index)}
              className={`relative group cursor-pointer flex gap-2 items-center text-black py-2 px-5 rounded-lg hover:bg-gray-100 hover:text-black transition duration-300 ease-in-out ${
                active === index
                  ? "active border-l-4 border-orange-500 text-orange-500"
                  : ""
              }`}
            >
              <div className="icon text-lg">{item.icon}</div>

              {/* Tooltip */}
              <span className="tooltip-text absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap p-2 bg-black text-white rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
        {/* Mobile Menu */}
        {click && (
          <div className="menuList flex flex-col gap-5 md:hidden">
            {menuList.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                onClick={() => {
                  setActive(index);
                  setClick(false); // Close menu on click
                }}
                className={`relative group cursor-pointer flex gap-2 items-center text-black py-2  rounded-lg hover:bg-gray-100 hover:text-black transition duration-300 ease-in-out ${
                  active === index
                    ? "active border-l-4 border-gray-500 text-gray-500"
                    : ""
                }`}
              >
                <div className="icon text-lg">{item.icon}</div>

                {/* Tooltip */}
                <span className="tooltip-text absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap p-2 bg-black text-white rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <div className="flex flex-col gap-3 justify-end h-full">
        <div className="buttonList hidden md:flex flex-col gap-5">
          {buttonList.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              onClick={() => setActive(index)}
              className={`relative group cursor-pointer flex gap-2 items-center text-black py-2 px-5 rounded-lg  hover:text-orange-500 transition duration-300 ease-in-out ${
                active === index
                  ? "active border-l-4 border-orange-500 text-orange-500"
                  : ""
              }`}
            >
              <div className="icon text-lg">{item.icon}</div>

              {/* Tooltip */}
              <span className="tooltip-text absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap p-2 bg-black text-white rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
        {/* Mobile Menu */}
        {click && (
          <div className="menuList flex flex-col gap-5 md:hidden">
            {menuList.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                onClick={() => {
                  setActive(index);
                  setClick(false); // Close menu on click
                }}
                className={`relative group cursor-pointer flex gap-2 items-center text-black py-2  rounded-lg hover:bg-gray-100 hover:text-black transition duration-300 ease-in-out ${
                  active === index
                    ? "active border-l-4 border-gray-500 text-gray-500"
                    : ""
                }`}
              >
                <div className="icon text-lg">{item.icon}</div>

                {/* Tooltip */}
                <span className="tooltip-text absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap p-2 bg-black text-white rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
