import Image from "next/image";

const BusinessPartner = () => {
  return (
    <div className="w-full flex flex-row-reverse justify-between items-center   py-28 px-36">
      <div>
        <p className="text-[color:var(--text)] text-5xl font-bIranZamin font-black">
          شرکای تجاری ما
        </p>
      </div>
      <div className=" flex justify-between gap-5 items-center">
        <Image
          src="https://irfarabi.com/assets/images/partners/logos/logo-pinvest.png"
          width={100}
          height={100}
          priority
          alt=""
        />
        <Image
          src="https://irfarabi.com/assets/images/amoozin-logo.png"
          width={100}
          height={100}
          priority
          alt=""
        />
        <Image
          src="https://irfarabi.com/assets/images/100-logo.png"
          width={100}
          height={100}
          priority
          alt=""
        />
        <Image
          src="https://irfarabi.com/assets/images/jibimo-logo.webp"
          width={100}
          height={100}
          priority
          alt=""
        />
        <Image
          src="https://irfarabi.com/assets/images/partners/soshyant.png"
          width={100}
          height={100}
          priority
          alt=""
        />
        <Image
          src="https://irfarabi.com/assets/images/bourse24-logo.png"
          width={100}
          height={100}
          priority
        />
        <Image
          src="https://irfarabi.com/assets/images/farabi.png"
          width={100}
          height={100}
          priority
        />
      </div>
    </div>
  );
};

export default BusinessPartner;
