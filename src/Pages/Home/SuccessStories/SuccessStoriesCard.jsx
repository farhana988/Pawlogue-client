/* eslint-disable react/prop-types */
import Lottie from "lottie-react";
import quote from "../../../assets/lottie/quote.json";

const SuccessStoriesCard =  ({story
  }) => {
    const {name,
      description,
     } = story || {}
    return (
        <div>
        <div
        
         className="rounded-xl "
       >
         {/*  Image */}
         <div className="absolute w-14 lg:w-16">
           <Lottie animationData={quote}></Lottie>
         </div>
         {/*card details */}
         <div
           className="py-6 md:py-3 lg:py-6 px-3 lg:px-4 rounded-2xl bg-lCard
            dark:bg-dCard text-right"
         >
           <h3 className="text-sm md:text-lg lg:text-xl  font-semibold ">
             {name}
           </h3>
        
           <p
             className="italic mb-2 text-xs lg:text-sm ml-10"
             title={quote}
           >
             {description.substring(0, 60)}...
           </p>

        
         </div>
       </div>
   </div>
    );
};

export default SuccessStoriesCard;