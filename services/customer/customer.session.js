const Connection = require('../../database/mysql.connection');

/**
 * @param {string} Name Name of the Customer
 * @param {string} Address Address of the Customer
 * @param {string} Phone Contact number of the Customer
 * @param {string} Table Chosen table of the Customer
 * @param {object} Checkout Checkout object of thj
 * @returns true otherwise false
 **/

module.exports = async( Name, Address, Phone, Table, Checkout) => {
    try {
        const Query = `INSERT INTO order_session (
                            customer_id, 
                            customer_name, 
                            customer_address,
                            customer_phone,
                            customer_table_no,
                            checkout,
                            status
                        )
                        VALUES
                        (
                            null,
                            '${Name}',
                            '${Address}',
                            '${Phone}',
                            '${Table}',
                            '{"checkout": ${Checkout}}',
                            1
                        )
                        `;
        await Connection(Query);
        return true;
    } catch (error) {
        console.trace('Something went wrong!', error);
        return false;
    }
}