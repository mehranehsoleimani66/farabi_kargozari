import Banner4 from "./ui/banner4/Banner4";
import Brokerage from "./ui/brokerage/Brokerage";
import Banner from "./ui/homebanner/Banner";

import Describe from "./ui/describe/Describe";
// import Card from "./ui/card/Card";
import CarBanner from "./ui/section5/CarBanner";
import BusinessPartner from "./ui/section6/BusinessPartner";
import LastNews from "./ui/section7/LastNews";
import BannerFarabixo from "./ui/BannerFarabixo";
export default function Home() {
  return (
    <div>
      <Banner />

      <BannerFarabixo />
      <Brokerage />
      <Banner4 />
      <CarBanner />

      {/* <Card /> */}
      <Describe />
      <BusinessPartner />
      <LastNews />
    </div>
  );
}
