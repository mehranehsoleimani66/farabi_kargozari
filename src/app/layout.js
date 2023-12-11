import "./globals.css";
import Footer from "./ui/footer/Footer";
import Contact from "./ui/contact/Contact";
// import Nav from "./ui/navbar/Nav";
import LeftModal from "./ui/leftModal/LeftModal";
import RightModal from "./ui/rightModal/RightModal";
import Navbar from "./ui/navbar/Navbar";

// const inter = Inter({ subsets: ["persian"] });

export const metadata = {
  title: "کارگزاری فارابی -  کارگزاری فارابی",
  description: "Generated by create next app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      {/* ASO Animation */}
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <div className="min-h-full">
        <div className="">
          <Contact />
          <Navbar />
          <LeftModal />
          <RightModal />
          {children}
          <Footer />
        </div>
      </div>
      {/* AOS Script */}
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </html>
  );
}
