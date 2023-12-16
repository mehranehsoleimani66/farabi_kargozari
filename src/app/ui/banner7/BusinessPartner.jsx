import Image from "next/image";

const BusinessPartner = () => {
  const images = [
    { id: 0, img: "https://irfarabi.com/assets/images/farabi.png" },
    { id: 1, img: "https://irfarabi.com/assets/images/bourse24-logo.png" },
    { id: 2, img: "https://irfarabi.com/assets/images/partners/soshyant.png" },
    { id: 3, img: "https://irfarabi.com/assets/images/jibimo-logo.webp" },
    { id: 4, img: "https://irfarabi.com/assets/images/100-logo.png" },
    {
      id: 5,
      img: "https://irfarabi.com/assets/images/partners/logos/logo-pinvest.png"
    },
    { id: 6, img: "https://irfarabi.com/assets/images/amoozin-logo.png" }
  ];
  return (
    <main className="flex-col gap-7 md:w-full flex md:flex-row-reverse justify-between items-center px-5  py-28 md:px-36">
      <div>
        <p className="text-[color:var(--text)] text-5xl font-bIranZamin font-black">
          شرکای تجاری ما
        </p>
      </div>
      <div className="flex flex-wrap gap-5 md:flex-row justify-between  md:gap-5  md:items-center">
        {images.map((item) => (
          <div
            key={item.id}
            className="flex flex-row justify-between gap-5 items-center "
          >
            <Image src={item.img} width={90} height={90} priority alt="" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default BusinessPartner;
