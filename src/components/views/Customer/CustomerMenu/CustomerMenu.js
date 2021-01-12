import React from 'react';
// Component Imports
import CustomerLabel from '../../../common/Label/Label';
import CustomerButton from '../../../common/Button/Button';
import {FoodItemCardComponent as FoodCard} from '../../../common/Card/Card';
// Testing Data Import
import FoodList from './TestData.json';
// Asset Imports
import './style/Menu.scss';
import CheckoutIcon from '../../../../assets/button-assets/checkout-icon.png';

// ! Code do be smelly
const CustomerMenu = props => {


    // ! put this code in the utility dir maybe
    const CurrentDate = new Date();
    const Day = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];
    const TodayDate = `${CurrentDate.getDate()}/${CurrentDate.getMonth()+1}/${CurrentDate.getFullYear()}`;

    if(props.Stage !== 2)
        return null;

    return (
        // ? To form or not To form
        <form
        className = 'MenuContainer'
        >
            <div className="InnerContainer">
                <div className="HeaderCheckoutContainer">
                    <CustomerLabel
                        LabelContent = {`Hello${props.LoggedData.CustomerName.length > 0 ? `, ${props.LoggedData.CustomerName}` : ' 😊'}`}
                        Style = {{margin: '10px auto',textAlign: "start"}}
                    />
                    <CustomerButton
                    isButtonContrast = {true}
                    Style = {{height: '10px', minWidth: '45px', backgroundImage: `url('${CheckoutIcon}')`, backgroundPosition: 'center', backgroundSize: 'cover'}}
                    />
                </div>
                <CustomerLabel
                    LabelContent = {`${Day[CurrentDate.getDay()]}, ${TodayDate}, Weather information unavailable at the moment`}
                    Style = {{fontSize: '15px', margin: '0 auto', textAlign: "start"}}
                />
                <div className="FoodMenuContainer">
                    {
                        FoodList.length <= 0 ?
                        <CustomerLabel
                            LabelContent = {`We're very sorry for this, the Menu seems to be empty 😢`}
                        />
                        :
                        FoodList.map(Dish => 
                        <FoodCard 
                            key={Dish.FoodId}
                            FoodName = {Dish.FoodName}
                            FoodPrice = {Dish.FoodPrice}
                            isRounded = {false}
                        />)
                    }
                </div>
            </div>
        </form>
    );
}


export default CustomerMenu;
