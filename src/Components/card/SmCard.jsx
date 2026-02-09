/* eslint-disable react/prop-types */
import FillBtn from "../button/FillBtn";

const SmCard = ({
  image,
  title,
  description,
  extraContent,
  buttonText,
  buttonLink,
  imageClass,
  altText,
  children,
}) => {
  return (
    <div
      className="bg-lCard dark:bg-dCard shadow-lg rounded-lg p-3 lg:p-6 flex flex-col
     justify-between h-full"
    >
      {/* Image Section */}
      {image && (
        <img
          src={image}
          alt={altText || "Card Image"}
          className={
            imageClass || "w-20 xl:w-32 h-20 xl:h-32 rounded-full mx-auto"
          }
        />
      )}

      {/* Title Section */}
      {title && <h3 className="xl:text-lg font-semibold mb-2">{title}</h3>}

      {/* Description Section */}
      {description && <p className="mb-2 text-xs">{description}</p>}
      {/* Extra content if passed (e.g., tips for PawCareTipsCard) */}
      {extraContent && <p className="mb-2 text-xs">{extraContent}</p>}

      {/* Button Section */}
      {buttonText && buttonLink && (
        <div className="mt-2">
          <FillBtn text={buttonText} link={buttonLink} />
        </div>
      )}

      {/* Children */}
      {children}
    </div>
  );
};

export default SmCard;
