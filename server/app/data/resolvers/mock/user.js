  const updateUser = ({ id, email }, args) => {
    return "updated";
  };
  
  const saveUser = ({ email, password }) => {
    return "3";
  };

  const deleteUser = ({ id }) => {
    return "deleted";
  }

  const trashUser = ({ ids }) => {
    return "2";
  }

  module.exports = {
    updateUser,
    saveUser,
    deleteUser,
    trashUser
  }