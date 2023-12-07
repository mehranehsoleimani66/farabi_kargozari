import FlashCards from "../flashCards/FlashCards";

const Describe = () => {
  return (
    <div className="w-full  flex gap-10 h-[calc(100vh-9rem)] bg-gradient-to-t from-gray-100 px-28 py-32">
      <div className="flex  gap-2 ">
        <FlashCards />
      </div>
      <div className="flex flex-col  w-1/3 gap-5 justify-center  text-right ">
        <p className="rtl font-bold text-2xl">فارابی در یک نگاه</p>
        <p className="">
          اندیشه تبدیل شدن به یک کارگزاری در تراز جهانی، خط مشی فعالیت‌های
          فارابی است
        </p>
      </div>
    </div>
  );
};

export default Describe;
