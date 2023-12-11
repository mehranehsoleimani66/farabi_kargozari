import Banner4 from "./ui/banner4/Banner4";
import Brokerage from "./ui/banner3/Brokerage";
import Banner from "./ui/banner1/Banner";
import Describe from "./ui/banner6/Describe";
import CarBanner from "./ui/banner5/CarBanner";
import BusinessPartner from "./ui/banner7/BusinessPartner";
import LastNews from "./ui/banner8/LastNews";
import BannerFarabixo from "./ui/banner2/BannerFarabixo";
import ContactBanner from "./ui/banner9/contactBanner";

export default function Home() {
  return (
    <div>
      <Banner />
      <BannerFarabixo />
      <Brokerage />
      <Banner4 />
      <CarBanner />
      <Describe />
      <BusinessPartner />
      <LastNews />
      <ContactBanner />
    </div>
  );
}
