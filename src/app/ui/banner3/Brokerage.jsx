import Chart from "../chart/Chart";
import Link from "next/link";
const Brokerage = () => {
  return (
    <main className="flex flex-col-reverse w-full h-[600px] lg:h-[600px] lg:flex lg:flex-row justify-between items-center lg:px-32 lg:py-28">
      <div
        className="flex  w-1/2 h-1/2  justify-center items-center  "
        suppressHydrationWarning={true}
      >
        <Chart suppressHydrationWarning={true} />
      </div>

      <div className="flex flex-col h-1/2   lg:flex-1 justify-center items-center text-center lg:items-end lg:text-end gap-8 pt-10 ">
        <h6 className="text-[color:var(--text)] font-black text-2xl lg:text-4xl font-bIranZamin  ">
          !یک گام جلوتر از شاخص بورس
        </h6>
        <p className="text-black font-bold font-bIranZamin  lg:text-xl">
          .سرمایه‌گذاری را به حرفه‌ای‌ها بسپارید و از افزایش داریی‌تان لذت ببرید
        </p>
        <div className="flex flex-col justify-center items-center lg:flex-row gap-8 font-bold">
          <Link
            href="/"
            className=" border  border-gray-300 text-green-600 font-bIranZamin lg:px-3 lg:py-3 rounded-md"
          >
            صندوق درآمد ثابت
          </Link>
          <Link
            href="/"
            className=" border  border-gray-300 text-green-600 lg:px-3 lg:py-3 font-bIranZamin rounded-md"
          >
            صندوق سهامی
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Brokerage;
