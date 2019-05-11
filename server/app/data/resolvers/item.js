const { protected } = require('../../utils');
const query = require('./../query');

const items = (_, args) => {
  // args.roles = ["admin"]; // array of authorization
  // protected(args); // contain user and response, user = args.user comes from context
  return query.selectAll("items");
}

module.exports = {
  items
}