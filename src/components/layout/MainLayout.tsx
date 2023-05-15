import Sidebar from "./sidebar/Sidebar";

export default function MainLayout() {

  return (
    <div className="grid grid-cols-main-layout" id="main-layout">
      <Sidebar/>
      <div>This is the main panel</div>
    </div>
  );
}
