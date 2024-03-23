import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../global/Sidebar";
import TopBar from "../global/TopBar";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full mr-4 ml-4">
        <TopBar />
        <Dashboard />
      </div>
    </div>
  );
}
