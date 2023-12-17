import Link from "next/link";
import Image from "next/image";

const LastNews = () => {
  return (
    <main className="relative flex w-full min-h-[200px] bg-[color:var(--bg)]  ">
      <Image
        src="https://irfarabi.com/back-news.f99176000b49ad14753b.png"
        fill
        className="object-cover"
        alt=""
        priority
      />
      <div className="flex-col md:w-full flex  justify-center  md:justify-between md:flex-row-reverse  items-center px-2 md:px-32 py-28">
        <div className="md:w-1/2  flex flex-col justify-center items-center  gap-12">
          <h1 className="text-3xl font-bold text-white font-bIranZamin text-right">
            !اطلاعیه و اخبار فارابی
          </h1>
          <span className="text-white text-lg md:text-2xl  md:text-right  font-bIranZamin ">
            گزارش امروز بورس
          </span>
          <Link
            href="/"
            className="flex justify-start   text-white bg-[#054326] w-24 text-xl rounded font-bIranZamin py-2 px-2"
          >
            ادامه خبر
          </Link>
        </div>
        <div className="md:w-1/2  flex flex-col justify-center items-center gap-20">
          <h1 className="text-3xl font-bold text-white font-bIranZamin md:text-right"></h1>
          <span className="text-white text-2xl md:text-right font-bIranZamin ">
            آغاز معاملات شبانه‌روزی در کارگزاری فارابی
          </span>
          <Link
            href="/"
            className="flex justify-start  text-center text-white bg-[#054326] w-24 text-xl rounded font-bIranZamin py-2 px-2"
          >
            ادامه خبر
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LastNews;
