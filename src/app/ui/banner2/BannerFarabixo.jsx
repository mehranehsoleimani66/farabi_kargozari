import Image from "next/image";
import Link from "next/link";
import { LeftOutlined } from "@ant-design/icons";
const BannerFarabixo = () => {
  return (
    <div className="flex  flex-1 w-full h-[700px]  ">
      <div className="w-full   bg-branch  bg-fixed bg-no-repeat  bg-cover ">
        {/* <Image
          src=""
          alt="https://irfarabi.com/back-farabixo-3x.dff02d57966f9aa0ae66.jpg"
          fill
          className=""
        /> */}
        <div className="flex w-full h-full gap-10  bg-gradient-to-t  from-transparent to-[#066137] bg-opacity-20   justify-around items-start py-20   bg-center bg-cover">
          <div className="flex  justify-center items-center gap-5 ">
            <div className="flex items-center gap-1">
              <p className="text-xl text-white font-bIranZamin">
                {" "}
                فارابیکسو نکست{" "}
              </p>
              <Image
                src="https://irfarabi.com/assets/images/icons/ic-mobile-phone.svg"
                width={40}
                height={40}
                priority
                alt=""
              />
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xl text-white font-bIranZamin">
                {" "}
                فارابیسکو هلیوم
              </p>
              <Image
                src="https://irfarabi.com/assets/images/icons/ic-monitor.svg"
                width={40}
                height={40}
                priority
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col text-end gap-32 justify-between items-end">
            <div className="flex flex-col gap-2">
              <h1 className="font-black text-3xl font-bIranZamin tracking-wide text-white">
                سایت معاملاتی فارابیسکو
              </h1>
              <p className="font-medium font-bIranZamin text-lg text-white">
                تجربه معاملات سریع و آسان
              </p>
            </div>
            <div className="flex gap-5 font-bIranZamin cursor-pointer justify-between items-center py-3 px-3 bg-gray-50 box-border text-color[var(--text)] rounded-md border border-color[var(--text)]  ">
              <LeftOutlined />
              فارابیکسو
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerFarabixo;
