/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const DonatorsModal = ({ campaignId, onClose }) => {
    const [donators, setDonators] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const fetchDonators = async () => {
            try {
                const response = await axiosSecure.get(`/donations/${campaignId}`);
                setDonators(response.data); 
            } catch (error) {
                console.error("Error fetching donators: ", error);
            }
        };

        fetchDonators();
    }, [campaignId, axiosSecure]);

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="text-gray-400 text-3xl hover:text-gray-600 absolute top-4 right-4"
                >
                    &times;
                </button>

                <h3 className="text-xl font-bold text-gray-800 mb-4">Donators List</h3>

                {/* Donator Table */}
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b text-left">Donor Email</th>
                            <th className="px-4 py-2 border-b text-left">Amount Donated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donators.map((donator) => (
                            <tr key={donator._id}>
                                <td className="px-4 py-2 border-b">{donator.donorEmail}</td>
                                <td className="px-4 py-2 border-b">${donator.donatedAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DonatorsModal;
