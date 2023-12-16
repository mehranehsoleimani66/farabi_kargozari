import Image from "next/image";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const BannerFarabixo = () => {
  return (
    <main className="lg:flex  lg:flex-1 w-full bg-no-repeat  bg-branch  bg-cover bg-red-700 h-[600px]  ">
      <div className="flex-col lg:flex lg:flex-row lg:w-full  lg:gap-10  bg-gradient-to-t  from-transparent to-[#066137] bg-opacity-20   justify-around items-start lg:py-20   ">
        <div className="absolute left-1/3  bottom-10 pb-5  lg:static flex-col lg:flex  justify-center items-center gap-5 ">
          <div className="flex items-center gap-1">
            <p className="lg:text-xl text-white font-bIranZamin">
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
            <p className="lg:text-xl text-white font-bIranZamin">
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
        <div className="flex flex-col text-center pt-10 lg:text-end gap-60 justify-between items-center lg:items-end">
          <div className="flex flex-col gap-2">
            <h1 className="font-black lg:text-3xl text-xl font-bIranZamin tracking-wide text-white">
              سایت معاملاتی فارابیسکو
            </h1>
            <p className="font-medium font-bIranZamin lg:text-lg  text-white">
              تجربه معاملات سریع و آسان
            </p>
          </div>
          <div className="flex gap-5 font-bIranZamin cursor-pointer  justify-between items-center py-3 px-3 bg-gray-50 box-border text-color[var(--text)] rounded-md border border-color[var(--text)]  ">
            <KeyboardArrowLeftIcon />
            فارابیکسو
          </div>
        </div>
      </div>
    </main>
  );
};

export default BannerFarabixo;
