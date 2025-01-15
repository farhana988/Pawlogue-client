import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/Shared/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Social/Login";
import Registration from "../Pages/Social/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import MyPets from "../Pages/Dashboard/MyPets";
import AddPet from "../Pages/Dashboard/AddPet";

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
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children:[
      {
        path: "add-pet",
        element: <AddPet></AddPet>,
      }, 
      {
        path: "my-pets",
        element: <MyPets></MyPets>,
      }, 
      {
        path: "adoption-requests",
        element: <Home></Home>,
      }, 
      {
        path: "create-donation",
        element: <Home></Home>,
      }, 
      {
        path: "my-donations",
        element: <Home></Home>,
      }, 
      {
        path: "my-donation-campaigns",
        element: <Home></Home>,
      }, 
    ]
  }, 
]);
