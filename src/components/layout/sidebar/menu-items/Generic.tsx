import { ReactElement } from "react";

type Props = {
  open: boolean;
  icon: ReactElement;
  name: string;
};

function GenericItem({ open, icon, name }: Props) {
  return (
    <div
      className="group cursor-pointer my-3 hover:[&>*]:opacity-100 inline-block"
      role="listitem"
      onClick={()=>{window.location.href = '/about'}}
    >
      <div
        className={`flex flex-row gap-4 pl-1 py-1 items-center rounded-md whitespace-nowrap ${
          open ? "hover:bg-blue-200 hover:text-blue-400" : ""
        }`}
      >
        <div className="pl-1 text-xl">{icon}</div>
        <div
          className={`${
            open ? "opacity-100" : "opacity-0"
          } group-hover:opacity-100 group-hover:overflow-visible  transition-opacity ease-in-out duration-300`}
        >
          {name}
        </div>
      </div>
    </div>
  );
}

export default GenericItem;
