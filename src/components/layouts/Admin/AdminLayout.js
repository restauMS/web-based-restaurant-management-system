import { AdminLogin, AdminDashboard } from '../../views/Admin/AdminView';

// Styling import
import './style/AdminLayout.scss';

const AdminServiceRoutes = [
    {
        path: '/Admin/Login',
        component: () => <div className="AdminLayoutContainer"><AdminLogin/></div>,
        RouteType: 'authenticator',
        RedirectPath: '/Admin/Dashboard',
    }
    ,
    {
        path: '/Admin/Dashboard',
        component: () => <div className="AdminLayoutContainer"><AdminDashboard/></div>,
        RouteType: 'protected',
        RedirectPath: '/Admin/Login',
        SubRoutes: [
            {
                path: '/Admin/Dashboard/Inventory',
                component: () => <h1>Inventory Page</h1>,
                RouteType: 'protected',
                RedirectPath: '/Admin/Login'
            },
            {
                path: '/Admin/Dashboard/Transactions',
                component: () => <h1>Transactions Page</h1>,
                RouteType: 'protected',
                RedirectPath: '/Admin/Login'
            },
            {
                path: '/Admin/Dashboard/Settings',
                component: () => <h1>Settings Page</h1>,
                RouteType: 'protected',
                RedirectPath: '/Admin/Login'
            }
        ]
    }
]

export default AdminServiceRoutes;
