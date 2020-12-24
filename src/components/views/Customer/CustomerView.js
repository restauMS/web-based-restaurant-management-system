import React, {useState} from 'react';

// Customer Logger View
import CustomerLog from './CustomerLog/CustomerLog';

const CustomerView = () => {

        const [Stage, SetStage] = useState(1);
        
        // eslint-disable-next-line
        const _nextStage = () => {
                SetStage(Stage >= 1 ? 2 : Stage + 1);
        }
        return (
                <div>       
                        {Stage !== 1 
                                ? null : 
                                <CustomerLog
                                        Stage = {_nextStage}
                                />
                        }
                </div>
        );
}

export default CustomerView;