import { useInfiniteQuery,} from "@tanstack/react-query";
import Container from "../../Components/Reusable/Container";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
const PetListing = () => {
  const axiosSecure = useAxiosSecure();
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const { ref, inView } = useInView(); 

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["allPets", { filter, search }],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await axiosSecure(
        `/allPets?filter=${filter}&search=${search}&page=${pageParam}&limit=6`
      );
      return data;
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
  });

 
  if (inView && hasNextPage) {
    fetchNextPage();
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="pt-20">
    <Container>
      {/* Filters Section */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search pets by name"
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
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
        {data.pages.map((page) =>
          page.pets.map((pet) => (
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
                Age: {pet?.age}
              </p>
              <button className="flex justify-end">
                <Link to={`/petDetails/${pet._id}`}>Pet details</Link>
              </button>
            </div>
          ))
        )}
      </div>

      {/* Loader */}
      <div ref={ref} className="flex justify-center mt-6">
        {isFetchingNextPage ? (
          <div>Loading more...</div>
        ) : hasNextPage ? (
          <button onClick={() => fetchNextPage()} className="px-4 py-2 bg-blue-500
           text-white rounded">
            Load More 
          </button>
        ) : (
          <div>No more pets to load.</div>
        )}
      </div>
    </Container>
  </div>
  );
};

export default PetListing;
