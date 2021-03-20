import React from 'react';
import {Route} from 'react-router-dom';

// Component Imports
import AuthenticatorRoute from './Authenticator';
import ProtectedRoute from './Protected';

const ControllerRouter = ({RouteType, ...RouteProps}) => {

    return (
        <>
            {
                RouteType === 'public' &&
                <Route
                    {...RouteProps}
                />
            }
            {(RouteType === 'authenticator') && <AuthenticatorRoute {...RouteProps}/>}
            {(RouteType === 'protected') && <ProtectedRoute {...RouteProps}/>}
        </>
    );
}

export default ControllerRouter;