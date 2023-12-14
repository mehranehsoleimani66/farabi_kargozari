import Image from "next/image";

const Banner4 = () => {
  return (
    <div className=" relative border  flex-1 w-full h-[1000px] lg:h-[500px] ">
      <Image
        src="https://irfarabi.com/background.bb605fa6a82e10425188.png"
        fill
        alt="banner"
        className="lg:object-cover relative"
      />

      <div className="flex flex-col lg:flex lg:flex-row justify-between items-center   ">
        <div className=" flex  lg:w-1/2 absolute bottom-0  lg:left-1 lg:top-0 lg:px-32 ">
          <Image
            src="https://irfarabi.com/coin.bf8d5963c293469596ce.png"
            width={400}
            height={400}
            priority
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2  absolute right-1 top-1 py-32 lg:px-32 gap-10 text-right lg:items-end">
          <h1 className="flex flex-row-reverse text-center  text-white font-bold">
            <span className=" text-3xl lg:text-5xl text-[#d2b870] font-bold font-bIranZamin">
              شریک
            </span>
            <span className="text-3xl lg:text-5xl text-white font-bold font-bIranZamin">
              فارابی شوید
            </span>
          </h1>
          <p className="text-2xl pr-2 lg:text-3xl text-white font-bIranZamin">
            {" "}
            در فارابیز، ۱۵ درصد از درآمد فارابی سهم شماست!{" "}
          </p>
          <button className="border font-bIranZamin border-gray-400 bg-[#d2b870] px-1 py-2 w-40 rounded-md ">
            شروع کنید
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner4;
