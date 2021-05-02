import ControllerRouter from '../routers/Controller';

const RouteWithSubRoutes = (routes) => {
    return (
    <ControllerRouter
        {...routes}
    />
    );
}

export default RouteWithSubRoutes;