import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTitle = (customTitle) => {
  const location = useLocation();

  useEffect(() => {
    if (customTitle) {
      document.title = "Pawlogue | " + customTitle;
    } else {
      document.title = "Pawlogue";
    }
  }, [location, customTitle]);
};

export default usePageTitle;
