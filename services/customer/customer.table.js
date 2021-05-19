const Connection = require('../../database/mysql.connection');

module.exports = async() => {
    try {
        const TableData = await Connection(`SELECT * FROM TABLE_LIST`);
        return TableData;
    } 
    catch (error) {
        console.trace(error);
        return [];
    }
}