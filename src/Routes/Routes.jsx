import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/Shared/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Social/Login";
import Registration from "../Pages/Social/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }, 
      {
        path: "/login",
        element:<Login></Login>,
      }, 
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
]);
