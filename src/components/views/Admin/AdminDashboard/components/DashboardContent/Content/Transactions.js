import React , { useState, useContext} from 'react'
import '../style/Content.scss';

import Label from '../../../../../../common/Label/Label';
import { ListCard } from '../../../../../../common/Card/Card';
import { AdminContext } from '../../../../../../contexts/AdminContext';

const Transactions = () => {

    const { AllSessions } = useContext(AdminContext);

    return (
        <div className = "TransactionsContainer">
            <div className="TopBar">
                <Label
                    LabelContent = "Transactions"
                    isLabelContrast = {true}
                />
                <Label                    
                    LabelContent = {`Hello, ${localStorage.getItem("Username")}`}
                    Style = {{fontSize: 'clamp(20px, 30px, 40px)'}}
                    isLabelContrast = {true}
                />
            </div>
            <div className="TransactionListContainer">
                <div className="TransactionList">
                    {
                        AllSessions.length != 0 ?
                        AllSessions.map((Items, key) => 
                        <ListCard 
                            key = {key} 
                            CardContent = {Items.customer_name} 
                        />)
                        :
                        <Label
                        LabelContent = {`No recent transactions`}
                        Style = {{fontSize: 'clamp(7px, 14px, 21px)'}}
                        isLabelContrast = {false}
                    />
                    }
                </div>
            </div>
        </div>
    );
};

export default Transactions;
