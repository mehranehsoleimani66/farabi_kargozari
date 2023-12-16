import Image from "next/image";

const Banner4 = () => {
  return (
    <main className=" relative border  flex-1 w-full h-[1000px] md:h-[500px] ">
      <Image
        src="https://irfarabi.com/background.bb605fa6a82e10425188.png"
        fill
        alt="banner"
        className="md:object-cover relative"
      />

      <div className="flex flex-col md:flex md:flex-row justify-between items-center   ">
        <div className=" flex  md:w-1/2 absolute bottom-0  md:left-1 md:top-0 md:px-32 ">
          <Image
            src="https://irfarabi.com/coin.bf8d5963c293469596ce.png"
            width={400}
            height={400}
            priority
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2  absolute right-1 top-1 py-32 md:px-32 gap-10 text-right md:items-end">
          <div className="flex flex-row-reverse text-center  text-white font-bold">
            <span className=" text-3xl md:text-5xl text-[#d2b870] font-bold font-bIranZamin">
              شریک
            </span>
            <span className="text-3xl md:text-5xl text-white font-bold font-bIranZamin">
              فارابی شوید
            </span>
          </div>
          <p className="text-2xl pr-2 md:text-3xl text-white font-bIranZamin">
            {" "}
            در فارابیز، ۱۵ درصد از درآمد فارابی سهم شماست!{" "}
          </p>
          <button className="border font-bIranZamin border-gray-400 bg-[#d2b870] px-1 py-2 w-40 rounded-md ">
            شروع کنید
          </button>
        </div>
      </div>
    </main>
  );
};

export default Banner4;
