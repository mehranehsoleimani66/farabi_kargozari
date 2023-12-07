import Link from "next/link";
import Image from "next/image";
const Nav = () => {
  const links = [
    { id: 0, title: "مسئولیت اجتماعی", url: "/" },
    { id: 1, title: "بورس کالا و انرژی", url: "/" },
    { id: 2, title: "اخبار و تازه ها", url: "/" },
    { id: 3, title: "شعبه ها", url: "/" },
    { id: 3, title: " فارابی", url: "/" },
    { id: 3, title: " سرمایه گذاری", url: "/" }
  ];

  return (
    <div
      className=" flex items-center fixed z-[1000] w-full
justify-between  uppercase h-20  bg-white px-40 py-5"
    >
      <div className="flex text-white gap-3 ">
        <button className="border bg-green-700 text-sm px-5 rounded-md py-4  font-bold">
          ورود به فارابی زون
        </button>
        <button className="border border-gray-200 text-green-700 px-2 text-sm font-bold rounded-md">
          فارابیکسو
        </button>
      </div>

      <div className="flex justify-between items-center gap-7  ">
        <div className="flex gap-3 items-center text-black from-neutral-50 text-sm font-bold">
          {links.map((link) => (
            <Link href={link.url} key={link.id}>
              {link.title}
            </Link>
          ))}
        </div>
        <Image
          src="https://irfarabi.com/assets/images/farabi-full-logo.svg"
          width={100}
          height={150}
          alt="img"
        />
      </div>
    </div>
  );
};

export default Nav;
