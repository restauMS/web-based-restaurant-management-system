import React from 'react';
/*
    * Alert Card Component
    ? Card Component responsible for warning users
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
    * Order Card Component
    ? Card component responsible for taking specific notes for a specific dish ordered
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
    * Table Card Component
    ? Card component responsible for outputting Table availability
*/
export const TableCardComponent  = props => 
{
        return (
            <div key={props.key} className={props.isTaken ? 'TableCard' : 'TableCardTaken'}>
                <h1>
                    Table Card {props.TableNumber}
                </h1>
            </div>
        )
}

/*
    * Food Item Card Component
    ? 
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
