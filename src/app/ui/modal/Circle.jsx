import Image from "next/image";

const Circle = () => {
  return (
    <div className=" w-16 h-16 rounded-full text-[color:var(--text)]  border border-[color:var(--text)]  flex justify-center items-center fixed bottom-0 right-0 bg-white">
      <Image
        src="https://irfarabi.com/assets/images/icons/ic-user-plus.svg"
        width={50}
        height={50}
        className="text-xl text-[color:var(--text)]"
      />
    </div>
  );
};

export default Circle;
