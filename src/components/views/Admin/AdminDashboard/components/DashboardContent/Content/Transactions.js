import React from 'react'
import '../style/Content.scss';

import Label from '../../../../../../common/Label/Label';
import { ListCard } from '../../../../../../common/Card/Card';

const Transactions = () => {
    return (
        <div className = "TransactionsContainer">
            <div className="TopBar">
                <Label
                    LabelContent = "Transactions"
                    isLabelContrast = {true}
                />
                <Label
                    // TODO: Create context to pass through all the Dashboard Content pages
                    LabelContent = {`Hello, ${localStorage.getItem("Username")}`}
                    Style = {{fontSize: 'clamp(20px, 30px, 40px)'}}
                    isLabelContrast = {true}
                />
            </div>
            <div className="TransactionListContainer">
                <div className="TransactionList">
                    {/* {
                        TestData.map((Items, key) => <ListCard key = {key} CardContent = {Items}/>)
                    } */}
                </div>
            </div>
        </div>
    );
};

export default Transactions;
