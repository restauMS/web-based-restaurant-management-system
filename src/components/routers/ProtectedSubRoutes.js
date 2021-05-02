import React from 'react'
import ProtectedRoutes from './Protected';

/*
* A special wrapper for <Route> that knows how to
* handle "sub"-routes by passing them in a `routes`
* prop to the component it renders.

function RouteWithSubRoutes(route) {
return (
    <Route
        path={route.path}
        render={props => (
        ? pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
    )}
    />
);
}
*/

const ProtectedSubRoutes = (ProtectedRoutes, ...rest) => {
    return (
        <ProtectedRoutes
            {...rest}
            path = {ProtectedRoutes.path}
            renders = { props => (
                <ProtectedRoutes.Component {...props} SubRoutes = {ProtectedRoutes.SubRoutes}/>
            )} 
        />
    );
}

export default ProtectedSubRoutes;
