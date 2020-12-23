import React, { useEffect, useState } from 'react';

import CustomerLabel from '../../../common/Label/Label';
import {TableCardComponent as TableCard} from '../../../common/Card/Card';
// eslint-disable-next-line
import CustomerButton from '../../../common/Button/Button';


// * Test Data

const TestData = 
[
    {
        TableNumber: 0,
        TableIsTaken: false
    },
    {
        TableNumber: 1,
        TableIsTaken: true
    },
    {
        TableNumber: 2,
        TableIsTaken: false
    },
    {
        TableNumber: 3,
        TableIsTaken: false
    },
    {
        TableNumber: 4,
        TableIsTaken: true
    }
]

const CustomerLogTable = props => {
/*
 * This Component will need a backend service to grab available Tables from the database
*/


    // We'll grab the data from the backend as an array
    // eslint-disable-next-line
    const [AvailableTable, SetAvailableTable] = useState([]);

    useEffect(
        () => 
    {
        // Fetching data code goes here
    }, []);

    return props.LogPage !== 4 ? null : 
    (
    <div
        style = 
        {{
            'display': 'flex',
            'flexFlow': 'column wrap'
        }}
    >
    <CustomerLabel
        LabelContent = 'Choose your desired table 😊'
    />
    {TestData.map(items => 
        items.length < 0 ? 
        <CustomerLabel
            LabelContent={`Unfortunately there's no more tables available 😭`}
        />
        : 
        <TableCard
            key = {items.TableNumber}
            TableNumber = {items.TableNumber}
            isTaken = {items.TableIsTaken}
        /> 
        )
    }
    </div>);
}

export default CustomerLogTable;