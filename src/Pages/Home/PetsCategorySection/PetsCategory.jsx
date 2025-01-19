import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Container from "../../../Components/Reusable/Container";
import axios from "axios";
import { Link } from "react-router-dom";
import NoData from "../../../Components/Reusable/NoData";
import CardSkeleton from "../../../Components/Reusable/CardSkeleton";

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
        {/* Category Buttons */}
        <section className="max-w-7xl mx-auto p-6">
          <h2 className="text-3xl font-bold text-green-500 dark:text-red-600 text-center mb-8">
            Explore Pet Categories
          </h2>
          <div className="flex flex-wrap justify-center mb-6 gap-4">
            {["cat", "dog", "rabbit", "fish", "reptile", "bird"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } hover:bg-blue-400 transition duration-300`}
                >
                  {category}
                </button>
              )
            )}
          </div>

          {/* Pets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPets.length > 0 ? (
              filteredPets.map((pet) => (
                <div
                  key={pet._id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {pet.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Age: {pet.age} | Location: {pet.location}
                    </p>
                    <p className="text-sm text-gray-600">
                      {pet.shortDescription}
                    </p>
                    <Link
                      to={`/petDetails/${pet._id}`}
                      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className=" md:ml-80 lg:ml-[600px]">
                <NoData></NoData>
              </div>
            )}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default PetsCategory;
