import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import NoData from "../Reusable/NoData";
import CardSkeleton from "../loading/CardSkeleton";
import Heading from "../Reusable/Heading";
import ContentCard from "../card/ContentCard";
import PetsCategoryBtn from "../button/PetsCategoryBtn";
// Define categories
const categories = [
  "cat",
  "dog",
  "rabbit",
  "fish",
  "reptile",
  "bird",
  "livestock",
  "Exotic Pets",
];

const PetsCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("cat");

  const {
    data: pets = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pets"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/pets`);
      return data;
    },
  });
  // Filter pets based on selected category
  const filteredPets = pets.filter(
    (pet) => pet?.category === selectedCategory && pet?.adopted === false,
  );
  // Handle error states
  if (isLoading) return <CardSkeleton />;
  if (error) return <div>Error loading pets data.</div>;

  return (
    <div className="mt-10">
      <Heading title={" Explore Pet Categories"}></Heading>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center mb-10 gap-4">
        {categories.map((category) => (
          <PetsCategoryBtn
            key={category}
            category={category}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </div>

      {/* Pets Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
        {filteredPets.length > 0 ? (
          filteredPets
            .slice(0, 5)
            .map((pet) => (
              <ContentCard
                key={pet?._id}
                image={pet?.image}
                name={pet?.name}
                age={pet?.age}
                location={pet?.location}
                link={`/petDetails/${pet?._id}`}
                buttonText="Details"
                detailsPath={`/petDetails/${pet?._id}`}
              ></ContentCard>
            ))
        ) : (
          <NoData title={"No pets found !"} />
        )}
      </div>
    </div>
  );
};

export default PetsCategory;
