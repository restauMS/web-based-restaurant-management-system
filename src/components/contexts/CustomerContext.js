import { createContext, useState, useEffect } from 'react';

export const CustomerContext = createContext();

export const CustomerProvider = (props) => {

    const OrderSessionFormat = {
        CustomerDineType: null,
        CustomerCount: null,
        CustomerName: null,
        CustomerAddress: null,
        CustomerContacts: null,
        CustomerTable: 0,
        CustomerCheckout: []
    };

    const [ CustomerName, SetCustomerName ] = useState(null);
    const [ CustomerDineType, SetCustomerDineType ] = useState(null);
    const [ CustomerCount, SetCustomerCount ] = useState(null);
    const [ CustomerAddress, SetCustomerAddress ] = useState(null);
    const [ CustomerContacts, SetCustomerContacts ] = useState(0);
    const [ CustomerTable, SetCustomerTable ] = useState(0);
    const [ CustomerCheckout, SetCustomerCheckout ] = useState([]);
    const [ Stage, SetStage ] = useState(1);
    const [ OrderSession, SetOrderSession ] = useState(OrderSessionFormat);
    const [ PageCount, SetPageCount] = useState(1);
    const [ MenuList, SetMenuList ] = useState([]);
    const [ TableList, SetTableList ] = useState([]);

    const FetchTableList = async() => {
        try {
            const Data = await fetch('/API/Customer/Tables', {
                method: 'POST'
            });
            return Data.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const FetchMenuList = async() => {
        try {
            const Data = await fetch('/API/Inventory/List', {
                method: 'POST'
        });
            return Data.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const _NextStage = () => {
        SetStage(Stage >= 1 ? 2 : Stage + 1);
    }

    const _NextPage = () => {
        SetPageCount(PageCount >= 6 ? 7 : PageCount + 1);
    }

    // ? Not sure yet...
    const _BackPage = () => {
        SetPageCount(PageCount <= 1 ? 1 : PageCount - 1);
    }


    useEffect(() => {

        // grabs the Menu list from the /API/Inventory/List endpoint
        FetchMenuList()
        .then(
            ({List}) => SetMenuList(List)
        )
        .catch(
            Error => console.trace(Error)
        );

        // grabs the Table list from the /API/Customer/Tables endpoint
        FetchTableList()
        .then(
            Data => SetTableList(Data)
        )
        .catch(
            Error => console.trace(Error)
        );
        
    }, [])

    return (
        <CustomerContext.Provider value = {
            { 
                Stage,
                _NextStage,
                _NextPage, 
                _BackPage, 
                PageCount, 
                OrderSession,
                CustomerDineType, 
                CustomerCount, 
                CustomerName,
                CustomerAddress,
                CustomerContacts,
                CustomerTable,
                CustomerCheckout,
                SetCustomerDineType, 
                SetCustomerCount, 
                SetCustomerName, 
                SetCustomerAddress, 
                SetCustomerContacts, 
                SetCustomerTable, 
                SetCustomerCheckout, 
                MenuList,
                TableList 
            }
        }>
            {props.children}
        </CustomerContext.Provider>
    )
};