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

// Todo: Update Comment
function SetCardType(CardType){
    switch(CardType.TypeOfCard){
        case 'Alert': {
            return <AlertCardComponent
                    PropObject={CardType.SubCardProps}
                    />;
        }
        case 'OrderNote': {
            return <OrderNoteCardComponent
                    PropObject={CardType.SubCardProps}
                    />;
        }
        case 'TableCard': {
            return <TableCardComponent
                    PropObject={CardType.SubCardProps}
                    />;
        }
        case 'FoodCard': {
            return <FoodItemCardComponent
                    PropObject={CardType.SubCardProps}
                    />
        }
        default:
            return <h1>Something definitely went wrong :C</h1>
    }
}
/*
    @param props

*/
export default function Card(CardType) {
        // Funny code tbh this is very spaghetti lol xd, hardly scalable but it works nonetheless
        return SetCardType(CardType);
}