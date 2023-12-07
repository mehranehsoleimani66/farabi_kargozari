import Link from "next/link";
import Image from "next/image";
const FlashCards = () => {
  const flashCards = [
    {
      id: 1,
      image: "https://irfarabi.com/assets/images/icons/ic-medal.svg",
      title: "کارگزاری برتر",
      desc: "1397"
    },
    {
      id: 2,
      image: "https://irfarabi.com/assets/images/icons/ic-web.svg",
      title: "کارگزاری برتر",
      desc: "1397 در سال ",
      url: "/"
    },
    {
      id: 3,
      image: "https://irfarabi.com/assets/images/icons/ic-pin.svg",
      title: "+60",
      desc: "شعبه در سراسر کشور",
      url: "/"
    },
    {
      id: 4,
      image: "https://irfarabi.com/assets/images/icons/ic-office.svg",
      title: "+100000 ",
      desc: "میلیارد ریال دارایی تحت مدیریت",
      url: "/"
    }
  ];
  return (
    <div className="flex gap-3 items-center text-center justify-between">
      {flashCards.map((item) => (
        <div
          key={item.id}
          className="flex flex-col rounded-br-3xl bg-gradient-to-t from-white w-44 h-72 justify-around items-center"
        >
          <div className="relative">
            <Image src={item.image} width={50} height={50} className="" />
          </div>

          <div className="flex flex-col gap-3 py-4 justify-start text-center items-center">
            <h2 className="font-bold"> {item.title}</h2>
            <span className="text-gray-400"> {item.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlashCards;
