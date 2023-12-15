import "./globals.css";
import Footer from "./ui/footer/Footer";
import Contact from "./ui/contact/Contact";
import LeftModal from "./ui/leftModal/LeftModal";
import RightModal from "./ui/rightModal/RightModal";
import Nav from "./ui/navbar/Nav";
// import Navbar from "./ui/navbar/Navbar";

// const inter = Inter({ subsets: ["persian"] });

export const metadata = {
  title: "کارگزاری فارابی -  کارگزاری فارابی",
  description: "Generated by create next app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" suppressHydrationWarning={true}>
      {/* ASO Animation */}
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>

      <body className="">
        <Contact />
        {/* <Nav /> */}
        <LeftModal />
        {children}
        <RightModal />
        <Footer />
      </body>
    </html>
  );
}
