import Image from "next/image";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Modal = () => {
  return (
    <div className="bg-[color:var(--bg)] w-60 h-60 rounded-md  hidden  z-50 flex-col gap-5  pr-3 pb-3 fixed right-0 ">
      <div className=" flex justify-end items-start text-white">
        <KeyboardArrowDownIcon />
      </div>

      <div className="flex flex-col pt-10 justify-center gap-5 items-center">
        <span className="text-white font-bIranZamin text-xl  ">
          this is a modal
        </span>
        <button className="bg-white px-4 py-2 mb-5  text-[color:var(--text)]">
          click me
        </button>
      </div>
    </div>
  );
};

// data-aos="fade-left"
// data-aos-duration="1000"
// data-aos-once="true"

export default Modal;
