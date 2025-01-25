import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";
import DonationCampaignTable from "./DonationCampaignTable";
import Heading from "../../../Components/Reusable/Heading";
import DashboardNoData from "../../../Components/Reusable/DashboardNoData";

const MyDonationCampaign = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: myDonationCampaigns = [], refetch } = useQuery({
    queryKey: ["myDonationCampaign"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/myDonationCampaign/${user?.email}`);

      return data;
    },
  });

  return (
    <div>
      <Heading title={"My Donation Campaign"}></Heading>
      <div
        className=" max-w-[420px] md:max-w-[610px] lg:max-w-7xl
       mx-auto px-5 mb-20"
      >
        <div className="">
          {myDonationCampaigns?.length > 0 ? (
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-lCard dark:bg-dCard   border-b border-gray-200
                        text-left text-sm lg:text-lg uppercase font-normal"
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-lCard dark:bg-dCard   border-b border-gray-200
                        text-left text-sm lg:text-lg uppercase font-normal"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-lCard dark:bg-dCard   border-b border-gray-200
                        text-left text-sm lg:text-lg uppercase font-normal"
                      >
                        Max Donation
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-lCard dark:bg-dCard   border-b border-gray-200
                        text-left text-sm lg:text-lg uppercase font-normal"
                      >
                        progress bar
                      </th>

                      <th
                        scope="col"
                        className="px-5 py-3 bg-lCard dark:bg-dCard   border-b border-gray-200
                        text-left text-sm lg:text-lg uppercase font-normal"
                      >
                        Action button
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {myDonationCampaigns?.map((myDonationCampaign) => (
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
          ) : (
            <DashboardNoData
            title={'No Donation Found !'}
            ></DashboardNoData>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyDonationCampaign;
