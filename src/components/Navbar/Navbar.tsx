"use client";

import { menuList } from "@/utils/actionList";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [active, setActive] = useState(-1);
  return (
    <div
      className="navbar-container flex flex-col gap-5  md:justify-between  md:px-32 py-10  md:py-5 md:flex-row fixed top-0 w-full h-28 md:w-full md:h-[10vh]  md:bg-gray-50 bg-gray-100 md:text-black"
      style={{ zIndex: 1000, position: "fixed" }}
    >
      <div className="logo display-none  flex flex-row gap-5 justify-between   px-4">
        {/* <Image src="/logo.png" alt="logo" width={50} height={50} /> */}
        <Link
          href="/"
          onClick={() => setActive(-1)}
          className="text-lg cursor-pointer   text-black md:text-black py-2 px-5  "
        >
          Charan Portfolio
        </Link>
        {!click ? (
          <Link
            href="/"
            className="menuIcon  font-bold text-2xl cursor-pointer text-black-500 py-2 px-5   md:hidden"
            onClick={() => setClick(true)}
          >
            <CiMenuKebab />{" "}
          </Link>
        ) : (
          <Link
            href="/"
            className="menuIcon  font-bold text-2xl cursor-pointer  text-black  py-2 px-5   md:hidden"
            onClick={() => setClick(false)}
          >
            <RxCross1 />{" "}
          </Link>
        )}
      </div>
      <div className="menuList list-none flex flex-col h-50 justify-evenly w-100 items-center py-5  md:flex md:flex-row md:block md:flex-row gap-0.5 hidden  ">
        {menuList.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => setActive(index)}
            className={`cursor-pointer flex gap-2   items-center   text-black md:text-black  py-2 px-5 rounded-lg hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300 ease-in-out ${
              active === index
                ? "active  md:border-b-2 md:border-b-orange-500 md:shadow-black md:text-orange-500"
                : ""
            }`}
          >
            <div className="icon text-lg  ">{item.icon}</div>
            <div className="menuName ">{item.name}</div>
          </Link>
        ))}
      </div>

      {/* mobile view */}

      {click && (
        <div
          className="menuList list-none flex flex-col h-50 bg-gray-100  w-full items-center mt-0 py-10   md:flex md:flex-row md:block md:flex-row gap-16  "
          onClick={() => setClick(false)}
        >
          {menuList.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              onClick={() => setActive(index)}
              className={`cursor-pointer flex gap-2   items-center   text-black py-2 px-5 rounded-lg hover:bg-black hover:text-white hover:border-black-500 transition duration-300 ease-in-out ${
                active === index
                  ? "active border-b-2 border-b-black shadow-black text-black"
                  : ""
              }`}
            >
              <div className="icon text-lg  ">{item.icon}</div>
              <div className="menuName  md:hidden md:hover:block">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
