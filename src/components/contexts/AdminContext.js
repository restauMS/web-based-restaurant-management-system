import { createContext, useState, useEffect } from 'react';

export const AdminContext = createContext();

export const AdminProvider = (props) => {

    const authToken = localStorage.getItem('AccessToken');
    const user = localStorage.getItem('Username');

    const [ Data, SetData ] = useState({});
    const [ Inventory, SetInventory ] = useState([]);
    const [ ActiveSessions, SetActiveSessions ] = useState([]);
    const [ AllSessions, SetAllSessions ] = useState([]);

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

    const GetSessions = async() => {
        try {
            const headers = new Headers();

            headers.append('Authorization', `Bearer ${authToken}`);

            const Data = await fetch('/API/Admin/Sessions', {
                method: 'GET',
                headers: headers
            });
            return Data.json();
        } catch (error) {
            console.trace(error);
        }
    }

    const GetActiveSessions = async() => {
        try {
            const headers = new Headers();

            headers.append('Authorization', `Bearer ${authToken}`);

            const Data = await fetch('/API/Admin/SessionsActive', {
                method: 'GET',
                headers: headers
            });
            return Data.json();
        } catch (error) {
            console.trace(error);
        }
    }

    const AsyncAddItem = async(Name, Type, InitQty, InitPrice) => {
        try {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const Result = await fetch('/API/Inventory/New', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    "Name": Name,
                    "Type": Type,
                    "InitQty": InitQty,
                    "InitPrice": InitPrice
                })
            });
            return Result.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const AsyncRemoveItem = async(Id) => {
        try {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const Result = await fetch('/API/Inventory/Remove', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    "Id": Id
                })
            });
            return Result.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const AsyncEndSession = async(Id) => {
        try {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', `Bearer ${authToken}`);
            const Result = await fetch('/API/Admin/EndSession', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    "Id": Id
                })
            });
            return Result.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const AsyncClearInventory = async() => {
        try {
            const Result = await fetch('/API/Inventory/Clear', {
                method: 'GET'
            });
            return Result.json();
        } catch (error) {
            console.trace(error);
        }
    };

    const AsyncClearSessions = async() => {
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${authToken}`);
            const Result = await fetch('/API/Admin/ClearSessions', {
                method: 'GET',
                headers: headers
            });
            return Result.json();
        } catch (error) {
            console.trace(error);
        }
    }

    // FIX: Bad practice!
    /*
        Fix, is to invote the functions in here on the component level.
    */

    // eslint-disable-next-line
    useEffect(() => {

        // Fetches inventory list
        GetInventory()
        .then(({ List }) => SetInventory(List))
        .catch(err => console.trace(err));

        // Fetches admin agent data
        GetData(user)
        .then(({ Data }) => SetData(Data[0]))
        .catch(err => console.trace(err));
        
        // Fetches all sessions, active or not
        GetSessions()
        .then(({ Sessions }) => SetAllSessions(Sessions))
        .catch(err => console.trace(err));

        // Fetches active sessions
        GetActiveSessions()
        .then(({ ActiveSessions }) => SetActiveSessions(ActiveSessions))
        .catch(err => console.trace(err));

    }, []);

    return (
        <AdminContext.Provider 
            value = {
                {
                    Data,
                    ActiveSessions,
                    AllSessions,
                    Inventory,
                    AsyncAddItem,
                    AsyncRemoveItem,
                    AsyncEndSession,
                    AsyncClearSessions,
                    AsyncClearInventory
                }
            }
        >
            {props.children}
        </AdminContext.Provider>
    );

}