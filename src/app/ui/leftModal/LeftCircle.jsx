import SupportAgentIcon from "@mui/icons-material/SupportAgent";
const LeftCircle = () => {
  return (
    <div className="  z-50 fixed left-1 bottom-2 pl-3 pb-3">
      <div className="w-16 h-16 rounded-full text-white  border border-white flex justify-center items-center bg-[color:var(--bg)]">
        <SupportAgentIcon className="w-10 h-10 " />
      </div>
    </div>
  );
};

export default LeftCircle;
