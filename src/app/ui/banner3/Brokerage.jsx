import Chart from "../chart/Chart";
import Link from "next/link";
const Brokerage = () => {
  return (
    <div className=" w-full h-[400px] flex justify-between items-center px-32 py-28">
      <div className="flex w-1/2  justify-center">
        <Chart />
      </div>

      <div className="flex flex-col   flex-1 justify-center items-end text-end gap-8  ">
        <h6 className="text-[color:var(--text)] font-black text-4xl font-bIranZamin  ">
          !یک گام جلوتر از شاخص بورس
        </h6>
        <p className="text-black font-bold font-bIranZamin  text-xl">
          .سرمایه‌گذاری را به حرفه‌ای‌ها بسپارید و از افزایش داریی‌تان لذت ببرید
        </p>
        <div className="flex gap-8 font-bold">
          <Link
            href="/"
            className=" border border-gray-300 text-green-600 font-bIranZamin px-3 py-3 rounded-md"
          >
            صندوق درآمد ثابت
          </Link>
          <Link
            href="/"
            className=" border border-gray-300 text-green-600 px-3 py-3 font-bIranZamin rounded-md"
          >
            صندوق سهامی
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
