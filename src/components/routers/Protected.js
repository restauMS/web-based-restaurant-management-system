import React, { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';


const ProtectedRoute = ({component: Component, route, RedirectPath, ...rest}) => {

    const {AuthStatus} = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render = {renderProps => (
                AuthStatus
                ?
                <Component {...renderProps} routes = {route.routes}/>
                :
                <Redirect
                    to = {{pathname: RedirectPath}}
                />
            )}
        />
    );
}

export default ProtectedRoute;
