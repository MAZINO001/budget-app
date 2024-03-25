import { Outlet } from "react-router-dom";
import Sidebar from "../global/Sidebar";
import TopBar from "../global/TopBar";

export default function Layout() {
  return (
    <div className="flex md:flex-row flex-col">
      <Sidebar />
      <div className="flex flex-col w-full">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
}
