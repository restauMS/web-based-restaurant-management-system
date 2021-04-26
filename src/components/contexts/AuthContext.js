import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = (props) => {
    // ! Test fix
    const [AuthStatus, SetAuthStatus] = useState(localStorage.getItem("AuthStatus"));

    const LogIn = () => {
        SetAuthStatus(true);
    }

    const LogOff = () => {
        SetAuthStatus(false);
        localStorage.removeItem("AuthStatus");
        localStorage.removeItem("Username")
        localStorage.removeItem("AccessToken")
    }

    return (
        <AuthContext.Provider value={{AuthStatus, LogIn, LogOff}}>
            { props.children }
        </AuthContext.Provider>
    );
}

export default AuthContext;
