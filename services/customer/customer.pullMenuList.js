const Connection = require('../../database/mysql.connection');

module.exports = async() => {
    try {
        const MenuList = await Connection('SELECT * FROM MENU');
        return MenuList;
    } 
    catch (error) {
        console.trace(error);
        return [];
    }
};