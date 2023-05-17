import { PropsWithChildren } from "react";
import Sidebar from "./sidebar/Sidebar";

interface Props extends PropsWithChildren {

}

export default function MainLayout({children}:Props) {

  return (
    <div className="grid grid-cols-mobile-layout lg:grid-cols-main-layout bg-[#F5F5F5]" id="main-layout">
      <div className="w-[300px]">
      <Sidebar/>
      </div>
      <div>{children}</div>
    </div>
  );
}
