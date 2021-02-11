const Connection = require('../../database/mysql.connection');
/**
 * 
 * @param {String} CustomerName Customer's name
 * @param {String} CustomerContact Customer's contact number
 * @param {String} CustomerAddress Customer's physical address
 * @param {String} CustomerTable Customer's table of choice
 */
module.exports = async(CustomerName, CustomerContact, CustomerAddress, CustomerTable) => {
    try {
        const Query =   `INSERT INTO customer_log 
                        (
                            log_id,
                            log_name,
                            log_contact_no,
                            log_address,
                            log_table
                        ) 
                        VALUES 
                        (
                            null, 
                            '${CustomerName}', 
                            '${CustomerContact}', 
                            '${CustomerAddress}', 
                            '${CustomerTable}'
                        );`
        await Connection(Query);
        return true;
    } catch (error) {
        console.trace(error);
        return false
    }
}