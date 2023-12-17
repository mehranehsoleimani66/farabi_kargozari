import Link from "next/link";
import Chart from "../chart/Chart";

const Brokerage = () => {
  return (
    <main className="flex flex-col-reverse w-full h-[600px] md:h-[600px] md:flex md:flex-row justify-between items-center md:px-32 md:py-28">
      <div
        className="flex  w-1/2 h-1/2  justify-center items-center  "
        suppressHydrationWarning={true}
      >
        <Chart suppressHydrationWarning={true} />
      </div>

      <div className="flex flex-col h-1/2   md:flex-1 justify-center items-center text-center md:items-end md:text-end gap-8 pt-10 ">
        <h6 className="text-[color:var(--text)] font-black text-2xl md:text-4xl font-bIranZamin  ">
          !یک گام جلوتر از شاخص بورس
        </h6>
        <p className="text-black font-bold font-bIranZamin  md:text-xl">
          .سرمایه‌گذاری را به حرفه‌ای‌ها بسپارید و از افزایش داریی‌تان لذت ببرید
        </p>
        <div className="flex flex-col justify-center items-center md:flex-row gap-8 font-bold">
          <Link
            href="/"
            className=" border  border-gray-300 text-green-600 font-bIranZamin md:px-3 md:py-3 rounded-md"
          >
            صندوق درآمد ثابت
          </Link>
          <Link
            href="/"
            className=" border  border-gray-300 text-green-600 md:px-3 md:py-3 font-bIranZamin rounded-md"
          >
            صندوق سهامی
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Brokerage;
