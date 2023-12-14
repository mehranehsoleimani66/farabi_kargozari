import Image from "next/image";

const CarBanner = () => {
  return (
    <div className="relative w-full flex flex-col lg:flex lg:flex-row bg-verticalPic bg-cover bg-no-repeat lg:bg-horizintalPic lg:flex-1  h-[800px] lg:h-[500px] ">
      {/* <Image
        src="https://irfarabi.com/nexo.2f9b5f28f3f51db1a5ac.png"
        alt=""
        fill
        className=""
        priority
      /> */}
      <div className="flex justify-center items-center gap-7 flex-col    border border-red-500 lg:items-end absolute top-10 left-7  border-none lg:px-24 lg:py-40">
        <h4 className="font-extrabold font-bIranZamin text-3xl">
          {" "}
          خرید خودرو در بورس
        </h4>
        <h1>
          بدون قرعه کشی و با قیمت رقابتی خودروی خود را از طریق بورس کالای
          کارگزاری فارابی خریداری کنید
        </h1>
        <div className="flex flex-col  lg:flex gap-5">
          <button className="bg-green-700 font-bIranZamin text-white text-base px-5 rounded-md py-3">
            دریافت کد بورس کالا
          </button>
          <button className="bg-transparent border border-gray-400  font-bIranZamin text-green-700 rounded-md text-base px-7 py-3">
            اطلاعات تکمیلی
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarBanner;
