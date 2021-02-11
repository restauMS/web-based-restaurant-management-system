const Connection = require('../../database/mysql.connection');

/**
 * @param {String} Username Worker's username 
 * @param {String} Password Worker's password
 * @param {String} FullName Worker's full name
 * @param {String} Contact Worker's contact number
 * @param {String} Address Worker's physical address
 */
module.exports = async(Username, Password, FullName, Contact, Address) => {
    try {
        await Connection(`INSERT INTO salesperson 
                        (
                            salesperson_id,
                            salesperson_user_name,
                            salesperson_password,
                            salesperson_full_name,
                            salesperson_contact_no,
                            salesperson_address)
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
        console.trace('Something went wrong', error);
        return false;
    }
}