const user = require('./resolvers/user');
const page = require('./resolvers/page');
const item = require('./resolvers/item');
const admin = require('./resolvers/admin');

// Root provides a resolver function for each API endpoint
let resolvers = {
  ...item,
  ...admin,
  ...user,
  ...page
};

module.exports = resolvers;