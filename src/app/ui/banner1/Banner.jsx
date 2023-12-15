import Image from "next/image";

const Banner = () => {
  return (
    <main className=" relative flex lg:flex-1 lg:w-full mt-0 h-[500px]  ">
      <Image
        src="https://irfarabi.com/assets/images/irfarabi-home-banner2x.webp"
        alt=""
        fill
        className="lg:object-cover  "
        priority
      />
      <div className="flex lg:gap-7 flex-col justify-between gap-96 lg:justify-center items-end absolute top-10 right-14  border-none lg:px-52 lg:py-52">
        <h1 className="font-bold text-3xl font-bIranZamin">
          رویا , تغییر , سرمایه گذاری
        </h1>
        <div className="flex  gap-5 w-full">
          <button className="bg-transparent font-bIranZamin border border-gray-400 text-green-700 rounded-md text-base lg:px-7 lg:py-3">
            ثبت نام در بورس
          </button>
          <button className="bg-green-700 font-bIranZamin text-white text-base lg:px-5 rounded-md lg:py-3">
            ثبت نام غیر حضوری در بورس
          </button>
        </div>
      </div>
    </main>
  );
};

export default Banner;
