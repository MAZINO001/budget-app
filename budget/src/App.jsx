import Layout from "./components/scene/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  
]);
function App() {
  return (
    <div className="App text-white ">
        <div className="App text-white">
          <Layout />
          <RouterProvider router={router} />
        </div>
    </div>
  );
}

export default App;
