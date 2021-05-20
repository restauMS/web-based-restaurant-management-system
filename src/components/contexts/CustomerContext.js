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

    const [ MenuList , SetMenuList ] = useState([]);
    const [ OrderSession , SetOrderSession ] = useState(OrderSessionFormat);
    const [ PageCount , SetPageCount] = useState(1);

    const FetchMenuList = async() => {
        try {
            // ! For now use /Inventory/List endpoint
            const Data = await fetch('/API/Inventory/List', {
                method: 'POST'
        });
            return Data.json();
        } catch (error) {
            console.trace(error);
        }
    }

    const SetDineType = (Type) => {
        // SetOrderSession({CustomerDineType: Type});
        SetOrderSession(OrderSession.CustomerDineType = Type);
    }

    const SetCount = (Count) => {
        // SetOrderSession({CustomerCount: Count});
        SetOrderSession(OrderSession.CustomerCount = Count);
    }

    const SetName = (Name) => {
        // SetOrderSession({CustomerName: Name});
        SetOrderSession(OrderSession.CustomerName = Name);
    }

    const SetAddress = (Address) => {
        // SetOrderSession({CustomerAddress: Address});
        SetOrderSession(OrderSession.CustomerAddress = Address);
    }

    const SetContacts = (Contacts) => {
        // SetOrderSession({CustomerContacts: Contacts});
        SetOrderSession(OrderSession.CustomerContacts = Contacts);
    }

    const SetTable = (Table) => {
        // SetOrderSession({CustomerTable: Table});
        SetOrderSession(OrderSession.CustomerTable = Table);
    }

    const SetCheckout = (Checkout) => {
        // SetOrderSession({CustomerCheckout: Checkout});
        SetOrderSession(OrderSession.CustomerCheckout = Checkout);
    }
    
    // ? If the above code doesn't work we'll try storing data in sessionStorage and push it all at once upon completing the form
    // const GetOrderSessionDetails = ({ Name, Address, Contacts, Table, Checkout}) => {
    //     SetOrderSession({
    //         CustomerName: Name,
    //         CustomerAddress: Address,
    //         CustomerContacts: Contacts,
    //         CustomerTable: Table,
    //         CustomerCheckout: Checkout
    //     });
    // }

    const _NextPage = () => {
        SetPageCount(PageCount >= 1 ? 2 : PageCount + 1);
    }

    // ? Not sure yet...
    const _BackPage = () => {
        SetPageCount(PageCount <= 1 ? 1 : PageCount - 1);
    }


    useEffect(() => {
        FetchMenuList()
        .then(
            ({List}) => SetMenuList(List)
        )
        .catch(
            Error => console.trace(Error)
        );
    }, [])

    return (
        <CustomerContext.Provider value = {{ _NextPage , _BackPage , PageCount , OrderSession , SetName, SetAddress, SetContacts, SetTable, SetCheckout , SetDineType , SetCount , MenuList }}>
            {props.children}
        </CustomerContext.Provider>
    )
}