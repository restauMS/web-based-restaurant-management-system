import React from 'react';
import { Spring } from 'react-spring/renderprops';

import AlertCardIcon from '../../../assets/alert-card/warning-icon.png';
import './style/Card.scss';
/*
    * Alert Card Component
    ? Card Component responsible for warning users
*/
const AlertCardComponent = AlertProps => 
{
    return (
        <Spring
        from = {{opacity: 0, transform: 'translateX(-2000px)', transition: '0.5s ease-in-out'}}
        to = {{opacity: 1, transform: 'translateX(0px)'}}
        >
            {props =>
                <div className="AlertCard" style={{...props,...AlertProps.Style}}>
                    <img src={AlertCardIcon} alt="Red circle with exclamation point inside it"/>
                <h1>
                    {AlertProps.AlertTitle}!
                </h1>   
            </div>
            }
        </Spring>
        
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
            className = 
            {
                props.isTaken ? 'TableCard TableCardTaken' : 'TableCard'
            }
            onClick = 
            {
                props.TableIsChosen
            }
            >
                {props.isTaken ? 
                    <h1
                    style={{marginBottom: '20px'}}
                    >
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
            <div
            className={props.isRounded ? 'FoodItemCard FoodItemCardRounded' : 'FoodItemCard'}
            style = {{...props.Style}}
            >
                <h1>
                    Food Name: {props.FoodName}
                </h1>
                <h2>
                    Food Price: ₱{props.FoodPrice}
                </h2>
                {/* <h3>
                    Ingredients: {props.FoodIngredients}
                </h3> */}
            </div>
        )
}

export default AlertCardComponent;
