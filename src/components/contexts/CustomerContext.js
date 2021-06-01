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
    const [ CustomerSessionStatus, SetCustomerSessionStatus ] = useState(false);
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

    const InitializeSession = (SessionStatus) => {
        SetCustomerSessionStatus(SessionStatus);
        sessionStorage.setItem('CustomerSessionStatus', SessionStatus);
    }

    const SetName = Name => {
        SetCustomerName(Name);
        sessionStorage.setItem('CustomerName', Name);
    }

    const SetDineType = DineType => {
        SetCustomerDineType(DineType);
        sessionStorage.setItem('CustomerDineType', DineType);
    }

    const SetCount = Count => {
        SetCustomerCount(Count);
        sessionStorage.setItem('CustomerCount', Count);
    }

    const SetAddress = Address => {
        SetCustomerAddress(Address);
        sessionStorage.setItem('CustomerAddress', Address);
    }

    const SetContacts = Contacts => {
        SetCustomerContacts(Contacts);
        sessionStorage.setItem('CustomerContacts', Contacts);
    }

    const SetTable = Table => {
        SetCustomerTable(Table);
        sessionStorage.setItem('CustomerTable', Table);
    }

    const SetCheckout = Checkout => {
        SetCustomerCheckout(Checkout);
        sessionStorage.setItem('CustomerCheckout', Checkout);    
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
        
        

    }, []);

    return (
        <CustomerContext.Provider value = {
            { 
                InitializeSession,
                Stage,
                _NextStage,
                _NextPage, 
                _BackPage, 
                PageCount, 
                OrderSession,
                CustomerName,
                CustomerCount, 
                CustomerAddress,
                CustomerContacts,
                CustomerTable,
                CustomerCheckout,
                SetDineType, 
                SetCount, 
                SetName, 
                SetAddress, 
                SetContacts, 
                SetTable, 
                SetCheckout, 
                MenuList,
                TableList 
            }
        }>
            {props.children}
        </CustomerContext.Provider>
    )
};