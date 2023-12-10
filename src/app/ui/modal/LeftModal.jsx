import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Image from "next/image";
const LeftModal = () => {
  return (
    <div className=" z-50 fixed left-0 bottom-0 pl-3 pb-3">
      {/* //circlebutton */}
      <div className="w-16 h-16 rounded-full text-white  border border-white flex justify-center items-center bg-[color:var(--bg)]">
        <SupportAgentIcon className="w-10 h-10 " />
      </div>
    </div>
  );
};
export default LeftModal;
