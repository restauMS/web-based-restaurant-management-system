const Connection = require('../../database/mysql.connection');

/**
 * 
 * @param {*} Username Admin's username
 */
module.exports = async(Username) => {
    try {
        const Query = `SELECT * FROM admin WHERE username = '${Username}'`;
        const result = await Connection(Query);
        return result;
    } catch (error) {
        console.trace('Something went wrong...', error);
        return [];
    }
}