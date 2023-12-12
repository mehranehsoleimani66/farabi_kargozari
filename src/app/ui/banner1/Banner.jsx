import Image from "next/image";
import RightModal from "../rightModal/RightModal";

const Banner = () => {
  return (
    <div className=" relative flex-1 w-full mt-0 h-[500px]  ">
      <Image
        src="https://irfarabi.com/assets/images/irfarabi-home-banner2x.webp"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="flex gap-7 flex-col justify-center items-end absolute top-10 right-14  border-none px-52 py-52">
        <h1 className="font-bold text-3xl font-bIranZamin">
          رویا , تغییر , سرمایه گذاری
        </h1>
        <div className="flex gap-5">
          <button className="bg-transparent font-bIranZamin border border-gray-400 text-green-700 rounded-md text-base px-7 py-3">
            ثبت نام در بورس
          </button>
          <button className="bg-green-700 font-bIranZamin text-white text-base px-5 rounded-md py-3">
            ثبت نام غیر حضوری در بورس
          </button>
        </div>
        <RightModal />
      </div>
    </div>
  );
};

export default Banner;
