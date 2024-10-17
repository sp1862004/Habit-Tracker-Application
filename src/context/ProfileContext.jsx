import  { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

export const useProfile = () => {
    return useContext(ProfileContext);
};

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState({
        name: 'Shailesh Patel',
        email: 'john@example.com',
        goal: 'Read 10 books a year',
        motivation: 'Keep pushing forward!',
    });

    const updateProfile = (newProfile) => {
        setProfile(newProfile);
    };

    return (
        <ProfileContext.Provider value={{ profile, updateProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};
