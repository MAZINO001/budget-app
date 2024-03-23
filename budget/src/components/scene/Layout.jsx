import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../global/Sidebar";
import TopBar from "../global/TopBar";

export default function Layout() {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex flex-col w-full mr-2 ml-2">
        <TopBar />
        <Dashboard />
      </div>
    </div>
  );
}
