import { createContext, useState } from 'react';

const AuthContext = createContext();

/*
Fix plan:
* Separate JS AuthStatus from AuthStatus for localStorage

*/

export const AuthProvider = (props) => {
    // ! Test fix
    const [AuthStatus, SetAuthStatus] = useState(localStorage.getItem("AuthStatus"));

    /**
     * @param {boolean} Status for setting the Authentication status of user
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
