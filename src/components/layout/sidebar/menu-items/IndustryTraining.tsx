import { FaIndustry} from "react-icons/fa";

type Props = {
  open: boolean
}

function IndustryTraining({open}:Props) {
  return       <div
  className="group pl-3 cursor-pointer my-4 hover:[&>*]:opacity-100"
  role="listitem"
>
  <div
    className={`max-w-[11em] flex flex-row gap-4 pl-1 py-1 items-center rounded-md whitespace-nowrap ${
      open ? "hover:bg-blue-200 hover:text-blue-400" : ""
    }`}
  >
    <div className="pl-1">
      <FaIndustry className="text-xl mt-0" />
    </div>
    <div
      className={`${
        open ? "opacity-100" : "opacity-0"
      } group-hover:opacity-100 group-hover:overflow-visible  transition-opacity ease-in-out duration-300`}
    >
      Industry Training
    </div>
  </div>
</div>;
}

export default IndustryTraining;