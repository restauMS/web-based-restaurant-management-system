const Connection = require('../../database/mysql.connection');


module.exports = async() => {
    try {
        const Sessions = await Connection('SELECT * FROM ORDER_SESSION');
        return Sessions;
    } catch (error) {
        console.trace("Something went wrong: ", error);
        return [];
    }
}