import Image from "next/image";
import Link from "next/link";
const LastNews = () => {
  return (
    <div className="relative  w-full min-h-[200px] bg-[color:var(--bg)]  ">
      <Image
        src="https://irfarabi.com/back-news.f99176000b49ad14753b.png"
        fill
        className="object-cover"
        alt=""
        priority
      />
      <div className="flex justify-between   flex-row-reverse gap-5 items-center  px-32 py-28">
        <div className=" w-1/3  flex flex-col justify-start items-end gap-12">
          <h1 className="text-3xl font-bold text-white font-bIranZamin">
            اطلاعیه و اخبار فارابی
          </h1>
          <span className="text-white text-2xl  font-bIranZamin ">
            گزارش امروز بورس
          </span>
        </div>
        <div className="flex flex-col gap-10 justify-end  items-center w-2/3 min-h-[200px] ">
          <span className="text-white text-2xl font-bIranZamin ">
            {" "}
            آغاز معاملات شبانه‌روزی در کارگزاری فارابی
          </span>
          <div className="flex justify-around w-full  gap-5 items-center">
            <Link
              href="/"
              className=" text-white bg-[#054326] text-xl rounded font-bIranZamin py-2 px-2"
            >
              ادامه خبر
            </Link>
            <Link
              href="/"
              className=" text-white bg-[#054326] text-xl rounded py-2 px-2 font-bIranZamin"
            >
              ادامه خبر
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastNews;
