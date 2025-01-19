import { useQuery, } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import NoData from "../../../Components/Reusable/NoData";
import MyPetsTable from "./MyPetsTable";
import LoadingSpinner from "../../../Components/Reusable/LoadingSpinner";


const MyPets = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();



  const {
    data: pets,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pets", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/pets/${user?.email}`
      );

      return data;
    
    },
  
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <div>Error loading pets</div>;


  return (
    <div>
      Total Pets: {pets?.length}
      {pets && pets.length > 0 ? (
        <div className="pt-12 ">
          <div className="pt-12">
            <MyPetsTable
             pets={pets}
          
       
        
              
              />
          </div>
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default MyPets;
