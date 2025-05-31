import { useState } from "react";
import Heading from "../Reusable/Heading";
import SmCard from "../card/SmCard";
import { useLoaderData } from "react-router-dom";

const PawCareTips = () => {
  const { petCare = [] } = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState(
    petCare[0]?.category || null
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const selectedCategoryData = petCare.find(
    (category) => category.category === selectedCategory
  );

  return (
    <>
      <Heading title={"Paw Care Tips"}></Heading>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {/* category btn */}
        {petCare?.map((category) => (
          <button
            key={category.category}
            onClick={() => handleCategoryClick(category.category)}
            className={` rounded-full h-24 w-24
                lg:text-2xl 
                ${
                  selectedCategory === category.category
                    ? "bg-lBtn dark:bg-dBtn  "
                    : "bg-gray-200 dark:bg-dCard"
                } hover:bg-lBtn hover:dark:bg-dBtn  transition duration-300`}
          >
            <img
              src={category.image}
              alt={category.category}
              className="w-16 h-16 object-cover ml-4 rounded-full"
            />
          </button>
        ))}
      </div>
      {/* tips card  */}
      {selectedCategory && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
          {selectedCategoryData?.tips?.slice(0, 4)?.map((tip, index) => (
            <SmCard
              key={index}
              title={tip?.title}
              description={tip?.description}
              extraContent={null}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default PawCareTips;
