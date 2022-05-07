const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: "155.98.37.68",
    port: 5432,
    database:"kubechess"
})

module.exports = pool;