const Connection = require('../../database/mysql.connection');

/**
 * 
 * @param {String} User 
 */
module.exports = async(User) => {
    try {
        const Query = `SELECT salesperson_password FROM salesperson WHERE salesperson_user_name = '${User}'`;
        const AuthData = await Connection(Query);
        return AuthData;
    } catch (error) {
        console.trace('Something went wrong: ', error);
        return false;
    }
}