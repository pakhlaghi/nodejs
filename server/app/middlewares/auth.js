const jwt = require("express-jwt");
const crypto = require("crypto");
const JsonWebToken = require("jsonwebtoken");

// import modules
const db = require("./../data/dbProvider");

const secret = {
  jwtSecret: process.env.SECRET
};

const getTokenFromHeaders = req => {
  const {
    headers: { authorization }
  } = req;

  // added decodedToken for graphql, beacuse graphql using body and express-jwt add user to body
  if (authorization && authorization.split(" ")[0] === "Bearer") {
    JsonWebToken.verify(authorization.split(" ")[1], secret.jwtSecret, function(
      error,
      decodedToken
    ) {
      req.decodedToken = decodedToken;
    });

    return authorization.split(" ")[1];
  }
  return null;
};

// Authentication and generate token
const login = (username, password, response) => {
  return db
    .oneOrNone(`SELECT * FROM "user-roles-view" where email = '${username}';`)
    .then(user => {
      if (username == user.email) {
        const hash = crypto
          .pbkdf2Sync(password, user.salt, 10000, 512, "sha512")
          .toString("hex");

        if (hash !== user.hash) {
          return response
            .status(401)
            .send({ message: "Invalid username and password" });
        }

        var token = JsonWebToken.sign(
          { sub: user.email, role: user.roles },
          secret.jwtSecret,
          {
            expiresIn: 3600
          }
        );

        response.send({ token: token });
      } else {
        return response
          .status(401)
          .send({ message: "Invalid username and password" });
      }
    });
};

// jwt middleware: validate jwt and put user into the req
const auth = {
  required: jwt({
    secret: secret.jwtSecret,
    userProperty: "payload",
    getToken: getTokenFromHeaders
  }),
  optional: jwt({
    secret: secret.jwtSecret,
    userProperty: "payload",
    getToken: getTokenFromHeaders,
    credentialsRequired: false
  }),
  login: login
};

module.exports = auth;
