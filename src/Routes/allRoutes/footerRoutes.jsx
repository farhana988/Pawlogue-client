import WebsiteOverview from "../../Components/footer/WebsiteOverview";
import ContactInfo from "../../Components/footer/ContactInfo";
import PrivacyPolicy from "../../Components/footer/PrivacyPolicy";
import TermsAndConditions from "../../Components/footer/TermsAndConditions";

const footerRoutes = [
  {
    path: "/overview",
    element: <WebsiteOverview />,
  },
  {
    path: "/contact",
    element: <ContactInfo />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms",
    element: <TermsAndConditions />,
  },
];

export default footerRoutes;
