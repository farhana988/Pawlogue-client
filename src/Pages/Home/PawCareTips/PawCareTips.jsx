import { useEffect, useState } from "react";
import PawCareTipsCard from "./PawCareTipsCard";
import Heading from "../../../Components/Reusable/Heading";

const PawCareTips = () => {
    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null); 


    useEffect(() => {
        fetch('./petCare.json')
          .then(response => response.json())
          .then(data => {
            setData(data);
        
            setSelectedCategory(data[0]?.category);
          })
          .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category); 
    };


    const selectedCategoryData = data.find((category) => category.category === selectedCategory);

    return (
        <div className="container mx-auto py-10">
    <Heading
    title={'Pet Care Tips'}></Heading>
            <div className="flex flex-wrap gap-4 mb-6">
                {data.map((category) => (
                    <button
                        key={category.category}
                        onClick={() => handleCategoryClick(category.category)}
                        className={`flex justify-center items-center p-4 rounded-lg transition-all 
                            ${selectedCategory === category.category ? 
                                "bg-blue-700" : 
                                "bg-blue-500"} 
                            hover:bg-blue-700`}
                    >
                        <img
                            src={category.image}
                            alt={category.category}
                            className="w-16 h-16 object-cover rounded-full"
                        />
                    </button>
                ))}
            </div>


          
            {selectedCategory && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedCategoryData?.tips.map((tip, index) => 
                       <PawCareTipsCard key={index} tip={tip}></PawCareTipsCard>
                    )}
                </div>
            )}
        </div>
    );
};

export default PawCareTips;
