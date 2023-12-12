import Image from "next/image";
import Link from "next/link";
import Section2 from "./Section2";
const Footer = () => {
  return (
    <div className="text-2xl h-[300px] ">
      <div className="flex justify-center items-center w-full  bg-[#265841] px-32 py-24">
        {/* section1 */}
        <div className=" w-1/4 flex flex-col justify-start gap-5 items-end ">
          <span className="font-normal text-base leading-10 flex  justify-end items-end  text-[#b2c7be]">
            ارتباط با فارابی
          </span>
          <div className="flex flex-col justify-center items-end gap-5">
            {quickAccess4.map((item) => (
              <div
                key={item.id}
                className="text-[clamp(12px,1.5vw,16px)] text-[#93b2a4] tracking-normal"
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
        {/* section2 */}
        <div className=" w-1/4 flex flex-col justify-start gap-5 items-end ">
          <span className="font-normal text-base leading-10 flex  justify-end items-end  text-[#b2c7be]">
            خدمات فارابی
          </span>
          <div className="flex flex-col justify-center items-end gap-5">
            {quickAccess3.map((item) => (
              <div
                key={item.id}
                className="text-[clamp(12px,1.5vw,16px)] text-[#93b2a4] tracking-normal"
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
        {/* section2 */}
        <div className=" w-1/4 flex flex-col justify-start gap-5 items-end ">
          <span className="font-normal font-bIranZamin text-base leading-10 flex  justify-end items-end  text-[color:var(--textSoft)]">
            راهکارهای سرمایه گذاری
          </span>
          <div className="flex flex-col justify-center items-end gap-5">
            {quickAccess2.map((item) => (
              <Link
                href="/"
                key={item.id}
                className="text-[clamp(12px,1.5vw,16px)] text-[#93b2a4] tracking-normal"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        {/* section3 */}
        <div className=" w-1/4 flex flex-col justify-start gap-5 items-end ">
          <Image
            src="https://irfarabi.com/assets/images/full-logo-2x.webp"
            height={200}
            width={200}
            alt=""
            className="object-cover"
          />
          <div className="flex flex-col justify-center items-end gap-5">
            {quickAccess1.map((item) => (
              <div
                key={item.id}
                className="text-[clamp(12px,1.5vw,16px)] text-[#93b2a4] tracking-normal"
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Section2 />
    </div>
  );
};

export default Footer;

const quickAccess1 = [
  { id: 0, title: "معرفی فارابی" },
  { id: 1, title: "سوالات متداول" },
  { id: 2, title: " شماره حساب های شرکت " }
];
const quickAccess2 = [
  { id: 0, title: " صندوق سهامی" },
  { id: 1, title: "صندوق درآمد سابق " }
];
const quickAccess3 = [
  { id: 0, title: " صندوق سهامی" },
  { id: 1, title: "صندوق درآمد سابق " }
];
const quickAccess4 = [
  { id: 0, title: " صندوق سهامی" },
  { id: 1, title: "صندوق درآمد سابق " }
];
