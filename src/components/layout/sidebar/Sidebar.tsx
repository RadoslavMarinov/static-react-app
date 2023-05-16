import { BsGridFill, BsLink45Deg } from "react-icons/bs";
import { RiQuestionFill } from "react-icons/ri";
import {
  MdArrowBackIosNew,
  MdKeyboardArrowDown as ArrowDown,
} from "react-icons/md";
import { useState } from "react";
import PrivacyTraining from "./menu-items/PayarcTraining";
import IndustryTraining from "./menu-items/IndustryTraining";
import MarketingMaterials from "./menu-items/MarketingMaterials";
import MarketingRequestForms from "./menu-items/MarketingRequestForms";
import AccessTools from "./menu-items/AccessTools";
import AboutPayarc from "./menu-items/AboutPayarc";
import Dashboard from "./menu-items/Dashboard";
import PayarcTraining from "./menu-items/PayarcTraining";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [myPayarcOpen, setMyPayarcOpen] = useState(false);

  return (
    <div
      className={`${open ? "max-w-[50em]" : "max-w-[4em]"} transition-all
        ease-in-out
        duration-300
        rounded-lg
        text-main-color
        relative top-4
        left-4 h-[1048px]
        shadow-menu-item
        
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

      {/* ICONS */}
      <Dashboard  open={open}/>

    
      {/*  */}

      <div
        className=" pl-3 cursor-pointer gap-4 hover:[&>*]:opacity-100"
        role="listitem"
      >
        <div
          className="relative flex flex-row"
          data-testid="menu-item-drowpdown-head"
          onClick={() => setMyPayarcOpen((prev) => !prev)}
        >
          <div
            className={` group px-2 py-1 rounded flex flex-row  ${
              open ? "hover:bg-blue-200 hover:text-blue-400" : ""
            } `}
          >
            <div className="flex items-center hover:bg-blue-200">
              <BsLink45Deg className="text-xl" />
            </div>
            <span
              className={`${
                open ? "opacity-100" : "opacity-0"
              } min-w-[6em] transition-opacity ease-in-out duration-300 pl-4  group-hover:opacity-100`}
            >
              My Payarc
            </span>
          </div>

          <div
            className={`${
              open ? "opacity-100" : "opacity-0"
            } absolute left-[10em] top-1 transition-opacity ease-in-out duration-300 flex flex-row `}
          >
            <div
              className={`hover:bg-blue-200 rounded-full relative flex items-center transition-all ease-in-out duration-300 ${
                myPayarcOpen ? "rotate-180" : ""
              } `}
            >
              <ArrowDown className="rounded-xl text-xl" />
            </div>
          </div>
        </div>

        {myPayarcOpen && open && (
          <div
            className="pt-5 border border-l-blue-400 text-main-blue"
            data-testid="submenu"
          >
            <div className="flex flex-col text-sm">
              <div>
                <span className="hover:bg-blue-200  p-1 m-1 rounded">
                  Overview
                </span>
              </div>
              <div>
                <span className="hover:bg-blue-200  p-1 m-1 rounded ">
                  Apply App
                </span>
              </div>
              <div>
                <span className="hover:bg-blue-200  p-1 m-1 rounded ">
                  My Residuals
                </span>
              </div>
              <div>
                <span className="hover:bg-blue-200  p-1 m-1 rounded ">
                  My Merchants
                </span>
              </div>
              <div>
                <span className="hover:bg-blue-200  p-1 m-1 rounded ">
                  Resources
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ICONS */}

      <AboutPayarc  open={open}/>
      <PayarcTraining  open={open}/>
      <IndustryTraining open={open}/>
      <MarketingMaterials open={open}/>
      <MarketingRequestForms open={open}/>
      <AccessTools open={open}/>
    </div>
  );
}
