import axios from "axios"

export const saveUser = async user => {
    await axios.post(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    })
  }



  // image

    // imgBB API URL
    const imgbbUrl =  `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`
    const imgbbApiKey = import.meta.env.VITE_IMGBB_API_KEY

 export const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("key", imgbbApiKey);

    try {
     
      const response = await axios.post(imgbbUrl, formData);
   
      return response.data.data.display_url
    } catch  {
  
      throw new Error("Image upload failed");
    }
  };