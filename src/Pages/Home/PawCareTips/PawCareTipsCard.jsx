/* eslint-disable react/prop-types */
// import React from 'react';

const PawCareTipsCard = ({tip}) => {
    const {title,description,link}=tip||{}
    return (
        <div>
             <div className=" p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                            <p className="mb-4">{description}</p>
                            <a
                                href={link}
                                className="text-blue-500 hover:underline"
                            >
                                Learn more
                            </a>
                        </div>
        </div>
    );
};

export default PawCareTipsCard;