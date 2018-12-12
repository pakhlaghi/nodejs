const routes = require("express").Router();

// Secirity
const csrf = require("csurf");

// import modules
const qraphqlObj = require("./../data/graphql");
const auth = require("./../middlewares/auth");

// Start Route ----------------------------------------------
// 1- auth.optional is middleware,
// 2- it will call first and assign user to the decodedToken
// 3- then we get user from req.decodedToken and assign to context to make it accesible by resolver to check authenticated user

// Security
// 1- CSRF
const csrfProtection = csrf({ cookie: true });

routes.use("/gq", auth.optional, qraphqlObj);

routes.get("/you", csrfProtection, auth.required, function(req, res) {
  return res.status(200).send({ user: req.payload.user });
});

routes.get("/me", csrfProtection, auth.optional, function(req, res) {
  return res.status(200).send({ user: req.payload.user });
});

routes.post("/login", auth.optional, (req, res) => {
  return auth.login(req.body.username, req.body.password, res);
});
// End Route ------------------------------------------------

module.exports = routes;
