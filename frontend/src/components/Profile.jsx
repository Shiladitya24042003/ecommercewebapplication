import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import axios from 'axios';

const Profile = () => {
    const [authUser] = useAuth();
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:4001/getUser/get', { userId: authUser.name });
                console.log("Fetched user data:", response.data);
                setUserDetails(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        if (authUser?.name) {  // Assuming `name` identifies the user
            fetchUserData();
        }
    }, [authUser]);

    

    return (
        <div className="flex items-start justify-center min-h-screen colous p-8">
            <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-3xl">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    Welcome, {userDetails?.name || "Guest"}!
                </h1>
                <p className="text-gray-600 text-lg mb-4">
                    We're glad to have you here.
                </p>
                <div className="text-left">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-1">Profile Details</h2>
                    <p className="text-gray-600">
                        <span className="font-medium">Email:</span> {userDetails?.email || "Not available"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
