import React from 'react';
import './style/Tester.scss';

import {CheckoutModal as Checkout, FoodModal as Food} from '../../common/Modals/Modal';

const ComponentTester = () => {
    return (
        <div className="TesterContainer">
            <Food/>
        </div>
    )
}

export default ComponentTester;