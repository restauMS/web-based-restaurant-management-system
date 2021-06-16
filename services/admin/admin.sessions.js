const Connection = require('../../database/mysql.connection');


module.exports = {
    AllSessions: async() => {
        try {
            const Sessions = await Connection('SELECT * FROM ORDER_SESSION');
            return Sessions;
        } catch (error) {
            console.trace("Something went wrong: ", error);
            return [];
        }
    },
    ActiveSessions: async() => {
        try {
            const Sessions = await Connection('SELECT * FROM ORDER_SESSION WHERE status = 1');
            return Sessions;
        } catch (error) {
            console.trace("Something went wrong: ", error);
            return [];
        }
    }
    
}

/*

*/