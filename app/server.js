require("dotenv").config(); // read .env - can access by process.env...

const express = require("express");
const bodyParser = require("body-parser");

const cookieParser = require("cookie-parser"); // add this for csurf

// Security
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// import modules
const routesV1 = require("./routes");

// Start
const app = express();
const port = process.env.PORT || 3000;

// Start Security -----------------------------------------------------------------------------------------

// 1- helmet
app.use(helmet());

// 2- DoS
app.enable("trust proxy"); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300 // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);

// 3- CSRF - inside router
app.use(cookieParser());

// End Security -----------------------------------------------------------------------------------------

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Routes
app.use("/v1", routesV1);

app.listen(port);
console.log("GraphQL API server running at localhost:" + port);
