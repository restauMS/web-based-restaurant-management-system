import React from 'react';
import { Spring } from 'react-spring/renderprops';

import Label from '../../../../../../common/Label/Label';
import { ListCard } from '../../../../../../common/Card/Card';

const Transactions = () => {
    return (
        <Spring
        from = {{opacity: 0, transition: '0.1s ease-in-out'}}
        to = {{opacity: 1}}
        >
            {
                props => 
                <div className = "TransactionsContainer" style={{...props}}>
                    <div className="TopBar">
                        <Label
                            LabelContent = "Transactions"
                            isLabelContrast = {true}
                            Style = {{color: '#E56B6F'}}
                        />
                        <Label                    
                            LabelContent = {`Hello, ${localStorage.getItem("Username")}`}
                            Style = {{fontSize: 'clamp(20px, 30px, 40px)',color: '#E56B6F'}}
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
            }
        </Spring>
    );
}

export default Transactions;
