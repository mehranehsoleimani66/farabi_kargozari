// "use client";

// import Link from "next/link";
// import Chart from "../chart/Chart";

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from "recharts";

// const data = [
//   {
//     name: "Sun",
//     visit: 4000,
//     click: 2400
//   },
//   {
//     name: "Mon",
//     visit: 3000,
//     click: 1398
//   },
//   {
//     name: "Tue",
//     visit: 2000,
//     click: 3800
//   },
//   {
//     name: "Wed",
//     visit: 2780,
//     click: 3908
//   },
//   {
//     name: "Thu",
//     visit: 1890,
//     click: 4800
//   },
//   {
//     name: "Fri",
//     visit: 2390,
//     click: 3800
//   },
//   {
//     name: "Sat",
//     visit: 3490,
//     click: 4300
//   }
// ];

// const Brokerage = () => {
//   return (
//     <div className="h-[450px] flex flex-col p-5 rounded-xl justify-center gap-3  ml-3  bg-[#182237]">
//       <h1 className="mb-5 font-extralight  text-[#b7bac1]">Weekly Recap</h1>{" "}
//       <ResponsiveContainer width="100%" height="90%">
//         <LineChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5
//           }}
//         >
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
//           <Legend />
//           <Line
//             type="monotone"
//             dataKey="visit"
//             stroke="#8884d8"
//             strokeDasharray="5 5"
//           />
//           <Line
//             type="monotone"
//             dataKey="click"
//             stroke="#82ca9d"
//             strokeDasharray="3 4 5 2"
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// <div className="w-full  flex justify-between items-start gap-16 h-[calc(100vh-9rem)] px-32 py-20 ">
//   <div className="flex flex-1">
//     <Chart />
//   </div>
//   <div className="flex flex-col flex-1 justify-center items-end text-end gap-8">
//     <h6 className="text-[#066137] font-black text-4xl  ">
//       !یک گام جلوتر از شاخص بورس
//     </h6>
//     <p className="text-black font-bold  text-xl">
//       .سرمایه‌گذاری را به حرفه‌ای‌ها بسپارید و از افزایش داریی‌تان لذت ببرید
//     </p>
//     <div className="flex gap-8 font-bold">
//       <Link
//         href="/"
//         className=" border border-gray-300 text-green-600 px-3 py-3 rounded-md"
//       >
//         صندوق درآمد ثابت
//       </Link>
//       <Link
//         href="/"
//         className=" border border-gray-300 text-green-600 px-3 py-3 rounded-md"
//       >
//         صندوق سهامی
//       </Link>
//     </div>
//   </div>
// </div>
//   );
// };

// export default Brokerage;

import Chart from "../chart/Chart";
import Link from "next/link";
const Brokerage = () => {
  return (
    <div className="relative  w-full h-[calc(100vh-9rem)] flex justify-between items-center ">
      <div className="flex w-1/2  justify-center">
        <Chart />
      </div>
      <div>
        <div className="flex flex-col   flex-1 justify-center items-end text-end gap-8  px-32 py-32">
          <h6 className="text-[#066137] font-black text-4xl  ">
            !یک گام جلوتر از شاخص بورس
          </h6>
          <p className="text-black font-bold  text-xl">
            .سرمایه‌گذاری را به حرفه‌ای‌ها بسپارید و از افزایش داریی‌تان لذت
            ببرید
          </p>
          <div className="flex gap-8 font-bold">
            <Link
              href="/"
              className=" border border-gray-300 text-green-600 px-3 py-3 rounded-md"
            >
              صندوق درآمد ثابت
            </Link>
            <Link
              href="/"
              className=" border border-gray-300 text-green-600 px-3 py-3 rounded-md"
            >
              صندوق سهامی
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
