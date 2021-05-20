import React from 'react';
import './style/Tester.scss';

import CustomerDineType from '../Customer/CustomerLog/CustomerForm/CustomerCount';

const ComponentTester = () => {
    return (
        <div className="TesterContainer">
            <CustomerDineType
                Name = 'Sean Christian Lozana'
            />
        </div>
    )
}

export default ComponentTester;