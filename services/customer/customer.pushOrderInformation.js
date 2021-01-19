const Connection = require('../../database/mysql.connection');
module.exports = async(Query) => {
    try {
        await Connection(Query);
        return true;
    } catch (error) {
        console.trace('Stack Trace:',error);
    }
}