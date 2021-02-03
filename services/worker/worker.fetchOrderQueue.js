const Connection = require('../../database/mysql.connection');

module.exports = async() => {
    try {
        const Query = `SELECT * FROM`;
        const OrderQueue = await Connection(Query);
        return OrderQueue;
    } catch (error) {
        console.trace('Something went wrong', error);
    }
}