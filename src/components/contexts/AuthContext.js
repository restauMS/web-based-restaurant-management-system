import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = (props) => {

    const [AuthStatus, SetAuthStatus] = useState(false);

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
