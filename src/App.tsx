import moment from "moment";
import "./App.css";
import PrimaryCard from "./components/cards/PrimaryCard";
import MainLayout from "./components/layout/MainLayout";


function App() {
  return (
    <div className="relative">
      <MainLayout>
        <div className="m-10 xl:mr-24">
          <div className="grid grid-cols-1 gap-8">
          
            <div className="flex flex-col items-end text-main-color" aria-label="datetime">

              <div className="text-6xl  " aria-label="time">{ moment(new Date()).format("HH:mm")}</div>
              <div aria-label="date">{ moment(new Date()).format("dddd D MMM")}</div>
              
            </div>
            <PrimaryCard />

            <div className=" gap-6 justify-center xl:justify-between grid grid-cols-auto-fit">
             
              <div
                aria-label="small-card"
                className="rounded-lg p-6 shadow-menu-item grid grid-cols-1 gap-5 bg-white"
              >
                <div className="text-xl">Payarc Terminals</div>
                <div className="text-sm text-[#737376]">
                  Ever wondered about those mysterious NABU fees on your
                  statement?
                </div>
                <button className="rounded px-5 py-1 max-w-[6em] text-white text-sm bg-blue-300 hover:bg-blue-500">
                  Enter
                </button>
              </div>

              <div
                aria-label="small-card"
                className="rounded-lg p-6 shadow-menu-item grid grid-cols-1 gap-5 bg-white"
              >
                <div className="text-xl">Payarc + Curv</div>
                <div className="text-sm text-[#737376]">
                  Ever wondered about those mysterious NABU fees on your
                  statement?
                </div>
                <button className="rounded px-5 py-1 max-w-[6em] text-white text-sm bg-blue-300 hover:bg-blue-500">
                  Enter
                </button>
              </div>

              <div
                data-testid="small-card"
                className="rounded-lg p-6 shadow-menu-item grid grid-cols-1 gap-5 bg-white"
              >
                <div className="text-xl">Payarc Banks</div>
                <div className="text-sm text-[#737376]">
                  Ever wondered about those mysterious NABU fees on your
                  statement?
                </div>
                <button className="rounded px-5 py-1 max-w-[6em] text-white text-sm bg-blue-300 hover:bg-blue-500">
                  Enter
                </button>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default App;
