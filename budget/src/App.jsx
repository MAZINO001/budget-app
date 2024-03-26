import Layout from "./components/scene/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import AddNew from "./components/pages/AddNew";
import History from "./components/pages/History";
import Calendar from "./components/pages/Calendar";
import Settings from "./components/pages/Settings";
import ErrorPage from "./components/global/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/addnew", element: <AddNew /> },
      { path: "/history", element: <History /> },
      { path: "/calendar", element: <Calendar /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
function App() {
  return (
    <div className="App  ">
      <div className="App text-white">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
