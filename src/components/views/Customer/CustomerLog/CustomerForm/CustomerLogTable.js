// ! For testing --- Testing will determine if this will make it to the Production Build
// Important Imports
import React, { useEffect, useState } from 'react';
// Custom Component Imports
import CustomerLabel from '../../../../common/Label/Label';
import AlertCard, {TableCardComponent as TableCard} from '../../../../common/Card/Card';
//Utility Imports
// import TestData from '../TestData.json';

// eslint-disable-next-line
import CustomerButton from '../../../../common/Button/Button';

const CustomerLogTable = props => {
    // Constant for Max Table you can Aqcuire as a Group
    const MaxTablePerGroup = props.IsGroup ? 2 : 1;
    const [Count, SetCount] = useState(0);
    const [TableStatus, SetTableStatus] = useState(false);
    // We'll grab the data from the backend as an array
    // eslint-disable-next-line
    const [ AvailableTable, SetAvailableTable ] = useState([]);
    
    const FetchTableData = async() => {
        try {
            const Data = await fetch('/API/Customer/FetchAvailableTable', {method: 'POST'});
            return Data.json();
        } catch (error) {
            console.trace(error);
        }
    }
    
    useEffect(
        () => 
    {
        FetchTableData()
        .then(DataList => SetAvailableTable(DataList))
        .catch(Error => console.trace(Error));
    }, []);
    
    return props.LogPage !== 5 ? null : 
    (
        <div
            style = 
            {{
                display: 'flex',
                flexFlow: 'column',
                margin: 'auto',
                padding: '20px'
            }}
        >
            {/*Needs major refactoring, wrong usage of the Component */}
            {Count >= 1 || TableStatus ? 
            <AlertCard
            Style = {{zIndex: '1', position: 'absolute', top: '20px', left: '30px'}} 
            AlertTitle={Count >= 1 ? 'Table limit reached' : TableStatus ? 'Table is taken' : null}/> 
            : null
            }
            <CustomerLabel
                LabelContent = 'Choose your desired table'
            />
            <div
                style = 
                {
                    {
                        display: 'flex',
                        flexFlow: 'row wrap',
                        margin: '2px auto',
                        maxWidth: 'clamp(100%, 60%, 60%)',
                        justifyContent: 'space-evenly',
                    }
                }
            >
            {
                AvailableTable.length > 0 ?
                AvailableTable.map((items, key) => 
                    <TableCard
                        key = {key}
                        TableNumber = {items.id}
                        SeatType = {items.seat_no}
                        isTaken = {items.availability}
                        PropsTablecount
                        TableIsChosen = {
                            items.availability ? 
                                () => 
                                    {
                                        SetTableStatus(true);
                                        setTimeout(() => {
                                            SetTableStatus(false)
                                        }, 4000);
                                    }
                                    : 
                                () => 
                                    {
                                        if(Count < MaxTablePerGroup)
                                        {
                                            props.SetChosenCard(items.id);
                                            SetCount(Count + 1);
                                            items.availability = 1;
                                        }
                                    }
                        }
                    /> 
                )
                :
                <CustomerLabel
                LabelContent={`Something went wrong! 😭`}   
                />
            }
            </div>
            {Count <= 0 ? 
            null
            :
            <CustomerButton
                isButtonLink = {false}
                isButtonContrast = {true}
                ButtonContent = 'Proceed.'
                ButtonFunction = {props.ProceedFunction}
            />}
        </div>
    );
}

export default CustomerLogTable;