const query = require('./../query');
const crypto = require("crypto");

  const updateUser = ({ id, email }, args) => {
    console.log(args.user);
    const updateObj = { email };

    // return query.updateByCondition("users", updateObj, `id = ${id}`);
    return query.updateByCondition("users", updateObj, `id = ${id}`);
  };
  
  const saveUser = ({ email, password }) => {
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
      .pbkdf2Sync(password, salt, 10000, 512, "sha512")
      .toString("hex");
  
      const insertObj = {email, hash, salt};

    return query.insert("users", insertObj);
  };

  const deleteUser = ({ id }) => {
    return query.deleteByIds("users", id);
  }

  const trashUser = ({ ids }) => {
    return query.trashByIds("users", ids);
  }

  module.exports = {
    updateUser,
    saveUser,
    deleteUser,
    trashUser
  }