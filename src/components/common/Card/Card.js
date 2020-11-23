import React from 'react';

function AlertCardComponent(props){
    return(
        <div className="AlertCard">
            <h1>
                {props.PropObject.Title}
            </h1>
        </div>
    )
}
function OrderNoteCardComponent(props){
    return (
        <div className="OrderNoteCard">
            <h1>
                Order Note Card
            </h1>
        </div>
    )
}

class TableCardComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // Default Table Card Component value
            isTaken: false
        }
    }
    render(){
        return (
            <div className={this.state.isTaken ? 'TableCard' : 'TableCardTaken'}>
                <h1>
                    Table Card
                </h1>
            </div>
        )
    }
}

function FoodItemCardComponent(props){
        return (
            <div className={props.PropObject.isRounded ? 'FoodItemCard' : 'FoodItemCardRounded'}>
                <h1>
                    Food Card
                </h1>
            </div>
        )
}

/*
 @param PropCardType 
 * Pass in a String indicating what type of Card are we trying to Render
 ? returns a Sub Component

 @param SubPropObject
 * Pass in an Object that will contain Props for the Sub Components
 ? returns an Object
*/
function SetCardType(PropCardType, SubPropObject){
    switch(PropCardType){
        case 'Alert': {
            return <AlertCardComponent
                    PropObject={SubPropObject}
                    />;
        }
        case 'OrderNote': {
            return <OrderNoteCardComponent
                    PropObject={SubPropObject}
                    />;
        }
        case 'TableCard': {
            return <TableCardComponent
                    PropObject={SubPropObject}
                    />;
        }
        case 'FoodCard': {
            return <FoodItemCardComponent
                    PropObject={SubPropObject}
                    />
        }
        default:
            return <h1>Something definitely went wrong :C</h1>
    }
}

export default function Card(props) {
        // Funny code tbh this is very spaghetti lol xd, hardly scalable but it works nonetheless
        return SetCardType(props.CardType, props.SubPropObject);
}