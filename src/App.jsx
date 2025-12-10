import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import UserDashboard from "./pages/UserDashboard/User";
import AdminDashboard from "./pages/AdminDashboard/Admin";
import Home from "./dashboard/user/Website/Home";
import Layout from "./layout/MainLayout";
import Contact from "./dashboard/user/Website/Contact";
import UserContextProvider from "./context/UserContextProvider";
import About from "./dashboard/user/Website/About";
import Trips from "./dashboard/user/Website/Trips";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/contact", element: <Contact/> },
        { path: "/about", element: <About/> },
        { path: "/trips", element: <Trips/> },
      ],
    },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/UserDashboard",
    element: (

        <UserDashboard />
    ),
  },
  {
    path: "/AdminDashboard",
    element: 
          <AdminDashboard />
    
  },
]);

  return (
      <UserContextProvider>
      <RouterProvider router={routes} />
      </UserContextProvider>

  );
}

export default App;
