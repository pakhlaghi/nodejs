const protected = ({ user, res, roles }) => {
    let isAuthorized = true;
  
    if (!user) {
      isAuthorized = false;
    } else if (roles) {
      isAuthorized = roles.some(role => {
        return user.role.indexOf(role) >= 0;
      });
  
      if (!isAuthorized) {
        res.statusCode = 401;
        throw new Error("Unauthorized");
      }
    }
  };

  module.exports = {
      protected
  }