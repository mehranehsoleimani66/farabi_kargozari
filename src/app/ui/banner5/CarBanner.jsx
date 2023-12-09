import Image from "next/image";

const CarBanner = () => {
  return (
    <div className="relative flex-1 w-full h-[calc(100vh-9rem)] ">
      <Image
        src="https://irfarabi.com/nexo.2f9b5f28f3f51db1a5ac.png"
        alt=""
        fill
        className="object-cover"
      />
      <div className="flex gap-7 flex-col justify-center  border border-red-500 items-end absolute top-10 left-7  border-none px-24 py-40">
        <h4 className="font-extrabold  text-3xl"> خرید خودرو در بورس</h4>
        <h1>
          بدون قرعه کشی و با قیمت رقابتی خودروی خود را از طریق بورس کالای
          کارگزاری فارابی خریداری کنید
        </h1>
        <div className="flex gap-5">
          <button className="bg-green-700 text-white text-base px-5 rounded-md py-3">
            دریافت کد بورس کالا
          </button>
          <button className="bg-transparent border border-gray-400 text-green-700 rounded-md text-base px-7 py-3">
            اطلاعات تکمیلی
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarBanner;
