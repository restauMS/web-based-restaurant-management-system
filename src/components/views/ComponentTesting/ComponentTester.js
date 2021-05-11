import React from 'react';
import './style/Tester.scss';

import {CheckoutModal as Checkout} from '../../common/Modals/Modal';

const ComponentTester = () => {
    return (
        <div className="TesterContainer">
            <Checkout/>
        </div>
    )
}

export default ComponentTester;