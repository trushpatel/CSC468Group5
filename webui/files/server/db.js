const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "AnjuDipen05@",
    host: "localhost",
    port: 5432,
    database:"jwt_tutorial"
})

module.exports = pool;