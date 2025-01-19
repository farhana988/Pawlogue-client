import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Container from "../../../Components/Reusable/Container";
import axios from "axios";
import { Link } from "react-router-dom";
import NoData from "../../../Components/Reusable/NoData";
import CardSkeleton from "../../../Components/Reusable/CardSkeleton";
import Heading from "../../../Components/Reusable/Heading";
import { FaLocationDot } from "react-icons/fa6";

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
                className={`px-5 lg:px-8 py-2 rounded-full border-2 border-lBtn dark:border-dBtn
                      lg:text-2xl ${
                        selectedCategory === category
                          ? "bg-lBtn dark:bg-dBtn  text-white"
                          : "bg-gray-200 text-gray-700"
                      } hover:bg-lBtn hover:dark:bg-dBtn  transition duration-300`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Pets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPets.length > 0 ? (
              filteredPets.slice(0,3).map((pet) => (
                <div
                  key={pet._id}
                  className="bg-lCard dark:bg-dCard  shadow-lg rounded-lg overflow-hidden 
                  hover:shadow-xl relative
                  transition-shadow duration-300"
                >
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-semibold  mb-2">
                      {pet.name?.substring(0, 30)}
                    </h3>

                    {/* age */}
                    <p
                      className="absolute text-black font-semibold  px-5 py-1 
                        rounded-bl-2xl z-10 bg-lBtn dark:bg-dBtn
                        top-0 right-0"
                    >
                      Age: {pet?.age}
                    </p>
                    <p className="text-sm lg:text-base flex gap-2 my-2">
                      <FaLocationDot /> {pet.location?.substring(0, 35)}
                    </p>
                    <p className="text-sm mb-5">
                      {pet.shortDescription?.substring(0, 40)}
                    </p>
                    <Link
                      to={`/petDetails/${pet._id}`}
                      className="mt-4 font-semibold px-5 py-2 rounded-full
                text-sm lg:text-base 
               bg-lBtn dark:bg-dBtn"
                    >
                      Details
                    </Link>
                  </div>
                </div>
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
