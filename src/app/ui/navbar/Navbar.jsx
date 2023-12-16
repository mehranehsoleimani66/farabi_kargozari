"use client";

import Image from "next/image";
import NavLinks from "./NavLinks";
import { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";

const Navbar = () => {
  const [open, setOpen] = useState("");
  return (
    <nav
      className=" flex z-50 md:w-full
      justify-between items-center uppercase  md:px-40  h-12 sticky top-0 mt-4  bg-white "
    >
      <div className="flex text-white gap-3 justify-center w-1/2 md:w-1/3   items-end ">
        <button className="border bg-green-700 text-xs md:text-sm px-1 py-1 md:px-5 rounded-md md:py-3  font-bold">
          ورود به فارابی زون
        </button>
        <button className="border border-gray-200 text-xs text-green-700 px-1 py-1 md:px-2 md:py-3 md:text-sm font-bold rounded-md">
          فارابیکسو
        </button>
      </div>
      <div className="hidden md:flex justify-end items-center gap-7 md:gap-2 w-2/3 ">
        <NavLinks />

        <Image
          src="https://irfarabi.com/assets/images/farabi-full-logo.svg"
          width={100}
          height={150}
          alt="img"
          priority
          className="hidden md:flex"
        />
      </div>
      {/* mobile size */}

      <div
        className="flex md:hidden  sticky top-0 right-0 justify-center items-center h-12 "
        onClick={() => setOpen(!open)}
      >
        <Image
          src="https://irfarabi.com/assets/images/logo.svg"
          alt="logo"
          className="cursor-pointer"
          width={40}
          height={40}
        />
        {open ? (
          <div className=" ">
            <div className="flex flex-col  md:hidden absolute top-0 right-1 w-screen  h-screen justify-start items-center bg-white z-50 ">
              <Image
                src="https://irfarabi.com/assets/images/farabi-full-logo.svg"
                width={70}
                height={70}
                alt="img"
                priority
                className=""
              />
              <div className="absolute top-0 right-0 hover:text-[color:var(--softtext)]">
                <ClearIcon />
              </div>

              <NavLinks />
            </div>
          </div>
        ) : (
          <DehazeIcon />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
