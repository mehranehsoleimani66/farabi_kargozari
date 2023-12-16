const CarBanner = () => {
  return (
    <main className="relative w-full flex flex-col md:flex md:flex-row bg-verticalPic bg-cover bg-no-repeat md:bg-horizintalPic md:flex-1  h-[800px] md:h-[500px] ">
      <div className="flex justify-center items-center gap-7 flex-col    border border-red-500 md:items-end absolute top-10 left-7  border-none md:px-24 md:py-40">
        <h4 className="font-extrabold font-bIranZamin text-3xl">
          {" "}
          خرید خودرو در بورس
        </h4>
        <h1>
          بدون قرعه کشی و با قیمت رقابتی خودروی خود را از طریق بورس کالای
          کارگزاری فارابی خریداری کنید
        </h1>
        <div className="flex flex-col  md:flex gap-5">
          <button className="bg-green-700 font-bIranZamin text-white text-base px-5 rounded-md py-3">
            دریافت کد بورس کالا
          </button>
          <button className="bg-transparent border border-gray-400  font-bIranZamin text-green-700 rounded-md text-base px-7 py-3">
            اطلاعات تکمیلی
          </button>
        </div>
      </div>
    </main>
  );
};

export default CarBanner;
