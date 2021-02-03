// ! Temporary code, bad code.
const Connection = require('../../database/mysql.connection');

/**
 * @param {String} User accepts the username as body
 * @param {String} Password accepts the body as body
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