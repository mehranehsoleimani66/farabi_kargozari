import Image from "next/image";
import Link from "next/link";
import { LeftOutlined } from "@ant-design/icons";
const BannerFarabixo = () => {
  return (
    <div className="relative flex-1 w-full h-[calc(100vh-9rem)] ">
      <div className="">
        <Image
          src="https://irfarabi.com/back-farabixo-3x.dff02d57966f9aa0ae66.jpg"
          alt=""
          fill
          className=" t-0 b-0 fixed"
        />
      </div>

      <div
        className="flex w-full h-full gap-10  absolute justify-around items-start py-16 bg-gradient-to-t  from-transparent via-[#066137] to-[#066137] sm:from-transparent sm:to-[#066137]  bg-center bg-cover
"
      >
        <div className="flex  justify-center items-center gap-5">
          <div className="flex items-center gap-1">
            <p className="text-xl text-white"> فارابیکسو نکست </p>
            <Image
              src="https://irfarabi.com/assets/images/icons/ic-mobile-phone.svg"
              width={40}
              height={40}
            />
          </div>
          <div className="flex items-center gap-1">
            <p className="text-xl text-white"> فارابیسکو هلیوم</p>
            <Image
              src="https://irfarabi.com/assets/images/icons/ic-monitor.svg"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="flex flex-col text-end gap-32 justify-between items-end">
          <div className="flex flex-col gap-2">
            <h1 className="font-black text-3xl  tracking-wide text-white">
              سایت معاملاتی فارابیسکو
            </h1>
            <p className="font-medium text-lg text-white">
              تجربه معاملات سریع و آسان
            </p>
          </div>
          <div className="flex gap-5 cursor-pointer justify-between items-center py-3 px-3 bg-gray-50 box-border text-[#066137] rounded-md border border-[#066137]  ">
            <LeftOutlined />
            فارابیکسو
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerFarabixo;
