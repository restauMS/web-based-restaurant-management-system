import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    
    const AuthStatusLocal = localStorage.getItem("AuthStatus");

    const [AuthStatus, SetAuthStatus] = useState(AuthStatusLocal);

    const LogIn = (LoginStatus) => {
        SetAuthStatus(LoginStatus);
        localStorage.setItem("AuthStatus", LoginStatus);
    }

    const LogOff = () => {
        SetAuthStatus(false);
        localStorage.removeItem("AuthStatus");
        localStorage.removeItem("Username");
        localStorage.removeItem("AccessToken");
    }

    return (
        <AuthContext.Provider value={{AuthStatus, LogIn, LogOff}}>
            { props.children }
        </AuthContext.Provider>
    );
};
