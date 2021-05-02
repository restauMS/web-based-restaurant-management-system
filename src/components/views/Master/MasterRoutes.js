import ServiceMenu from '../ServiceMenu/ServiceMenu';
import {CustomerOrder, CustomerCheckout} from '../../layouts/Customer/CustomerLayout';
import {AdminLogin, AdminDashboard} from '../../layouts/Admin/AdminLayout';
import {WorkerLogin, WorkerRegistration, WorkerDashboard} from '../../layouts/Worker/WorkerLayout';
import NotFound from '../NotFound/NotFound';

const MasterRoutes = [
    {
        path: '/',
        component: ServiceMenu,
        RouteType: 'public',
        AuthStatus: false,
        strict: true,
        exact: true,
    },
    {
        path: '/Customer/Order',
        component: CustomerOrder,
        RouteType: 'public',
        AuthStatus: false,
        strict: true,
        exact: true,
        routes: [
            {
                path: '/Customer/Checkout',
                component: CustomerCheckout,
                RouteType: 'public',
                AuthStatus: false,
                strict: true,
                exact: true
            }
        ]
    },
    {
        path: '/Admin/Login',
        component: AdminLogin,
        RouteType: 'authenticator',
        RedirectPath: '/Admin/Dashboard',
        strict: true,
        exact: true
    },
    {
        path: '/Admin/Dashboard',
        component: AdminDashboard,
        RouteType: 'protected',
        RedirectPath: '/Admin/Login',
        strict: true,
        exact: true,
        routes: [
            {
                path: '/Admin/Dashboard/Inventory',
                component: () => <h1>Inventory page</h1>,
                RouteType: 'protected',
                RedirectPath: '/Admin/Login',
                strict: true,
                exact: true
            },
            {
                path: '/Admin/Dashboard/Transactions',
                component: () => <h1>Transactions page</h1>,
                RouteType: 'protected',
                RedirectPath: '/Admin/Login',
                strict: true,
                exact: true
            },
            {
                path: '/Admin/Dashboard/Settings',
                component: () => <h1>Settings page</h1>,
                RouteType: 'protected',
                RedirectPath: '/Admin/Login',
                strict: true,
                exact: true
            }
        ]
    },
    {
        path: '/Worker/Login',
        component: WorkerLogin,
        RouteType: 'authenticator',
        RedirectPath: '/Worker/Dashboard',
        strict: true,
        exact: true
    },
    {
        path: '/Worker/Registration',
        component: WorkerRegistration,
        RouteType: 'authenticator',
        RedirectPath: '/Worker/Dashboard',
        strict: true,
        exact: true
    },
    {
        path: '/Worker/Dashboard',
        component: WorkerDashboard,
        RouteType: 'protected',
        RedirectPath: '/Worker/Login',
        strict: true,
        exact: true
    },
    {
        path: '/404',
        component: {NotFound},
        AuthStatus: false,
        RouteType: 'public',
        strict: true,
        exact: true,
    }
];

export default MasterRoutes;