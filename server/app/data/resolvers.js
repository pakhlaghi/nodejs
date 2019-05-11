const getFilePath = (path) => {
  return process.env.ENV === 'dev' ? `./resolvers/mock/${path}` : `./resolvers/${path}`;
};

const user = require(getFilePath('user'));
const page = require(getFilePath('page'));
const item = require(getFilePath('item'));
const admin = require(getFilePath('admin'));

// Root provides a resolver function for each API endpoint
let resolvers = {
  ...item,
  ...admin,
  ...user,
  ...page
};

module.exports = resolvers;