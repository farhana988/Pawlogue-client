
import { handleImageUpload } from "../../../api/utils";
import DonationCampaignForm from "./DonationCampaignForm";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";


const DonationCampaign = () => {
   
    const axiosSecure = useAxiosSecure()
    const [uploadImage, setUploadImage] = useState({
      image: { name: 'Upload Button' },
    })
    console.log(uploadImage)
    const [loading, setLoading] = useState(false)
    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        const form = e.target
      
        const shortDescription = form.shortDescription.value
        const longDescription = form.longDescription.value
        const date = form.date.value
        const amount = parseFloat(form.amount.value)
    
        const image = form.image.files[0]
        const imageUrl = await handleImageUpload(image)
    
   
       

        const donationData = {
       
         
          shortDescription,
          longDescription,
          date,
          amount,
       
          image: imageUrl,
          createdAt : new Date().toISOString()

        }
    
        console.table(donationData)
     
        try {
        
          await axiosSecure.post('/donationCampaign', donationData)
     
   
        } catch (err) {
          console.log(err)
        } finally {
          setLoading(false)
        }
      }
    return (
        <div>
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