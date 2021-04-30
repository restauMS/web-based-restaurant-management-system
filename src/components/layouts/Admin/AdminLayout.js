import { AdminLogin, AdminDashboard } from '../../views/Admin/AdminView';

// Styling import
import './style/AdminLayout.scss';

const AdminServiceRoutes = [
    {
        path: '/Admin/Login',
        component: AdminLogin,
        RouteType: 'authenticator',
        RedirectPath: '/Admin/Dashboard',
    }
    ,
    {
        path: '/Admin/Dashboard',
        component: AdminDashboard,
        RouteType: 'protected',
        RedirectPath: '/Admin/Login',
    }
]

export default AdminServiceRoutes;
