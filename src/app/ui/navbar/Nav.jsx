// import Link from "next/link";
// import Image from "next/image";

// const Nav = () => {
//   const links = [
//     { id: 0, title: "مسئولیت اجتماعی", url: "/" },
//     { id: 1, title: "بورس کالا و انرژی", url: "/" },
//     { id: 2, title: "اخبار و تازه ها", url: "/" },
//     { id: 3, title: "شعبه ها", url: "/" },
//     { id: 4, title: " فارابی", url: "/" },
//     { id: 5, title: " سرمایه گذاری", url: "/" }
//   ];

//   return (
//     <div
//       className=" flex z-50 w-full
// justify-between items-center uppercase  px-40  h-12 sticky top-0 mt-4  bg-white "
//     >
//       <div className="flex text-white gap-3 justify-center w-1/3   items-end ">
//         <button className="border bg-green-700 text-sm px-5 rounded-md py-3  font-bold">
//           ورود به فارابی زون
//         </button>
//         <button className="border border-gray-200 text-green-700 px-2 py-3 text-sm font-bold rounded-md">
//           فارابیکسو
//         </button>
//       </div>

//       <div className="flex justify-end items-center gap-7 w-2/3 ">
//         <div className="flex gap-3 items-center text-black from-neutral-50 text-sm font-bold">
//           {links.map((link) => (
//             <Link href={link.url} key={link.id}>
//               {link.title}
//             </Link>
//           ))}
//         </div>
//         <Image
//           src="https://irfarabi.com/assets/images/farabi-full-logo.svg"
//           width={100}
//           height={150}
//           alt="img"
//         />
//       </div>
//     </div>
//   );
// };

// export default Nav;
