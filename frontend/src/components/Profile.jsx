import React from 'react';
import { useAuth } from '../context/AuthProvider';

const Profile = () => {
    const [authUser] = useAuth();

    return (
        <div className="flex items-start justify-center min-h-screen colous p-8">
            <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-3xl">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    Welcome, {authUser?.name}!
                </h1>
                <p className="text-gray-600 text-lg mb-4">
                    We're glad to have you here.
                </p>
                <div className="text-left">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-1">Profile Details</h2>
                    <p className="text-gray-600">
                        <span className="font-medium">Email:</span> {authUser?.email}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
