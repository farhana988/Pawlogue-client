import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/Shared/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Social/Login";
import Registration from "../Pages/Social/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import AddPet from "../Pages/Dashboard/AddPet/AddPet";
import PrivateRoute from "./PrivateRoute";

import AllUsers from "../Pages/Dashboard/AdminOnly/AllUsers/AllUsers";
import AllPets from "../Pages/Dashboard/AdminOnly/AllPets/AllPets";
import AllDonations from "../Pages/Dashboard/AdminOnly/AllDonations/AllDonations";
import PetListing from "../Pages/PetListing/PetListing/PetListing";
import AllDonationCampaigns from "../Pages/AllDonationCampaigns/AllDonationCampaigns/AllDonationCampaigns";
import PetDetails from "../Pages/PetListing/petDetails/PetDetails";
import MyDonation from "../Pages/Dashboard/MyDonation/MyDonation";
import AdoptionRequest from "../Pages/Dashboard/AdoptionRequest/AdoptionRequest";
import DonationCampaignDetails from "../Pages/AllDonationCampaigns/DonationCampaignDetails/DonationCampaignDetails";
import AdminRoute from "./AdminRoute";
import Statistics from "../Pages/Dashboard/Statistics";
import MyPets from "../Pages/Dashboard/MyAddedPets/MyPets/MyPets";
import UpdatePet from "../Pages/Dashboard/MyAddedPets/UpdatePets/UpdatePet";
import DonationCampaign from "../Pages/Dashboard/AddDonationCampaign/DonationCampaign";
import MyDonationCampaign from "../Pages/Dashboard/MyAddedDonationCampaign/MyDonationCampaign/MyDonationCampaign";
import UpdateDonation from "../Pages/Dashboard/MyAddedDonationCampaign/UpdateDonationCampaign/UpdateDonation";
import WebsiteOverview from "../Components/footer/WebsiteOverview";
import ContactInfo from "../Components/footer/ContactInfo";
import PrivacyPolicy from "../Components/footer/PrivacyPolicy";
import TermsAndConditions from "../Components/footer/TermsAndConditions";

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
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/petListing",
        element: <PetListing></PetListing>,
      },
      {
        path: "/petDetails/:id",
        element: <PetDetails></PetDetails>,
      },
      {
        path: "/donationCampaigns",
        element: <AllDonationCampaigns></AllDonationCampaigns>,
      },
      {
        path: "/donationCampaignDetails/:id",
        element: <DonationCampaignDetails></DonationCampaignDetails>,
      },
      // footer links
      {
        path: "/overview",
        element: <WebsiteOverview></WebsiteOverview>,
      },
      {
        path: "/contact",
        element: <ContactInfo></ContactInfo>,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics></Statistics>
          </PrivateRoute>
        ),
      },
      {
        path: "add-pet",
        element: (
          <PrivateRoute><AddPet></AddPet></PrivateRoute>
        ),
      },
      {
        path: "my-pets",
        element: (
          <PrivateRoute>  <MyPets></MyPets>  </PrivateRoute>
        ),
      },
      {
        path: "updatePet/:id",
        element: (
          <PrivateRoute> <UpdatePet></UpdatePet>   </PrivateRoute>
        ),
      },
     
      {
        path: "create-donation",
        element: (
          <PrivateRoute>     <DonationCampaign></DonationCampaign>  </PrivateRoute>
        ),
      },
      {
        path: "my-donations-camp",
        element: (
          <PrivateRoute>   <MyDonationCampaign></MyDonationCampaign>  </PrivateRoute>
        ),
      },
      {
        path: "updateDonation/:id",
        element: (
          <PrivateRoute>    <UpdateDonation></UpdateDonation>  </PrivateRoute>
        ),
      },
      {
        path: "my-donations",
        element: <PrivateRoute> <MyDonation></MyDonation> </PrivateRoute>,
      },
      {
        path: "adoptionReq",
        element: <PrivateRoute> <AdoptionRequest></AdoptionRequest>  </PrivateRoute>,
      },
      {
        path: "allUsers",
        element: (
          <PrivateRoute> <AdminRoute> <AllUsers></AllUsers>  </AdminRoute></PrivateRoute>
        ),
      },
      {
        path: "allPets",
        element: (
          <PrivateRoute> <AdminRoute>  <AllPets></AllPets>  </AdminRoute>  </PrivateRoute>
        ),
      },
      {
        path: "allDonations",
        element: (
          <PrivateRoute> <AdminRoute> <AllDonations></AllDonations></AdminRoute>   </PrivateRoute>
        ),
      },
    ],
  },
]);
