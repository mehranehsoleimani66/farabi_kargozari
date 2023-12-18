import Image from "next/image";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const BannerFarabixo = () => {
  return (
    <main className="lg:flex  md:flex-1 w-full  bg-red-700  ">
      <div className="bg-branch bg-no-repeat md:w-full bg-fixed bg-cover">
        <div className="flex-col md:flex md:flex-row md:w-full  md:gap-10  bg-gradient-to-t  from-transparent to-[#066137] bg-opacity-20   justify-around items-start md:py-20   ">
          <div className="absolute left-1/3  md:bottom-10 md:pb-5 pt-40 md:static flex-col md:flex  justify-center items-center gap-5 ">
            <div className="flex items-center gap-1">
              <p className="md:text-xl text-white font-bIranZamin">
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
              <p className="md:text-xl text-white font-bIranZamin">
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
          <div className="flex flex-col text-center pt-10 md:text-end gap-60 justify-between items-center md:items-end">
            <div className="flex flex-col gap-2">
              <h1 className="font-black md:text-3xl text-xl font-bIranZamin tracking-wide text-white">
                سایت معاملاتی فارابیسکو
              </h1>
              <p className="font-medium font-bIranZamin md:text-lg  text-white">
                تجربه معاملات سریع و آسان
              </p>
            </div>
            <div className="flex gap-5 font-bIranZamin cursor-pointer  justify-between items-center py-3 px-3 bg-gray-50 box-border text-color[var(--text)] rounded-md border border-color[var(--text)]  ">
              <KeyboardArrowLeftIcon />
              فارابیکسو
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BannerFarabixo;
