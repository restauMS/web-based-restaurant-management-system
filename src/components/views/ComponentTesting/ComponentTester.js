import React from 'react';
import './style/Tester.scss';

import {CheckoutModal as Checkout, 
        FoodModal as Food, 
        ItemModal as Item, 
        ModifyItemModal as ModifyItem,
        ModifyInventoryItemModal as ModifyInventoryItem,
        OrderTransactionModal as TransactionModal
    } from '../../common/Modals/Modal';

const ComponentTester = () => {
    return (
        <div className="TesterContainer">
            <Item/>
        </div>
    )
}

export default ComponentTester;