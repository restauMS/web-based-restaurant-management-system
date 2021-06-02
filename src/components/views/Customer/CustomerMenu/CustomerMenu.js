import React, { useEffect, useState, useContext } from 'react';
import CustomerLabel from '../../../common/Label/Label';
import CustomerButton from '../../../common/Button/Button';
import { CustomerContext } from '../../../contexts/CustomerContext';
import { FoodItemCardComponent as FoodCard, CheckoutFoodCard as CheckoutCard } from '../../../common/Card/Card';
import { CheckoutModal , FoodModal } from '../../../common/Modals/Modal';
import './style/Menu.scss';
import CheckoutIcon from '../../../../assets/button-assets/checkout-icon.png';

const CustomerMenu = props => {


    const { 
        Stage, 
        _NextStage,
        MenuList, 
        CustomerAddress: Address, 
        CustomerContact: Contact, 
        CustomerName: Name,
        CustomerTable: Table
    } = useContext(CustomerContext);

    // ! Code to => util directory
    // ? Create a Builder for this maybe if there's time...
    const CurrentDate = new Date();
    const Day = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];
    const TodayDate = `${CurrentDate.getDate()}/${CurrentDate.getMonth()+1}/${CurrentDate.getFullYear()}`;

    const [ ModalStatus , SetModalStatus ] = useState(false);
    const [ FoodModalStatus , SetFoodModalStatus ] = useState(false);
    const [ CurrentFoodFocus, SetFoodFocus ] = useState({});
    const [ CheckoutList, SetCheckoutList ] = useState([]);
    
    if(Stage !== 2)
        return null;    

    return (
        <div
            className = 'MenuContainer'
        >
            {
                ModalStatus ?
                    <CheckoutModal
                        CheckoutList = {CheckoutList}
                        SetCheckoutList = {SetCheckoutList}
                        SetModalStatus = {SetModalStatus}
                    />
                :
                    null
            }
            {
                FoodModalStatus ?
                    <FoodModal
                        FoodName = {CurrentFoodFocus.Name}
                        FoodPrice = {CurrentFoodFocus.Price}
                        FoodId = {CurrentFoodFocus.Id}
                        FoodCheckedOut = {CurrentFoodFocus.IsSelected}
                        SetFoodModalStatus = {SetFoodModalStatus}
                        SetCheckoutList = {SetCheckoutList}
                        CheckoutList = {CheckoutList}
                    />
                :
                    null
            }
            <div className="InnerContainer">
                <div className="HeaderContainer">
                    <CustomerLabel
                        LabelContent = {`Hello${Name.length > 0 ? `, ${Name}` : ' 😊'}`}
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
                        MenuList.map(({id, name, price}) => 
                        <FoodCard 
                            key={id}
                            FoodName = {name}
                            FoodPrice = {price}
                            isRounded = {false}
                            FoodCardFunction = {() => {
                                SetFoodModalStatus(true);
                                SetFoodFocus({Id: id, Name: name, Price: price});
                            }}
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
                                    id = {Order.Id}
                                    FoodName = {Order.Name}
                                    FoodQty = {Order.Price}
                                    CheckoutList = {CheckoutList}
                                    SetCheckoutList = {SetCheckoutList}
                                />
                            )
                        }
                    </div>
                    <CustomerButton
                        isButtonLink = {false}
                        ButtonContent = "Proceed"
                        isButtonContrast = {true}
                        ButtonFunction = {() => {
                            _NextStage();
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
export default CustomerMenu;