const mysql = require('mysql');

const Configuration = {
    host: '',
    user: '',
    password: '',
    database: '',
    multipleStatements: true
}

const Connection = mysql.createPool(Configuration);

module.exports = (Query) => {
    return new Promise((Reject, Resolve) => {
        try {
            Connection.getConnection((Error, AttempConnect) => {
                Error ?
                Reject(Error)
                :
                AttempConnect.query(Query, (Error, Rows) => 
                {
                    Error ?
                    console.trace(Error)
                    :
                    Resolve(Rows)

                    AttempConnect.release()
                }
                )
            })
        } catch (error) {
            console.trace(error);
        }
    })
}