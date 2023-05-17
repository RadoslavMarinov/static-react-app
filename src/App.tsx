import "./App.css";
import Clock from "./components/cards/Clock";
import PrimaryCard from "./components/cards/PrimaryCard";
import SmallCards from "./components/cards/SmallCards";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <div className="relative">
      <MainLayout>
        <div className="m-10 xl:mr-24 grid grid-cols-1 gap-8">
          <Clock></Clock>
          <PrimaryCard />
          <SmallCards />
        </div>
      </MainLayout>
    </div>
  );
}

export default App;
