const Connection = require('../../database/mysql.connection');

module.exports = async( Name, Address, Phone, Table ) => {
    try {
        const Query = `INSERT INTO order_session (
                            customer_id, 
                            customer_name, 
                            customer_address,
                            customer_phone,
                            customer_table_no,
                            status
                        )
                        VALUES
                        (
                            null,
                            '${Name}',
                            '${Address}',
                            '${Phone}',
                            '${Table}',
                            '1'
                        )
                        `;
        await Connection(Query);
        return true;
    } catch (error) {
        console.trace('Something went wrong!', error);
        return false;
    }
}