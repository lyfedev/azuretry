const sql = require('mssql');
require('dotenv').config()

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false,
        trustedServerCertificate: false
    }
}

const poolPromise = new sql.ConnectionPool(config).connect()
  .then((pool) => {
    console.log("Successfully connected to MSSQL Server".green.underline.bold);
    return pool;
  })
  .catch((err) =>
    console.log("Bad Configuration".red.underline.bold, err)
  );

module.exports = {
  sql,
  poolPromise,
};