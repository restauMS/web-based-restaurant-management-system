import { createContext, useState, useEffect } from 'react';

export const AdminContext = createContext();

export const AdminProvider = (props) => {

    const authToken = localStorage.getItem('AccessToken');
    const user = localStorage.getItem('Username');

    const [ Data, SetData ] = useState({});
    const [ Inventory, SetInventory ] = useState([]);

    const GetData = async(User) => {
        try {
            const headers = new Headers();

            headers.append('Authorization', `Bearer ${authToken}`);
            headers.append('Content-Type', 'application/json');

            const Data = await fetch('/API/Admin/AdminData', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({'Username': User})
            });
            return Data.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const GetInventory = async() => {
        try {
            const Data = await fetch('/API/Inventory/List', {
                method: 'GET'
        });
            return Data.json();
        } catch (error) {
            console.trace(error);
        }
    };

    useEffect(() => {

        // Fetches inventory list
        GetInventory()
        .then(({List}) => SetInventory(List))
        .catch(err => console.trace(err));

        // Fetches admin agent data
        GetData(user)
        .then(({Data}) => SetData(Data[0]))
        .catch(err => console.trace(err));

    }, []);

    return (
        <AdminContext.Provider 
            value = {
                {
                    Data,
                    Inventory
                }
            }
        >
            {props.children}
        </AdminContext.Provider>
    );

}