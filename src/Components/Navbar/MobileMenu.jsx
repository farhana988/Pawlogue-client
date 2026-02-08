/* eslint-disable react/prop-types */
const MobileMenu = ({ isMenuOpen, links }) => {
  return (
    isMenuOpen && (
      <div
        className="absolute md:hidden flex flex-col bg-ivory right-0 
    dark:bg-[#212121] text-black dark:text-white py-4 px-6 space-y-4"
      >
        {links}
      </div>
    )
  );
};

export default MobileMenu;
