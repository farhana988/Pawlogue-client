import { useQuery, } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import MyPetsTable from "./MyPetsTable";
import Heading from "../../../Components/Reusable/Heading";
import DashboardNoData from "../../../Components/Reusable/DashboardNoData";



const MyPets = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();



  const {
    data: pets,

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


  if (error) return <div>Error loading pets</div>;


  return (
    <div>
       <Heading title={"My Added Pets"}></Heading>
      {pets && pets.length > 0 ? (
        <div className=" ">
          <div className="">
            <MyPetsTable
             pets={pets}
              
              />
          </div>
        </div>
      ) : (
        <DashboardNoData 
        title={'No Pets Found !'}/>
      )}
    </div>
  );
};

export default MyPets;
