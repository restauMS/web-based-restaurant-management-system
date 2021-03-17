const Connection = require('../../database/mysql.connection');

module.exports = async() => {
    try {
        const AdminData = await Connection(`SELECT * FROM ADMIN`);
        return AdminData;
    } catch (Error) {
        console.trace('Something went wrong ', Error);
        return [];
    }
}