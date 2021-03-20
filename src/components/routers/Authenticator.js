import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const AuthenticatorRoute = ({component: Component, AuthStatus, RedirectPath,...rest}) => {
    // ! Testing however it does work... Not desirable approach
    const WrappedRedirect = () => {
        return <Redirect to = {{pathname: RedirectPath}}/>
    }
    return (
        <Route
            {...rest}
            component = { !AuthStatus ? Component : WrappedRedirect}
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
