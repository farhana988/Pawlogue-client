import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";
import DonationCampaignTable from "./DonationCampaignTable";

const MyDonationCampaign = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const {
    data: myDonationCampaigns = [],
    refetch,
  } = useQuery({
    queryKey: ["myDonationCampaign"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/myDonationCampaign/${user?.email}`);

      return data;
    },
  });


  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Maximum Donation amount
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                    progress bar
                    </th>
                   

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action button
                    </th>
                    
                  </tr>
                </thead>
                <tbody>
                  {myDonationCampaigns.map((myDonationCampaign) => (
                    <DonationCampaignTable
                      key={myDonationCampaign?._id}
                      myDonationCampaign={myDonationCampaign}
                      refetch={refetch}
                    ></DonationCampaignTable>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDonationCampaign;
