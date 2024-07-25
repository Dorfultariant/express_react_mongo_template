var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
const cors = require("cors");


// Mongoose (Mongodb) setup:
mongoose.connect("mongodb://127.0.0.1:27017/templatedb");
mongoose.Promise = Promise;
const database = mongoose.connection;

// Database connection status:
database.on("connected", () => {
	console.log("Database connected");
});

database.on("error", (err) => {
	console.log("Could not connect database:", err);
});

// Routes:
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var booksRouter = require('./api/books');


var app = express();

// CORS options for development setup:
if (process.env.NODE_ENV === "development") {
	const cors_opts = {
		origin: "http://localhost:3000",
		optionsSuccessStatus: 200,
	};
	app.use(cors(cors_opts));
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Route usages:
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/api/book/", booksRouter);

module.exports = app;
