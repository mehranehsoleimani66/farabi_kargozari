import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
const Section2 = () => {
  return (
    <div className=" lg:w-full flex-col lg:flex-row bg-[#1b3e2e] flex justify-between items-center py-5 lg:px-32 ">
      <div className="flex flex-1 justify-start item-start ">
        {socialIcons.map((item) => (
          <div
            key={item.id}
            className="relative flex gap-5 hover:bg-[#46735f] hover:bg-opacity-50 p-1
             hover:rounded-full "
          >
            <div className=" w-8 h-8 rounded-full box-border flex justify-center items-center cursor-pointer text-[color:var(--textSoft)]  ">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col-reverse  lg:flex-1 lg:flex-row  justify-center items-center lg:justify-end item-end gap-5 ">
        <p className="text-[#739385] font-bIranZamin not-italic leading-10 tracking-normal text-sm font-normal">
          | تماس: 1561
        </p>
        <p className=" text-[#739385] not-italic font-bIranZamin leading-10 tracking-normal text-sm font-normal">
          © تمامی حقوق برای کارگزاری فارابی محفوظ است
        </p>
      </div>
    </div>
  );
};

export default Section2;

const socialIcons = [
  { id: 0, icon: <InstagramIcon /> },
  { id: 1, icon: <TelegramIcon /> },
  { id: 2, icon: <LinkedInIcon /> },
  { id: 3, icon: <TwitterIcon /> },
  { id: 4, icon: <FacebookIcon /> }
];
