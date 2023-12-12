import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div
      className=" flex z-50 w-full
justify-between items-center uppercase  px-40  h-12 sticky top-0 mt-4  bg-white "
    >
      <div className="flex text-white gap-3 justify-center w-1/3   items-end ">
        <button className="border bg-green-700 text-sm px-5 rounded-md py-3  font-bold">
          ورود به فارابی زون
        </button>
        <button className="border border-gray-200 text-green-700 px-2 py-3 text-sm font-bold rounded-md">
          فارابیکسو
        </button>
      </div>

      <div className="flex justify-end items-center gap-7 w-2/3 ">
        <div className="flex gap-3 items-center text-black from-neutral-50  text-sm font-bold">
          <NavLinks />
        </div>
        <Image
          src="https://irfarabi.com/assets/images/farabi-full-logo.svg"
          width={100}
          height={150}
          alt="img"
          priority
        />
      </div>
    </div>
  );
};

export default Navbar;
