// Important Imports
import React, { useEffect, useState } from 'react';

// Custom Component Imports
import CustomerLabel from '../../../common/Label/Label';
import {TableCardComponent as TableCard} from '../../../common/Card/Card';

//Utility Imports
import TestData from './TestData.json';
import NumberGenerator from '../../../../utils/TableNumberGenerator';

// eslint-disable-next-line
import CustomerButton from '../../../common/Button/Button';


const CustomerLogTable = props => {

    const ProceedStyle = 
    {
        margin: '10px auto'
    }

    const TableIsTaken = () => {
        console.log('Table is taken sorry');
    }

/*
 * This Component will need a backend service to grab available Tables from the database
*/

    // We'll grab the data from the backend as an array
    // eslint-disable-next-line
    const [ AvailableTable, SetAvailableTable ] = useState([]);

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
                display: 'flex',
                flexFlow: 'column',
            }}
        >
            <CustomerLabel
                LabelContent = 'Choose your desired table'
            />
            <div
                style = 
                {
                    {
                        display: 'flex',
                        flexFlow: 'row wrap',
                        margin: '20px',
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
                        TableIsChosen = {
                            items.TableIsTaken ? 
                                TableIsTaken 
                                    : 
                                    /* 
                                    ? What this does:
                                    * If the Customer accidentally presses the proceed button
                                    ! to continue...
                                    */

                                () => props.SetChosenCard(items.TableNumber <= 0 ? NumberGenerator(TestData.length) : TestData.filter(AvailableTable => {return AvailableTable.TableIsTaken ? NumberGenerator(TestData.length) : AvailableTable.TableNumber}))
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
                Style = {ProceedStyle}
                ButtonFunction = {props.ProceedFunction}
            />
        </div>
    );
}

export default CustomerLogTable;