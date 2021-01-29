const Connection = require('../../database/mysql.connection');

/**
 * @param {String} User 
 * @param {String} Password
 */
module.exports = async(User, Password) => {
    try {
        const Query = `SELECT * FROM admin WHERE admin_user_name = '${User}' AND admin_password = '${Password}'`;
        const AuthData = await Connection(Query);
        return AuthData;
    } catch (error) {
        console.trace('Something went wrong: ', error);
        return false;
    }
}