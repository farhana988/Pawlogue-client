/* eslint-disable react/prop-types */
// import React from 'react';

const PetListingCard = ({allPets}) => {
    console.log(allPets.name)
    return (
        <div>
            {allPets.name}
        </div>
    );
};

export default PetListingCard;