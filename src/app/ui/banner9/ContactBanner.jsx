import Image from "next/image";

const ContactBanner = () => {
  return (
    <div className="flex justify-between items-center w-full h-[200px] py-32 px-32 ">
      <div className="flex w-1/2 justify-center items-start relative">
        <Image
          src="https://irfarabi.com/ic-contact-gray.3cde424c26c7a4bfe7a3.svg"
          width={50}
          height={50}
          className="object-contain"
          priority
          alt=""
        />
        <div className="absolute flex flex-col justify-start items-start gap-2 ">
          <span className="text-3xl font-bIranZamin text-[color:var(--text)] font-black">
            1561
          </span>
          <span className="font-normal font-bIranZamin">
            Support@irfarabi.com
          </span>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-start">
        <Image
          src="https://irfarabi.com/assets/images/icons/ic-contact.svg"
          width={200}
          height={200}
          priority
          alt=""
        />
      </div>
    </div>
  );
};

export default ContactBanner;
