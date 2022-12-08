const { poolPromise } = require('../Services/poolConfig');
const colors = require('colors');

module.exports = async function (context) {

    try {
        console.log("bonnie");
        var pool = await poolPromise;
        var result = await pool.request().query('SELECT * from dbo.families');
        context.res = {
          status: 200,
          body: result.recordsets,
        };

    } catch (error) {
        context.res = {
           status: 500,
           body: error.message,
        };
    }

}