import BannerFarabixo from "./ui/BannerFarabixo";
import Brokerage from "./ui/brokerage/Brokerage";
import Card from "./ui/card/Card";

import Describe from "./ui/describe/Describe";
import Banner from "./ui/homebanner/Banner";
import Khodro from "./ui/khodrobanner/Khodro";

export default function Home() {
  return (
    <div>
      <Banner />
      <Khodro />
      <Card />
      <Describe />
      <BannerFarabixo />
      <Brokerage />
    </div>
  );
}
