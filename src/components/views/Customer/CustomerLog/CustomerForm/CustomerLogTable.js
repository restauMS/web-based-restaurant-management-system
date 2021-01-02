// Important Imports
import React, { useEffect, useState } from 'react';
// Custom Component Imports
import CustomerLabel from '../../../../common/Label/Label';
import {TableCardComponent as TableCard} from '../../../../common/Card/Card';
//Utility Imports
import TestData from '../TestData.json';
import AlertCard from '../../../../common/Card/Card';

// eslint-disable-next-line
import CustomerButton from '../../../../common/Button/Button';


/*
 ! This Component will need a backend service to grab available Tables from the database
*/
const CustomerLogTable = props => {
    // Constant for Max Table you can Aqcuire as a Group
    const MaxTablePerGroup = 2;
    const [Count, SetCount] = useState(0);
    const TableIsTaken = () => {
        console.log('Table is taken sorry');
    } 

    // We'll grab the data from the backend as an array
    // eslint-disable-next-line
    const [ AvailableTable, SetAvailableTable ] = useState([]);

    useEffect(
        () => 
    {
        // Fetching data FROM DB code goes here
    }, []);

    return props.LogPage !== 4 ? null : 
    (
        <div
            style = 
            {{
                display: 'flex',
                flexFlow: 'column',
                margin: 'auto'
            }}
        >
            {Count >= 2 ? 
            <AlertCard 
            AlertTitle='Exceeded table limit'/> 
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
                        margin: '2px 20px',
                        justifyContent: 'space-evenly',
                    }
                }
            >
            {
                TestData.length > 0 ?
                TestData.map(items => 
                    <TableCard
                        key = {items.TableNumber}
                        TableNumber = {items.TableNumber}
                        SeatType = {items.SeatType}
                        isTaken = {items.TableIsTaken}
                        PropsTablecount
                        TableIsChosen = {
                            items.TableIsTaken ? 
                                () => 
                                    {
                                        TableIsTaken()
                                        SetCount(Count - 1);
                                        items.TableIsTaken = false;
                                    }
                                    : 
                                () => 
                                    {
                                        if(Count < MaxTablePerGroup)
                                        {
                                            props.SetChosenCard(items.TableNumber);
                                            SetCount(Count + 1);
                                            items.TableIsTaken = true;
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
            <CustomerButton
                isButtonContrast = {true}
                ButtonContent = 'Proceed.'
                ButtonFunction = {props.ProceedFunction}
            />
        </div>
    );
}

export default CustomerLogTable;