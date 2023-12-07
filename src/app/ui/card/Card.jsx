import Image from "next/image";

const Card = () => {
  return (
    <div className="flex justify-around items-center gap-2 cursor-pointer px-40">
      <div className="relative flex flex-1 overflow-hidden bg-cover bg-no-repeat ">
        <Image
          src="https://irfarabi.com/assets/images/previews/preview-2.webp"
          alt=""
          width={600}
          height={600}
          className=" transition duration-300 ease-in-out hover:scale-110"
        />
        <div className="flex flex-col absolute z-10000 right-10 bottom-10 justify-between gap-5 items-end">
          <h4 className="text-2xl font-bold text-right text-white">
            فارابی چطور به موفقیت شما
            <br />
            در بورس کمک میکند؟
          </h4>
          <h2 className="text-white font-light">مشاهده خدمات ویژه فارابی</h2>
        </div>
      </div>
      <div className="relative flex flex-1 overflow-hidden bg-cover bg-no-repeat">
        <Image
          src="https://irfarabi.com/assets/images/previews/preview-1.webp"
          alt=""
          width={600}
          height={600}
          className=" transition duration-300 ease-in-out hover:scale-110"
        />
        <div className="flex flex-col absolute z-10000 right-10 bottom-10 justify-between gap-5 items-end">
          <h4 className="text-2xl font-bold text-right text-white">
            فارابی چطور به موفقیت شما
            <br />
            در بورس کمک میکند؟
          </h4>
          <h2 className="text-white font-light">مشاهده خدمات ویژه فارابی</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
