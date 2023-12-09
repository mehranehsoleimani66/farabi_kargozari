import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="text-2xl  bg-[#265841]">
      <div className="flex justify-center items-center w-full h-[400px] pg-green-200 px-32 py-32">
        {/* section1 */}
        <div className=" w-1/4 flex flex-col justify-start gap-5 items-end ">
          <span className="font-normal text-base leading-10 flex  justify-end items-end  text-[#b2c7be]">
            ارتباط با فارابی
          </span>
          <div className="flex flex-col justify-center items-end gap-5">
            {quickAccess4.map((item) => (
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
        {/* section2 */}
        <div className=" w-1/4 flex flex-col justify-start gap-5 items-end ">
          <span className="font-normal text-base leading-10 flex  justify-end items-end  text-[#b2c7be]">
            خدمات فارابی
          </span>
          <div className="flex flex-col justify-center items-end gap-5">
            {quickAccess3.map((item) => (
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
        {/* section2 */}
        <div className=" w-1/4 flex flex-col justify-start gap-5 items-end ">
          <span className="font-normal text-base leading-10 flex  justify-end items-end  text-[#b2c7be]">
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
            className="object-cover"
          />
          <div className="flex flex-col justify-center items-end gap-5">
            {quickAccess1.map((item) => (
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
      </div>
    </div>
  );
};

export default Footer;

const quickAccess1 = [
  { id: 0, title: "معرفی فارابی", href: "/" },
  { id: 1, title: "سوالات متداول", href: "/" },
  { id: 2, title: " شماره حساب های شرکت ", href: "/" }
];
const quickAccess2 = [
  { id: 0, title: " صندوق سهامی", href: "/" },
  { id: 1, title: "صندوق درآمد سابق ", href: "/" }
];
const quickAccess3 = [
  { id: 0, title: " صندوق سهامی", href: "/" },
  { id: 1, title: "صندوق درآمد سابق ", href: "/" }
];
const quickAccess4 = [
  { id: 0, title: " صندوق سهامی", href: "/" },
  { id: 1, title: "صندوق درآمد سابق ", href: "/" }
];
