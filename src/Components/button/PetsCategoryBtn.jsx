/* eslint-disable react/prop-types */
const PetsCategoryBtn = ({
  category,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <button
      onClick={() => setSelectedCategory(category)}
      className={`px-3 md:px-5 py-0 rounded-tr-3xl rounded-bl-3xl rounded-lg
      border-2 border-lBtn dark:border-dBtn
      text-sm md:text-base ${
        selectedCategory === category
          ? "bg-lBtn dark:bg-dBtn text-white"
          : "bg-gray-200 text-gray-700 dark:bg-dCard dark:text-ivory"
      } hover:bg-lBtn hover:dark:bg-dBtn transition duration-300`}
    >
      {category}
    </button>
  );
};

export default PetsCategoryBtn;
