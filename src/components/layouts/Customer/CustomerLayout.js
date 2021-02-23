// Dependency Imports
import React from 'react';

// Component Imports
import MainCustomer from '../../views/Customer/CustomerView';

// Component Styling Import
import './style/CustomerLayout.scss';


const CustomerLayout = ({match}) => {
    return (
        <div className="CustomerLayoutContainer">
            <MainCustomer/>
        </div>
    )
}

export default CustomerLayout;