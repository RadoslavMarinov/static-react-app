import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiXMark } from "react-icons/hi2";

type Props = {
  parentOpen: boolean;
};
export default function Search({ parentOpen }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!parentOpen) {
      setOpen(false);
    }
  }, [parentOpen]);

  return (
    <div
      data-testid="search"
      className={`
      group
      ${open ? "border-2 border-blue-400" : "cursor-pointer"} 
      grid grid-cols-search-box max-w-fit rounded-3xl py-1 px-2 ml-4`}
      onClick={() => {
        parentOpen && !open && setOpen(true);
      }}
    >
      <div className="flex items-center">
        <AiOutlineSearch className="text-xl" />
      </div>
      <div
        className={` transition-opacity duration-300 ease-in-out relative`}
      >
        <input
          className={`outline-none ${
            open
              ? "max-w-[10em] opacity-100"
              : "max-w-[1em] cursor-pointer opacity-0"
          } transition-all duration-200`}
          type="text"
          placeholder={`${open ? "Search " : ""}`}
        />
        <span
          className={`${(!parentOpen || open) && "opacity-0"} ${
            !open && "group-hover:opacity-100"
          } absolute left-[-1px]`}
        >
          Search
        </span>
        <div
          className={`cursor-pointer absolute -top-2 -right-7 bg-red-800 text-white rounded-full transition-all duration-300
           ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => {
            console.log(`CLOSE`);
            setOpen(false);
          }}
        >
          <HiXMark />
        </div>
      </div>
    </div>
  );
}
