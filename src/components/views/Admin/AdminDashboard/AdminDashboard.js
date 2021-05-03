import React, {useState, useEffect} from 'react';
import Content from './components/DashboardContent/AdminDashboardContent';
import Navigation from './components/AdminDashboardNavbar';
import './style/AdminDashboard.scss';

const Dashboard = ({routes}) => {

    const AdminInformationTemplate = {
        Username: '',
        Fullname: '',
        AuthType: ''
    }
    
    const [AdminInformation, SetAdminInformation] = useState(AdminInformationTemplate);

    useEffect(() => {
        SetAdminInformation({
            Username: localStorage.getItem('Username'),
            Fullname: '',
            AuthType: 'Admin',
            Token: localStorage.getItem('AccessToken')
        });
    },[]);

    return (
        // props.IsAuthenticated ? 
        <div className='DashboardContainer'>
            <Navigation
                routes = {routes}
            />            
            <Content
                AdminName = {AdminInformation.Username}
                AuthType = {AdminInformation.AuthType}
                AuthToken = {AdminInformation.Token}
            />
        </div>
    );
}

export default Dashboard;
