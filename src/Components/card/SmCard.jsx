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
    <div className="bg-lCard dark:bg-dCard shadow-lg rounded-lg p-3 lg:p-6 flex flex-col justify-between h-full">
      {/* Image Section */}
      {image && (
        <img
          src={image}
          alt={altText || "Card Image"}
          className={
            imageClass || "w-20 lg:w-32 h-20 lg:h-32 rounded-full mx-auto"
          }
        />
      )}

      {/* Title Section */}
      {title && <h3 className="lg:text-xl font-semibold mb-4">{title}</h3>}

      {/* Description Section */}
      {description && (
        <p className="mb-4 text-xs lg:text-base">{description}</p>
      )}

      {/* Extra content if passed (e.g., tips for PawCareTipsCard) */}
      {extraContent}

      {/* Button Section */}
      {buttonText && buttonLink && (
        <div className="mt-auto">
          <FillBtn text={buttonText} link={buttonLink} />
        </div>
      )}

      {/* Children */}
      {children}
    </div>
  );
};

export default SmCard;
