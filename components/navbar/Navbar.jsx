"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

import { MdOutlineMenu } from "react-icons/md";
import Image from "next/image";

const Navbar = () => {
  const { theme, setTheme } = useTheme("light");

  const toggleTheme = () => {
    // setTheme(theme === "light" ? "dark" : "light");
    // You can add logic to change the theme here
  };

  return (
    <nav className="w-full flex items-center justify-between flex-wrap  p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image
          className="h-16 w-16 mr-2"
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75"
          width={"100"}
          height={"100"}
          alt="Logo"
        />
      </div>

      <div className="block lg:hidden">
        {/* Mobile menu button */}

        <button className="flex items-center px-3 py-2 border rounded text-2xl border-gray-400 hover:text-white hover:border-white">
          <MdOutlineMenu />
        </button>
      </div>

      <div className="w-full hidden lg:flex lg:items-center  lg:w-auto">
        <div className="text-sm lg:flex-grow justify-center items-center">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 font-bold	text-sky-400 text-lg mr-4"
          >
            MakeMyWeb.
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 font-bold	text-sky-400 text-lg mr-4"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 font-bold	text-sky-400 text-lg mr-4"
          >
            Company
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 font-bold	text-sky-400 text-lg"
          >
            Blogs
          </a>
          <button
            onClick={toggleTheme}
            className="bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2 text-2xl"
          >
            {theme === "light" ? (
              <MdOutlineLightMode color="black" />
            ) : (
              <MdDarkMode color="black" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
