const Connection = require('../../database/mysql.connection');

module.exports = async() => {
    try {
        const Query = `SELECT * FROM student.tablelist`;
        const TableData = await Connection(Query);
        return TableData.json();
    } catch (error) {
        console.trace(error);
    }
}