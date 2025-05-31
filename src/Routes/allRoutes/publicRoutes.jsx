import AllDonationCampaigns from "../../Pages/AllDonationCampaigns/AllDonationCampaigns/AllDonationCampaigns";
import DonationCampaignDetails from "../../Pages/AllDonationCampaigns/DonationCampaignDetails/DonationCampaignDetails";
import BookVet from "../../Pages/BookVet/BookVet";
import Home from "../../Pages/Home/Home";
import PetDetails from "../../Pages/PetListing/petDetails/PetDetails";
import PetListing from "../../Pages/PetListing/PetListing/PetListing";
import PrivateRoute from "../PrivateRoute";

const publicRoutes = [
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      const storiesRes = await fetch("/stories.json");
      const stories = await storiesRes.json();
      const petCareRes = await fetch("/petCare.json");
      const petCare = await petCareRes.json();
      return { stories, petCare };
    },
  },
  {
    path: "/petListing",
    element: <PetListing />,
  },
  {
    path: "/petDetails/:id",
    element: <PetDetails />,
  },
  {
    path: "/donationCampaigns",
    element: <AllDonationCampaigns />,
  },
  {
    path: "/donationCampaignDetails/:id",
    element: <DonationCampaignDetails />,
  },
  {
    path: "/bookVet",
    element: (
      <PrivateRoute>
        <BookVet />
      </PrivateRoute>
    ),
  },
];

export default publicRoutes;
