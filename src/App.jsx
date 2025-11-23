// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./dashboard/user/Website/Home";
// import Login from "./auth/login/Login";
// import Register from "./auth/register/Register";
// import Navbar from "./dashboard/user/Website/Navbar";

function App() {
  // const routes = createBrowserRouter([

  //   { path: "/login", element: <Login /> },
  //   { path: "/register", element: <Register /> },

  // ]);

  return (
    <>
      <Home/>
      {/* <RouterProvider router={routes} />; */}
    </>
  );
}

export default App;
