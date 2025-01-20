import { useEffect, useState } from "react";
import PawCareTipsCard from "./PawCareTipsCard";
import Heading from "../../../Components/Reusable/Heading";
import Container from "../../../Components/Reusable/Container";
import Swal from "sweetalert2";

const PawCareTips = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("./petCare.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);

        setSelectedCategory(data[0]?.category);
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error fetching data. Please try again later.',
         
        });
        
        });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const selectedCategoryData = data.find(
    (category) => category.category === selectedCategory
  );

  return (
    <div className="">
      <Heading title={"Pet Care Tips"}></Heading>
      <Container>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {/* category btn */}
          {data?.map((category) => (
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

        {selectedCategory && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedCategoryData?.tips?.slice(0,6)?.map((tip, index) => (
              <PawCareTipsCard key={index} tip={tip}></PawCareTipsCard>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default PawCareTips;
