import Card from "./ui/card/Card";
import Banner from "./ui/homebanner/Banner";
import Khodro from "./ui/khodrobanner/Khodro";

export default function Home() {
  return (
    <div>
      <Banner />
      <Khodro />
      <Card />
    </div>
  );
}
