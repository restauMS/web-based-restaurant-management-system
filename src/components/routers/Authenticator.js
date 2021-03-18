import React from 'react';
import {Router, Redirect} from 'react-router-dom';

const AuthenticatorRoute = ({component: Component, RedirectPath,AuthenticationStatus, ...rest}) => {
    return (
        <Router
            {...rest}
            render = {RenderProps => {
                !AuthenticationStatus ?
                <Component {...RenderProps}/>
                :
                <Redirect
                    to = {{
                        pathname: RedirectPath
                    }}
                />
            }}
        />
    )
}

export default AuthenticatorRoute;
