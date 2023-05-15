import { FaBeer } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${
        open ? "max-w-[50em]" : "max-w-[4em]"
      } transition-all
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
            setOpen(prev=>!prev);
          }}
        >
          <div className={`
            cursor-pointer
            relative w-8 h-8
            rounded-lg
            overflow-visible
            bg-contain
            bg-no-repeat
            bg-[url('/public/images/logo-small.png')]
            hover:opacity-60
          `}></div>
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



      <div className="group pl-4 cursor-pointer flex flex-row gap-4 hover:[&>*]:opacity-100" role="listitem">
        <div className="pl-1">
          <BsGridFill className="text-xl mt-0" />
        </div>

        <div
          className={`${
            open ? "opacity-100" : "opacity-0"
          } group-hover:opacity-100 group-hover:overflow-visible  transition-opacity ease-in-out duration-300`}
        >
          Dashboard
        </div>
      </div>


      
    </div>
  );
}
