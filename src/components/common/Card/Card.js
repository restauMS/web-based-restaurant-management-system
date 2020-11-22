import React from 'react';

function AlertCardComponent(props){
    return(
        <div className="AlertCard">
            <h1>
                Alert Card
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
            isTaken = false
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

class FoodItemCardComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // Default Food Item Card Component value
            isRounded = false
        }
    }
    render(){
        return (
            <div className={this.state.isTaken ? 'FoodItemCard' : 'FoodItemCardRounded'}>
                <h1>
                    Food Card
                </h1>
            </div>
        )
    }
}


function SetCardType(PropCardType){
    switch(PropCardType){
        case 'Alert': {
            return <AlertCardComponent/>;
        }
        case 'OrderNote': {
            return <OrderNoteCardComponent/>;
        }
        case 'TableCard': {
            return <TableCardComponent/>;
        }
        case 'FoodCard': {
            return <FoodItemCardComponent/>
        }
    }
}

export default function Card(props) {
        // Funny code tbh this is very spaghetti lol xd, hardly scalable
        return SetCardType(props.CardType);
}