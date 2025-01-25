// import React from 'react';

import { Spinner } from "flowbite-react";

const LoadingSpinner = () => {
    return (
        <div  className="flex items-center justify-center w-full min-h-screen">
             <Spinner aria-label="Extra large spinner example" size="xl" />
            
        </div>
    );
};

export default LoadingSpinner;