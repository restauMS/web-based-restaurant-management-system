const mysql = require('mysql');

const Configuration = {
    //MySQL Configs
}

mysql.createPool(Configuration);

module.exports = (Query) => {
    new Promise((Reject, Response) => {

    })
}