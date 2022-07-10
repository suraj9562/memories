const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

// importing custom modules
const postRoutes = require("./routes/postsRoutes");
const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controllers/errorController");

// configuring env file
dotenv.config({ path: "./config.env" });

// created instance of express
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// routes
app.use("/api/v1/posts", postRoutes);

// handling undeclared routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// global error handling middleware
app.use(globalErrorHandler);

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

// fetching variables from env file
const port = process.env.PORT;
const db = process.env.DATABASE;

// created connection using mongoose
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successful 📅"));

// rendering app on given port
const server = app.listen(port, () => {
  console.log(`app is rendering at http://localhost:${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1);
  });
});
