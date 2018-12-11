// Start sql connection -------------------------------------------------
const pgPromise = require("pg-promise");
const conString = process.env.CONECTIONSTRING;
const pgp = pgPromise({}); // empty initialization options
const psql = pgp(conString); // get connection to your db instance
// End sql connection ----------------------------------------------------

module.exports = psql;
