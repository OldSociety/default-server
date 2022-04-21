// if (process.env.USER) require("dotenv").config();
const express = require('express')
const app = express()

const recipesRouter = require("./recipes/recipes.router.js");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const cors = require("cors");
const morgan = require('morgan')

//TESTING
var testAPIRouter = require("./routes/testAPI");
app.use("/testAPI", testAPIRouter);


// Middleware
app.use(cors());
app.use(morgan("dev")) //A small logging program to replace Logger printing in terminal


// Routes
app.use("/")
app.use("/recipes", recipesRouter); // Note: app.use


//Error handling
app.use(notFound);
app.use(errorHandler);

module.exports = app
