import Image from "next/image";

const Banner = () => {
  return (
    <main className=" relative flex md:flex-1 md:w-full mt-0 h-[500px]  ">
      <Image
        src="https://irfarabi.com/assets/images/irfarabi-home-banner2x.webp"
        alt=""
        fill
        className="md:object-cover "
        priority
      />
      <div className="flex md:gap-20 flex-col  justify-between pl-5 gap-[365px] md:justify-center items-end absolute top-10 right-14  border-none md:px-52 md:py-28">
        <h1 className="font-bold text-3xl font-bIranZamin">
          رویا , تغییر , سرمایه گذاری
        </h1>
        <div className="flex  gap-5 w-full">
          <button className="bg-transparent font-bIranZamin border border-gray-400 text-green-700 rounded-md text-base md:px-7 md:py-3">
            ثبت نام در بورس
          </button>
          <button className="bg-green-700 font-bIranZamin text-white text-base md:px-5 rounded-md md:py-3">
            ثبت نام غیر حضوری در بورس
          </button>
        </div>
      </div>
    </main>
  );
};

export default Banner;
