const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const resolvers = require('./resolvers');

// start schema
const fileSync = require('fs');
const path = require("path");

const schemaFile = path.join(__dirname, 'schema.graphql');
const typeDefs = fileSync.readFileSync(schemaFile, 'utf8');
let schema = buildSchema(typeDefs);
// end schema

const qraphqlObj = graphqlHTTP((req, res) => ({
  schema: schema,
  context: { user: req.decodedToken, res: res },
  rootValue: resolvers,
  graphiql: true //Set to false if you don't want graphiql enabled
}));

module.exports = qraphqlObj;
