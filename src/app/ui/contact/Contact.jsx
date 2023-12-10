import Link from "next/link";
const Contact = () => {
  return (
    <div className="h-12 bg-gray-50 text-black gap-5 px-4 flex justify-end  text-enter items-center text-base cursor-pointer">
      <Link
        href=""
        className="flex items-center  list-none hover:shadow-sm hover:shadow-gray-300 pr-2 pl-2 h-full"
      >
        تماس
      </Link>
      <Link
        href=""
        className="flex font-bIranZamin items-center list-none hover:shadow-sm hover:shadow-gray-300 h-full pr-2 pl-2"
      >
        آموزین
      </Link>
      <Link
        href=""
        className="flex font-bIranZamin items-center text-green-600  list-none h-full  pr-2"
      >
        کارگزاری مفید
      </Link>
    </div>
  );
};

export default Contact;
