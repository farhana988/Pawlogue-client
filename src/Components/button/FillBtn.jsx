/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FillBtn = ({ text, link, additionalStyles = "" }) => {
  return (
    <Link
      to={link}
      className={`font-semibold px-4  py-1 rounded-tr-3xl rounded-bl-3xl rounded-lg 
        text-xs xl:text-sm bg-lBtn dark:bg-dBtn transition 
        transform hover:scale-105 ${additionalStyles}`}
    >
      {text || "Details"}
    </Link>
  );
};

export default FillBtn;
