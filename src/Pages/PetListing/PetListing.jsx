import { useQuery } from "@tanstack/react-query";
import Container from "../../Components/Reusable/Container";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PetListing = () => {
  const axiosSecure = useAxiosSecure();
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const {
    data: allPets = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["allPets", filter, search],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/allPets?filter=${filter}&search=${search}`
      );

      return data;
    },
    onSuccess: (data) => {
      console.log("Successfully fetched allPets:", data);
    },
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(allPets);

  // format the date
  // const formatDate = (isoString) => {
  //     const options = { year: "numeric", month: "short", day: "numeric" };
  //     return new Date(isoString).toLocaleDateString(undefined, options);
  //   };

  return (
    <div className="pt-20">
    <Container>
      {/* Filters Section */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Update search state
          placeholder="Search pets by name"
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)} // Update filter state
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="">All Categories</option>
          <option value="reptile">Reptile</option>
          <option value="mammal">Mammal</option>
          <option value="bird">Bird</option>
          {/* Add other categories as needed */}
        </select>
      </div>

      {/* Pet Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPets
          .filter((pet) => pet.adopted === false) // Filter pets with adopted status 'false'
          .map((pet) => (
            <div
              key={pet?._id}
              className="border border-gray-300 rounded shadow-lg p-4 relative"
            >
              {/* image */}
              <img
                src={pet?.image}
                alt={pet?.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              {/* name */}
              <h3 className="text-lg font-semibold">{pet?.name}</h3>

              {/* location */}
              <p className="text-sm text-gray-500 flex gap-2">
                <FaLocationDot />
                {pet?.location}
              </p>

              {/* age */}
              <p
                className="absolute text-black font-semibold bg-red-400 px-5 py-1 
              rounded-bl-2xl
              top-0 right-0"
              >
                {pet?.age}
              </p>
              <button className="flex justify-end">
                <Link to={`/petDetails/${pet._id}`}>Pet details</Link>
              </button>
            </div>
          ))}
      </div>
    </Container>
  </div>
  );
};

export default PetListing;
