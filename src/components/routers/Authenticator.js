import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const AuthenticatorRoute = ({component: Component, AuthStatus, RedirectPath,...rest}) => {
    return (
        <Route
            {...rest}
            render = {RenderProps => {
                !AuthStatus ?
                <Component {...RenderProps}/>
                :
                <Redirect
                    to = {{pathname: RedirectPath}}
                />
            }}
        />
    )
}

export default AuthenticatorRoute;
