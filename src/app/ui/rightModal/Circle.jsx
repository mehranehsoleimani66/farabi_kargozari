import Image from "next/image";
// import RightModal from "./RightModal";

const Circle = () => {
  return (
    <main className=" w-16 h-16 rounded-full text-[color:var(--text)]  fixed bottom-1 right-2 border border-[color:var(--text)]  flex justify-center items-center  mr-3 mb-3 bg-white">
      <Image
        src="https://irfarabi.com/assets/images/icons/ic-user-plus.svg"
        width={40}
        height={40}
        alt=""
        className="text-xl text-[color:var(--text)]"
      />
    </main>
  );
};

export default Circle;
