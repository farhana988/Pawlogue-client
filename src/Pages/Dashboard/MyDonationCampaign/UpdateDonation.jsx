import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {useParams } from "react-router-dom";
import { handleImageUpload } from "../../../api/utils";
import UpdateDonationForm from "./UpdateDonationForm";
import Swal from "sweetalert2";


const UpdateDonation = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();


  const [campaignData, setCampaignData] = useState();
  const [uploadImage, setUploadImage] = useState({ image: { name: 'Upload Button' } });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    const fetchPetData = async () => {
      try {
        const response = await axiosSecure.get(`/donationCampaign/${id}`);
        setCampaignData(response.data); 

      } catch {
           Swal.fire("Something went wrong!");
      }
    };

    fetchPetData();
  }, [axiosSecure, id]); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const shortDescription = form.shortDescription.value;
    const longDescription = form.longDescription.value;
    const date = form.date.value;
    const amount = parseFloat(form.amount.value);

    let image = form.image.files[0];
    let imageUrl = campaignData?.image; 
    if (image) {
      imageUrl = await handleImageUpload(image);
    }

    const updatedCampaignData = {
      email: user?.email,
      name,
      shortDescription,
      longDescription,
      date,
      amount,
      image: imageUrl,
      updatedAt: new Date().toISOString(),
    };

    try {
      await axiosSecure.put(`/updateDonationCampaign/${id}`, updatedCampaignData);

    } catch  {
        Swal.fire("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  if (!campaignData) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h1 className="text-2xl text-center my-5">Update Donation Campaign</h1>
      <UpdateDonationForm
        campaignData={campaignData}
        handleSubmit={handleSubmit}
        uploadImage={uploadImage}
        setUploadImage={setUploadImage}
        loading={loading}
      />
    </div>
  );
};

export default UpdateDonation;
