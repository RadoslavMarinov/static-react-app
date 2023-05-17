import { MdArrowBackIosNew, MdOutlineFormatAlignJustify } from "react-icons/md";
import { useEffect, useState } from "react";
import Search from "./menu-items/Search";
import MyPayarc from "./menu-items/MyPayarc";
import GenericItem from "./menu-items/Generic";
import { BsGridFill } from "react-icons/bs";
import { FaCloudDownloadAlt, FaIndustry, FaInfo, FaTools } from "react-icons/fa";
import { TfiBlackboard } from "react-icons/tfi";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
  
    const handleResize = () => {
      const {innerWidth} = window
      console.log(innerWidth);
      if(innerWidth<1024){
        console.log(`BIG SCREEN`);
        setOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize);
    
    return () => {
     window.removeEventListener('resize', handleResize);
    };
    
  }, []);
  
  return (
    <div>
      <div
        className={`${open ? "max-w-[256px]" : "max-w-[4em]"} transition-all
        ease-in-out
        z-10
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

        <div className="relative ml-4 h-4/5">
          <GenericItem open={open} name="Dashboard" icon={<BsGridFill/>}/>
          <MyPayarc parentOpen={open} />
          <GenericItem open={open} name="About Payarc" icon={<FaInfo/>}/>
          <GenericItem open={open} name="Payarc Training" icon={<TfiBlackboard/>}/>
          <GenericItem open={open} name="Industry Training" icon={<FaIndustry/>}/>
          <GenericItem open={open} name="Marketing Details" icon={<FaCloudDownloadAlt/>}/>
          <GenericItem open={open} name="Marketing Request Forms" icon={<MdOutlineFormatAlignJustify/>}/>
          <GenericItem open={open} name="Access Tools" icon={<FaTools/>}/>
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
