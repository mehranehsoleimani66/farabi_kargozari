import Link from "next/link";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Modal2 = () => {
  return (
    <div
      data-aos="fadeInUp"
      data-aos-easing="ease"
      data-aos-duration="1000"
      data-aos-offset="700"
      className="bg-[color:var(--bgLight)] w-[230px] h-[210px] rounded-2xl  flex   flex-col gap-5   fixed bottom-1 duration-1000  right-2 mr-3 mb-3"
    >
      <div className=" pl-[200px] pt-[5px] text-white">
        <KeyboardArrowDownIcon />
      </div>

      <div className="flex flex-col pt-4 justify-between gap-10 items-center py-2 px-3">
        <span className="text-white font-bIranZamin text-xs text-right  ">
          ثبت‌نام غیرحضوری و همزمان سجام و در کمتر از ۵ دقیقه
        </span>
        <Link
          href="/"
          className="bg-white px-1  rounded-2xl max-w-[225px] max-height[140px] "
        >
          <span className="leading-10 px-3 text-[14px] font-bold text-[color:var(--textLight)]">
            ثبت نام غیرحضوری در بورس
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Modal2;
