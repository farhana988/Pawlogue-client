/* eslint-disable react/prop-types */



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
        
         {/*card details */}
         <div
           className="py-2 md:py-3 lg:py-6 px-3 lg:px-4 rounded-2xl bg-lCard
            dark:bg-dCard text-right"
         >
           <h3 className="text-sm md:text-lg lg:text-xl  font-semibold ">
             {name}
           </h3>
        
           <p
             className="italic mb-2 text-xs lg:text-sm"
             title={description}
           >
             {description.substring(0, 50)}
           </p>

        
         </div>
       </div>
   </div>
    );
};

export default SuccessStoriesCard;