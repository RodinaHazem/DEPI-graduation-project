import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./dashboard/user/Website/Home";
import Register from "./auth/register/Register";
import Login from "./auth/login/Login";
import Layout from "./layout/Layout";
import DashLayout from "./dashboard/admin/DashLayout/DashLayout";
import Trips from "./dashboard/admin/pages/Trips";
import Contact from "./dashboard/user/Website/Contact";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/contact", element: <Contact/> },
      ],
    },
    { path: "/register", element: <Register /> },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/login/dashboard",
      element: <DashLayout />,
      children: [
        {
          path: "admin/pages/Trips",
          element: <Trips />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
