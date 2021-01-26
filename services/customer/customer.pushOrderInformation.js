const Connection = require('../../database/mysql.connection');
/**
 * 
 * @param {Number} SessionTotalQuantity 
 * @param {Number} SessionTotalPayable 
 */
module.exports = async(SessionTotalQuantity, SessionTotalPayable) => {
    try {
        const Query = `INSERT INTO order_session (order_session_id, order_session_total_qty, order_session_total_payable)
                    VALUES
                    (
                        null,
                        '${SessionTotalQuantity}',
                        '${SessionTotalPayable}'
                    );`;
        await Connection(Query);
        return true;
    } catch (error) {
        console.trace('Something went wrong: ',error);
        return false;
    }
}