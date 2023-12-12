import Image from "next/image";
const Describe = () => {
  const flashCards = [
    {
      id: 0,
      image: "https://irfarabi.com/assets/images/icons/ic-medal.svg",
      title: "کارگزاری برتر",
      desc: "1397"
    },
    {
      id: 1,
      image: "https://irfarabi.com/assets/images/icons/ic-web.svg",
      title: "کارگزاری برتر",
      desc: "1397 در سال ",
      url: "/"
    },
    {
      id: 2,
      image: "https://irfarabi.com/assets/images/icons/ic-pin.svg",
      title: "+60",
      desc: "شعبه در سراسر کشور",
      url: "/"
    },
    {
      id: 3,
      image: "https://irfarabi.com/assets/images/icons/ic-office.svg",
      title: "+100000 ",
      desc: "میلیارد ریال دارایی تحت مدیریت",
      url: "/"
    },
    {
      id: 4,
      image: "https://irfarabi.com/assets/images/icons/ic-fund.svg",
      title: "8 ",
      desc: "صندوق سرمایه گذاری",
      url: "/"
    }
  ];
  return (
    <div className="w-full flex flex-col justify-around items-center gap-5 h-[600px] bg-gradient-to-t from-gray-200 p ">
      <p className=" font-bIranZamin text-[color:var(--text)] text-5xl font-black mt-40">
        فارابی در یک نگاه
      </p>

      <div className="w-full flex  items-center text-center justify-center gap-10 px-32 py-28">
        {flashCards.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-br-3xl bg-gradient-to-t from-white w-52 h-72 justify-around items-center"
          >
            <div className="relative">
              <Image
                src={item.image}
                width={50}
                height={50}
                className=""
                priority
              />
            </div>

            <div className="flex flex-col gap-3 py-4 justify-start text-center items-center">
              <h2 className="font-bold font-bIranZamin"> {item.title}</h2>
              <span className="text-gray-400 font-bIranZamin">
                {" "}
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Describe;
