import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Container from "../../../Components/Reusable/Container";
import axios from "axios";
import NoData from "../../../Components/Reusable/NoData";
import CardSkeleton from "../../../Components/loading/CardSkeleton";
import Heading from "../../../Components/Reusable/Heading";
import PetsCategoryCard from "./PetsCategoryCard";

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

  const filteredPets = pets.filter(
    (pet) => pet.category === selectedCategory && pet.adopted === false
  );

  if (isLoading) return <CardSkeleton></CardSkeleton>;
  if (error) return <div>Error loading pets data.</div>;

  return (
    <div>
      <Container>
        <section className="max-w-7xl mx-auto ">
          <Heading title={" Explore Pet Categories"}></Heading>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center mb-10 gap-4 p-6">
            {[
              "cat",
              "dog",
              "rabbit",
              "fish",
              "reptile",
              "bird",
              "livestock",
              "Exotic Pets",
            ].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 md:px-5 lg:px-8 py-1  rounded-tr-3xl rounded-bl-3xl rounded-lg
                   border-2 border-lBtn
                   dark:border-dBtn
                     text-sm md:text-base lg:text-2xl ${
                        selectedCategory === category
                          ? "bg-lBtn dark:bg-dBtn  text-white"
                          : "bg-gray-200 text-gray-700 dark:bg-dCard dark:text-ivory"
                      } hover:bg-lBtn hover:dark:bg-dBtn  transition duration-300`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Pets Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {filteredPets.length > 0 ? (
              filteredPets.slice(0, 4).map((pet) => (
                <PetsCategoryCard
                key={pet._id}
                pet={pet}
                ></PetsCategoryCard>
              ))
            ) : (
              <div className=" ">
                <NoData title={"No pets found !"}></NoData>
              </div>
            )}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default PetsCategory;
