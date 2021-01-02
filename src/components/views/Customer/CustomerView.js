import React, {useState} from 'react';

// Customer Logger View
import CustomerLog from './CustomerLog/CustomerLog';
import CustomerMenu from './CustomerMenu/CustomerMenu';

const CustomerView = () => {

        const [Stage, SetStage] = useState(1);
        
        const [LogData, SetLogData] = useState({});

        // eslint-disable-next-line
        const _nextStage = () => {
                SetStage(Stage >= 1 ? 2 : Stage + 1);
        }
        
        return (
                <div>       
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
        );
}

export default CustomerView;