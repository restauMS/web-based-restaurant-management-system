const Connection = require('../../database/mysql.connection');

/**
 * @param {String} User accepts the username as body
 */
module.exports = async(User) => {
    try {
        const Query = `SELECT admin_password FROM admin WHERE admin_user_name = '${User}'`;
        const AuthData = await Connection(Query);
        return AuthData;
    } catch (error) {
        console.trace('Something went wrong: ', error);
        return false;
    }
}