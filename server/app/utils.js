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

const devCors = (req, res, next) => {
  // add this to support cors in dev environment
  if (process.env.ENV === "dev" || process.env.ENV === "test") {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'content-type, authorization, content-length, x-requested-with, accept, origin');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    res.header('Allow', 'POST, GET, OPTIONS')
    res.header('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  } else {
    next();
  }
}

module.exports = {
  protected,
  devCors
}