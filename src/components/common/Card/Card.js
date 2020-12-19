import React from 'react';

/*
 * Alert Card Component
 ? Alert card for important pieces of information like Warnings, Heads up, and Errors.
*/
const AlertCardComponent = props => 
{
    return (
        <div className="AlertCard">
            <h1>
                {props.Title}
            </h1>
        </div>
    )
}

/*
 *
 
*/
export const OrderNoteCardComponent = props => 
{
    return (
        <div className="OrderNoteCard">
            <h1>
                Order Note Card
            </h1>
        </div>
    )
}

/*
 *
 
*/
export const TableCardComponent  = props => 
{
        return (
            <div className={props.isTaken ? 'TableCard' : 'TableCardTaken'}>
                <h1>
                    Table Card
                </h1>
            </div>
        )
}
/*
 * 
 
*/
export const FoodItemCardComponent = props => 
{
        return (
            <div className={props.isRounded ? 'FoodItemCard' : 'FoodItemCardRounded'}>
                <h1>
                    Food Card
                </h1>
            </div>
        )
}

export default AlertCardComponent;
