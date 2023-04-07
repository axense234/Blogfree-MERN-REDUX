const express = require("express");

const app = express();
// DOT Env
require("dotenv").config();
// Express async errors
require("express-async-errors");

const port = process.env.PORT || 4000;

// Third Party Middleware
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

// DB Connection
const connectDB = require("./db/connect");

// Import Routes and Middleware
const blogsRoute = require("./routers/blogs");
const authorsRoute = require("./routers/authors");
const testingRoute = require("./routers/testing");
const ErrorHandlerMiddlware = require("./middleware/errorHandler");

// Express Middleware and Security
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(xss());

// Security middleware
app.set("trust proxy", 1);
// Limit each IP to request 30000 times in 15 mins
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 30000,
  })
);

// Middleware
app.use("/", [blogsRoute, authorsRoute, testingRoute]);
app.use(ErrorHandlerMiddlware);
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Hello", content: "Home page" });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
