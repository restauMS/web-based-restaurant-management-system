const Connection = require('../../database/mysql.connection');

module.exports = async() => {
    try {
        const Sales = await Connection('SELECT * FROM SALES');
        return Sales;
    } catch (error) {
        console.trace("Something went wrong: ", error);
        return [];
    }
}