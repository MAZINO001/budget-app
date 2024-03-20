import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../global/Sidebar";

export default function scene() {
  return (
    <div className="flex">
      <Dashboard/>
      <Sidebar/>
    </div>
  )
}
