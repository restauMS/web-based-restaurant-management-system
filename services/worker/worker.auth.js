const Connection = require('../../database/mysql.connection');

/**
 * 
 * @param {String} User 
 */
module.exports = async(User, Password) => {
    try {
        const Query = `SELECT * FROM salesperson WHERE salesperson_user_name = '${User}' AND salesperson_password = '${Password}'`;
        const AuthData = await Connection(Query);
        return AuthData
    } catch (error) {
        console.trace('Something went wrong: ', error);
        return false;
    }
}