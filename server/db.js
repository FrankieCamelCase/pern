const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'learnnpern',
    password: null,
    post: 5432
    
});

module.exports = pool;