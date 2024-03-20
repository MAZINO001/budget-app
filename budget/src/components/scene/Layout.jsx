import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../global/Sidebar";

export default function Layout() {
  return (
    <div className="flex">
      hi this is layout 
      <Dashboard/>
      <Sidebar/>
    </div>
  )
}
