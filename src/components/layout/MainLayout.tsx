import { PropsWithChildren } from "react";
import Sidebar from "./sidebar/Sidebar";

interface Props extends PropsWithChildren {

}

export default function MainLayout({children}:Props) {

  return (
    <div className="grid grid-cols-main-layout bg-[#F5F5F5]" id="main-layout">
      <Sidebar/>
      <div>{children}</div>
    </div>
  );
}
