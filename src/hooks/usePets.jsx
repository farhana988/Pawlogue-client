// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePets = () => {
    const {data: pet = [], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'], 
        queryFn: async() =>{
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/pet`)
           
            return res.data;
        }
    })
    return [pet, loading, refetch]
};

export default usePets;