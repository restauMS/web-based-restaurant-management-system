import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = (props) => {
    // ! Test fix
    const [AuthStatus, SetAuthStatus] = useState(localStorage.getItem("AuthStatus"));

    /**
     * @param {boolean} Status for setting the Authentication statclus of user
     */
    const LogIn = () => {
        SetAuthStatus(true);
    }

    const LogOff = () => {
        SetAuthStatus(false);
    }

    return (
        <AuthContext.Provider value={{AuthStatus, LogIn, LogOff}}>
            { props.children }
        </AuthContext.Provider>
    );
}

export default AuthContext;
