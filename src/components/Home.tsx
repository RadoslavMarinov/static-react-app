import Clock from "./cards/Clock";
import PrimaryCard from "./cards/PrimaryCard";
import SmallCards from "./cards/SmallCards";

function Home() {
  return (
    <div className="m-10 xl:mr-24 grid grid-cols-1 gap-8">
      <Clock></Clock>
      <PrimaryCard />
      <SmallCards />
    </div>
  );
}

export default Home;
