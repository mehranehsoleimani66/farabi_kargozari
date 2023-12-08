import Image from "next/image";

const Banner4 = () => {
  return (
    <div className="relative flex-1 w-full h-[calc(100vh-9rem)] ">
      <Image
        src="https://irfarabi.com/background.bb605fa6a82e10425188.png"
        fill
        alt="banner"
        className="object-cover relative"
      />

      <div className="flex justify-between items-center  ">
        <div className="flex w-1/2 absolute left-1 top-0 px-32 ">
          <Image
            src="https://irfarabi.com/coin.bf8d5963c293469596ce.png"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col w-1/2  absolute right-1 top-1 py-32 px-32 gap-10 text-right items-end">
          <h1 className="text-5xl text-white font-bold">
            <span className="text-5xl text-[#d2b870] font-bold"> شریک </span>
            فارابی شوید
          </h1>
          <p className="text-3xl text-white">
            {" "}
            در فارابیز، ۱۵ درصد از درآمد فارابی سهم شماست!{" "}
          </p>
          <button className="border border-gray-400 bg-[#d2b870] px-1 py-2 w-40 rounded-md ">
            شروع کنید
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner4;
