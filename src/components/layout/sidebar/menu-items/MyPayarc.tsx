import { useState } from "react";
import { BsLink45Deg } from "react-icons/bs";
import {
  MdKeyboardArrowDown as ArrowDown,
} from "react-icons/md";
import MyPayarcSubmeny from "../submenu/MyPayarcSubmeny";


type Props = {
  parentOpen: boolean
}

export function MyPayarc({parentOpen}:Props) {

  const [open, setOpen] = useState(false)

  return <div
    className="pl-0 cursor-pointer gap-4 hover:[&>*]:opacity-100"
    role="listitem"
  >
    <div
      className="relative flex flex-row"
      data-testid="menu-item-drowpdown-head"
      onClick={() => setOpen((prev) => !prev)}
    >
      <div
        className={`group px-2 py-1 rounded flex flex-row 
        ${parentOpen ? "hover:bg-blue-200 hover:text-blue-400" : ""}
        `}
      >
        <div className="flex items-center ">
          <BsLink45Deg className="text-xl" />
        </div>
        <span
          className={`${
            parentOpen ? "opacity-100" : "opacity-0"
          } min-w-[6em] transition-opacity ease-in-out duration-300 pl-4  group-hover:opacity-100`}
        >
          My Payarc
        </span>
      </div>

      <div
        className={`${
          parentOpen ? "opacity-100" : "opacity-0"
        } absolute left-[10em] top-1 transition-opacity ease-in-out duration-300 flex flex-row `}
      >
        <div
          className={`hover:bg-blue-200 rounded-full relative flex items-center transition-all ease-in-out duration-300 ${
            open ? "rotate-180" : ""
          } `}
        >
          <ArrowDown className="rounded-xl text-xl" />
        </div>
      </div>
    </div>

    {open && parentOpen && <MyPayarcSubmeny />}
  </div>


}

export default MyPayarc;