import { MdArrowBackIosNew } from "react-icons/md";
import { useState } from "react";
import IndustryTraining from "./menu-items/IndustryTraining";
import MarketingMaterials from "./menu-items/MarketingMaterials";
import MarketingRequestForms from "./menu-items/MarketingRequestForms";
import AccessTools from "./menu-items/AccessTools";
import AboutPayarc from "./menu-items/AboutPayarc";
import Dashboard from "./menu-items/Dashboard";
import PayarcTraining from "./menu-items/PayarcTraining";
import Search from "./menu-items/Search";
import MyPayarc from "./menu-items/MyPayarc";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className={`${open ? "max-w-[256px]" : "max-w-[4em]"} transition-all
        ease-in-out
        duration-300
        rounded-lg
        text-main-color
        relative top-4
        h-screen
        shadow-menu-item
        mx-4
        bg-white
      `}
        data-testid="sidebar"
      >
        <div
          className="p-4 flex flex-row justify-between"
          data-tesid="sidebar-header"
        >
          <div
            className={`
            relative w-8 h-8
            rounded-lg
            bg-blue-400
          `}
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            <div
              className={`
            cursor-pointer
            relative w-8 h-8
            rounded-lg
            overflow-visible
            bg-contain
            bg-no-repeat
            bg-[url('/public/images/logo-small.png')]
            hover:opacity-60
          `}
            ></div>
          </div>

          {open && (
            <div
              className="px-2 cursor-pointer hover:bg-blue-300 rounded-2xl"
              onClick={() => {
                setOpen(false);
              }}
            >
              <MdArrowBackIosNew className="mt-2" />
            </div>
          )}
        </div>

        <div className="relative h-4/5">
          <Dashboard open={open} />
          <MyPayarc parentOpen={open} />
          <AboutPayarc open={open} />
          <PayarcTraining open={open} />
          <IndustryTraining open={open} />
          <MarketingMaterials open={open} />
          <MarketingRequestForms open={open} />
          <AccessTools open={open} />
        </div>
        <div className="grid grid-cols-1 gap-4 ml-3">
          <Search parentOpen={open} />
          <div className="ml-1 grid grid-cols-menu-item gap-2 items-center cursor-pointer group">
            <span className="bg-[#131741] text-white rounded-full p-[9px] text-xs">
              JD
            </span>
            {open ? 
            <span className="">John Doe</span> : <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out">Profile</span>}
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
