import React, { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContext';
// {component: Component, routes, RedirectPath, ...rest}

const ProtectedRoute = (routes) => {

    const {AuthStatus} = useContext(AuthContext);

    return (
        <Route
            path = {routes.path}
            render = {renderProps => (
                AuthStatus
                ?
                <routes.component {...renderProps} routes = {routes.routes}/>
                :
                <Redirect
                    to = {{pathname: routes.RedirectPath}}
                />
            )}
        />
    );
}

export default ProtectedRoute;
