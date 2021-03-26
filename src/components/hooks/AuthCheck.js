import { useState } from 'react';

export const useAuth = () => {
const getAuth = () => {
const authStatus = localStorage.getItem('AuthStatus');
return authStatus;
};

const [AuthStatus, SetAuthStatus] = useState(getAuth());

const saveAuthStatus = authStatus => {
localStorage.setItem('AuthStatus', authStatus);
SetAuthStatus(authStatus.AuthStatus);
};

return {
SetAuthStatus: saveAuthStatus,
AuthStatus
}
}