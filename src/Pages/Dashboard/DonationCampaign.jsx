import { handleImageUpload } from "../../api/utils";
import DonationCampaignForm from "../../Components/form/DonationCampaignForm";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Heading from "../../Components/Reusable/Heading";
import { swalAlert } from "../../utils/swalAlert";

const DonationCampaign = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [uploadImage, setUploadImage] = useState({
    image: { name: "Upload Button" },
  });

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const shortDescription = form.shortDescription.value;
    const longDescription = form.longDescription.value;
    const date = form.date.value;
    const amount = parseFloat(form.amount.value);

    const image = form.image.files[0];
    const imageUrl = await handleImageUpload(image);

    const donationData = {
      email: user?.email,
      name,
      shortDescription,
      longDescription,
      date,
      amount,
      paused: false,
      image: imageUrl,
      createdAt: new Date().toISOString(),
    };

    try {
      await axiosSecure.post("/donationCampaign", donationData);
      swalAlert({
        type: "success",
        title: "Donation created Successfully",
      });
      form.reset();
      setUploadImage({ image: { name: "Upload Button" } });
    } catch {
      swalAlert({
        type: "error",
        title: "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="lg:max-w-4xl mx-auto rounded">
      <Heading title={"Create Donation Campaign"}></Heading>
      <DonationCampaignForm
        handleSubmit={handleSubmit}
        uploadImage={uploadImage}
        setUploadImage={setUploadImage}
        loading={loading}
      ></DonationCampaignForm>
    </div>
  );
};

export default DonationCampaign;
