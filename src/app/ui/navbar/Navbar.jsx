"use client";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";

const Navbar = () => {
  const [open, setOpen] = useState("");
  return (
    <div
      className=" flex z-50 w-full
      justify-between items-center uppercase  lg:px-40  h-12 sticky top-0 mt-4  bg-white "
    >
      <div className="flex text-white gap-3 justify-center w-1/2 lg:w-1/3   items-end ">
        <button className="border bg-green-700 text-sm px-5 rounded-md py-3  font-bold">
          ورود به فارابی زون
        </button>
        <button className="border border-gray-200 text-green-700 px-2 py-3 text-sm font-bold rounded-md">
          فارابیکسو
        </button>
      </div>

      <div className="flex justify-end items-center gap-7  ">
        <div
          className={`flex flex-col overflow-y-auto absolute top-10 right-1 w-full h-max-96 bg-white   gap-3 items-center text-red-700 text-sm font-bold flg:w-2/3 lg:static lg:flex lg:flex-row ${
            open ? "left-0" : "left-[-100%]"
          } `}
        >
          <NavLinks />
        </div>
        <Image
          src="https://irfarabi.com/assets/images/farabi-full-logo.svg"
          width={100}
          height={150}
          alt="img"
          priority
          className="hidden lg:flex"
        />
      </div>
      {/* mobile size */}

      <div className="flex lg:hidden z-50 p-5 bg-red-700  h-12 justify-between items-center">
        <Image
          src="https://irfarabi.com/assets/images/logo.svg"
          alt="logo"
          className="cursor-pointer"
          width={40}
          height={40}
        />

        <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
          <DehazeIcon />

          {/* <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
