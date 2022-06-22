const Pool  = require("pg").Pool;

const client = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "123456",
    database: "back-end-task",
});

module.exports = client;