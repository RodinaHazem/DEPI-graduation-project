import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./dashboard/user/Website/Home";
import Register from "./auth/register/Register";
import Login from "./auth/login/Login";
import Layout from "./layout/Layout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index:true, element: <Home /> },
      ],
    },
    {path: "/register", element: <Register /> },
    {path: "/login", element: <Login /> },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
