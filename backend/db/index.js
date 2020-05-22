const pgp = require('pg-promise')({});
const database = pgp('postgress://localhost:5432/facebook_db')
module.exports = database;