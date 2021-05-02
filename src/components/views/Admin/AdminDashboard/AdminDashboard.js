import React, {useState, useEffect} from 'react';
import {Switch} from 'react-router-dom';
import Protected from '../../../routers/Protected';

// Component Imports
import Content from './components/DashboardContent/AdminDashboardContent';
import Navigation from './components/AdminDashboardNavbar';

// Styling Import
import './style/AdminDashboard.scss';
import ProtectedRoute from '../../../routers/Protected';


const InventoryTest = () => {
    return (
        <div>
            Hello, Inventory here!
        </div>
    )
}

const Dashboard = ({Routes}) => {

    /* 
        ! TESTING PHASE
    */
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
            <Navigation/>            
            <Content
                AdminName = {AdminInformation.Username}
                AuthType = {AdminInformation.AuthType}
                AuthToken = {AdminInformation.Token}
            />
            <Switch>
                
            </Switch>
        </div>
    );
}

export default Dashboard;
