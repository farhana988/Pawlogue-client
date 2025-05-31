/* eslint-disable react/prop-types */

const Container = ({ children, className = "" }) => {
  return (
    <div className={`container mx-auto px-5 xl:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
