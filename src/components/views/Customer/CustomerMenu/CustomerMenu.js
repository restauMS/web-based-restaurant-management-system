import React, { useEffect, useState } from 'react';
import { Spring } from 'react-spring/renderprops';

// ? Component Imports
import CustomerLabel from '../../../common/Label/Label';
import CustomerButton from '../../../common/Button/Button';
import { FoodItemCardComponent as FoodCard, CheckoutFoodCard as CheckoutCard } from '../../../common/Card/Card';
import { CheckoutModal } from '../../../common/Modals/Modal';

// ? Asset Imports
import './style/Menu.scss';
import CheckoutIcon from '../../../../assets/button-assets/checkout-icon.png';

const CustomerMenu = props => {

    // ! Code to => util directory
    // ? Create a Builder for this maybe if there's time...
    const CurrentDate = new Date();
    const Day = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];
    const TodayDate = `${CurrentDate.getDate()}/${CurrentDate.getMonth()+1}/${CurrentDate.getFullYear()}`;
    const FetchMenuData = async() => {
        try {
            const Data = await fetch('/API/Customer/FetchMenuData', {
                method: 'POST'
            });
            return Data.json();
        } catch (error) {
            console.trace(error);
        }
    }
    const [ModalStatus, SetModalStatus] = useState(false);
    const [MenuList, SetMenuList] = useState([]);
    const [CheckoutList, SetCheckoutList] = useState([]);
    const {
        // eslint-disable-next-line
            CustomerAddress: Address,
            // eslint-disable-next-line
            CustomerContact: Contact,
            CustomerName: Name,
            // eslint-disable-next-line
            CustomerTable: Table
        } = props.LoggedData;

    // Fetch data from the Database
    useEffect(() =>{
        try {
            FetchMenuData()
            .then(Data => SetMenuList(Data))
            .catch(Error => console.trace(Error));
        } catch (error) {
            console.trace(error);
        }
    } , [CheckoutList]);

    if(props.Stage !== 2)
        return null;

    return (
        <div
            className = 'MenuContainer'
        >
            {
                ModalStatus ?
                    <CheckoutModal
                        ToCheckout = {CheckoutList}
                        SetModalStatus = {SetModalStatus}
                    />
                :
                    null
            }
            <div className="InnerContainer">
                <div className="HeaderContainer">
                    <CustomerLabel
                        LabelContent = {`Hello${Name.length > 0 ? `, ${props.LoggedData.CustomerName}` : ' 😊'}`}
                        Style = {{margin: '10px auto',textAlign: "start"}}
                    />
                    
                </div>
                <CustomerLabel
                    LabelContent = {`${Day[CurrentDate.getDay()]}, ${TodayDate}, Weather information unavailable at the moment`}
                    Style = {{fontSize: '17px', margin: '0 auto', textAlign: "start"}}
                />
                <div className="FoodMenuContainer">
                    {
                        MenuList.length <= 0 ?
                        <CustomerLabel
                            LabelContent = {`We're very sorry for this, the Menu seems to be empty 😢`}
                        />
                        :
                        MenuList.map(Dish => 
                        <FoodCard 
                            key={Dish.item_id}
                            FoodName = {Dish.item_name}
                            FoodPrice = {Dish.item_price}
                            isRounded = {false}
                            FoodCardFunction = {() => {SetCheckoutList([...CheckoutList, {Id: Dish.item_id, Name: Dish.item_name, Price: Dish.item_price}])}}
                        />)
                    }
                </div>
                <CustomerButton
                    isButtonLink = {false}
                    isButtonContrast = {true}
                    Style = {{minHeight: '65px', minWidth: '65px', backgroundImage: `url('${CheckoutIcon}')`, backgroundPosition: 'center', backgroundSize: 'auto', backgroundRepeat: "no-repeat"}}
                    ButtonFunction = {() => {
                        SetModalStatus(true)
                    }}
                />
            </div>
            <div className="CheckoutContainer">
                <CustomerLabel
                    LabelContent = "Checkout"
                    Style = {{fontSize: "clamp(25px, 30px, 40px)", margin: "25px auto"}}
                />
                <div className="CheckoutInnerContainer">
                    <div className="CheckoutList">
                        {
                            CheckoutList.map((Order, key) => 

                                <CheckoutCard
                                    key = {key}
                                />
                            )
                        }
                    </div>
                    <CustomerButton
                    ButtonContent = "Proceed"
                    isButtonContrast = {true}
                    />
                </div>
            </div>
        </div>
    );
}
export default CustomerMenu;