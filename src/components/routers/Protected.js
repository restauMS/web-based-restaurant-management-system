import React from 'react';
import {Router, Redirect} from 'react-router-dom';

const ProtectedRoute = ({component: Component, AuthenticationStatus, RedirectPath, ...rest}) => {
    return (
        <Router
            {...rest}
            render = {RenderProps => {
                !AuthenticationStatus
                ?
                <Component {...RenderProps}/>
                :
                <Redirect
                    to = {{pathname: RedirectPath}}
                />
            }}
        />
    );
}

export default ProtectedRoute;
