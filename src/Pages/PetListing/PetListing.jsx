import { useInfiniteQuery } from "@tanstack/react-query";
import Container from "../../Components/Reusable/Container";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import PetListingCard from "./PetListingCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import CardSkeleton from "../../Components/Reusable/CardSkeleton";
import Heading from "../../Components/Reusable/Heading";
import { useLocation } from "react-router-dom";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const PetListing = () => {
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 800);

  const { ref, inView } = useInView();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["allPets", { filter, search: debouncedSearch }],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await axiosPublic(
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

  if (isLoading) return <CardSkeleton></CardSkeleton>;
  if (error) return <div>Error: {error.message}</div>;

  // dynamic title
  if (location.pathname === "/petListing") {
    document.title = "Pawlogue | Pet Listing";
  }

  return (
    <div>
      <Heading title={"Available Pets For Adoption"}></Heading>
      <Container>
        <div>
          {/* Filters Section */}
          <div className="flex items-center gap-4 mb-6 justify-center">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search pets by name"
              className="border border-gray-300 rounded px-4 py-2 
              md:w-[400px] lg:w-[700px]
                bg-lCard dark:bg-dCard "
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 
                bg-lCard dark:bg-dCard "
            >
              <option value="">All Categories</option>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="rabbit">Rabbit</option>
              <option value="fish">Fish</option>
              <option value="reptile">Reptile</option>
              <option value="bird">Bird</option>
              <option value="livestock">Livestock</option>
            </select>
          </div>

          {/* Pet Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.pages.map((page) =>
              page.pets.map((pet) => (
                <PetListingCard key={pet?._id} pet={pet}></PetListingCard>
              ))
            )}
          </div>

          {/* Loader */}
          <div ref={ref} className="flex justify-center mt-6">
            {isFetchingNextPage ? (
              <div>Loading more...</div>
            ) : hasNextPage ? (
              <button
                onClick={() => fetchNextPage()}
                className="px-4 py-2 bg-blue-500
           text-white rounded"
              >
                Load More
              </button>
            ) : (
              <div>No more pets to load.</div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PetListing;
