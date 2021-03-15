const Connection = require('../../database/mysql.connection');

/**
 * 
 * @param {String} Username 
 * @param {String} Password 
 * @param {String} FullName 
 * @param {String} Contact 
 * @param {String} Address 
 * @returns Result (true/false) of the query if it was successful or not
 */
module.exports = async(Username, Password, FullName, Contact, Address) => {
    try {
        await Connection(`INSERT INTO admin 
        (
            admin_id,
            admin_user_name,
            admin_password,
            admin_full_name,
            admin_contact_no,
            admin_address)
        VALUES
        (
            null,
            '${Username}',
            '${Password}',
            '${FullName}',
            '${Contact}',
            '${Address}'
        );
                            `);
        return true;
    } catch (error) {
        console.trace('Something went wrong: ', error);
        return false;
    }
}