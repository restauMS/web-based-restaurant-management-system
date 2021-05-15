import React, {useState} from 'react';
import { Spring } from 'react-spring/renderprops';
import CustomerLog from './CustomerLog/CustomerLog';
import CustomerMenu from './CustomerMenu/CustomerMenu';

const CustomerView = () => {

        const [Stage, SetStage] = useState(1);
        const [LogData, SetLogData] = useState({});
        // eslint-disable-next-line
        // * For evaluation
        // const [OrderData, SetOrderData] = useState({});

        const _nextStage = () => {
                SetStage(Stage >= 1 ? 2 : Stage + 1);
        }
        
        return (
                <Spring
                        from = {{opacity: 0, transition: '0.1s ease-in-out'}}
                        to = {{opacity: 1}}
                >
                {
                        props => 
                        <div style={{...props}}>       
                                <CustomerLog
                                        NextStage = {_nextStage}
                                        Stage = {Stage}
                                        LogData = {SetLogData}
                                />
                                <CustomerMenu
                                        Stage = {Stage}
                                        LoggedData = {LogData}
                                />
                        </div>
                }
        </Spring> 
        );
}

export default CustomerView;