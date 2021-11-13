import React, { createContext } from 'react';
import useFirebase from '../../Pages/hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const item = useFirebase();
    return (
        <AuthContext.Provider value={item}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;