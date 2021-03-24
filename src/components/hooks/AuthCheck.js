import {useEffect, useState} from 'react';

export const useAuthCheck = () => {
    // Is in a state of constant checking...
    const [AuthCheck, IsAuthChecking] = useState(true);
    // Holds the Auth state value
    const [AuthResult, SetAuthResult] = useState(false);
    
    return {}
}