import React from 'react';

import CustomerLabel from '../../../common/Label/Label';
// eslint-disable-next-line
import CustomerButton from '../../../common/Button/Button';
import {FoodItemCardComponent as FoodCard} from '../../../common/Card/Card';

// Test data
import FoodList from './TestData.json';

// ! Code do be smelly

const CustomerMenu = props => {


    // ! put this code in the utility dir
    const CurrentDate = new Date();
    const Day = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];
    const TodayDate = `${CurrentDate.getDate()}/${CurrentDate.getMonth()+1}/${CurrentDate.getFullYear()}`;

    if(props.Stage !== 2)
        return null;

    return (
        // ? To form or not To form
        <form
        style = {{display: 'flex', flexFlow: 'row wrap'}}
        onSubmit = {
         e => {e.preventDefault()}
        }
        >
            <div
            style = {{display: 'flex', flexFlow: 'column', minHeight: '100vh', margin: 'auto 20px'}}
            >
                <CustomerLabel
                LabelContent = {`Hello${props.LoggedData.CustomerName.length > 0 ? `, ${props.LoggedData.CustomerName}` : ' 😊'}`}
                Style = {{margin: '10px auto',textAlign: "start"}}
                />
                <CustomerLabel
                LabelContent = {`${Day[CurrentDate.getDay()]}, ${TodayDate}, Weather information unavailable at the moment`}
                Style = {{fontSize: '22px', margin: '0 auto', textAlign: "start"}}
                />
                <div style = {{display: 'flex', flexFlow: 'row wrap', margin: 'auto', overflowY:'auto', maxHeight: '500px'}}>
                    {
                        FoodList.length <= 0 ?
                        <h1>Something went wrong with our system</h1>
                        :
                        FoodList.map(Dish => 
                        <FoodCard
                        key = {Dish.FoodId}
                        FoodName = {Dish.FoodName}
                        FoodPrice = {Dish.FoodPrice}
                        FoodIngredients = {Dish.FoodIngredients}
                        isRounded = {false}
                        />)
                    }
                </div>
            </div>
            <div
            style = {{display: 'flex', flexFlow: 'column row',margin: 'auto',minHeight: '100vh',backgroundColor: '#E56B6F'}}
            >
                <CustomerLabel
                    LabelContent = 'checkout'
                    isLabelContrast = {false}
                    Style = {{padding: '10px', fontSize: '20px'}}
                />
                <div
                style = {{backgroundColor: 'white', position: 'absolute', margin: 'auto', borderRadius: '20px',zIndex: '1'}}
                >
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </div>
            </div>
        </form>
    );
}


export default CustomerMenu;
