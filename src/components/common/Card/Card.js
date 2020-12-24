import React from 'react';
import './style/Card.scss';
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
            <div 
            className={props.isTaken ? 'TableCard TableCardTaken' : 'TableCard'}
            onClick = {props.TableIsChosen}
            >
                {props.isTaken ? 
                    <h1>
                        Occupied
                    </h1>
                    :
                    <span>
                        <h3
                        style={{marginBottom: '35px'}}
                        >
                            Table #{props.TableNumber}
                        </h3>
                        <h1>
                            Available 
                        </h1>
                        <p>
                            Seats: {props.SeatType}
                        </p>
                    </span>
                }
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
