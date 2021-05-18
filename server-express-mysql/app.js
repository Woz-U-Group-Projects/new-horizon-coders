var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var models = require("./models");
var cors = require("cors");

var appointmentsRouter = require("./routes/appointments");
var customersRouter = require("./routes/customers");
var indexRouter = require("./routes/index");
var staffRouter = require("./routes/staff")

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/appointments", appointmentsRouter);
app.use("/customers", customersRouter);
app.use("/", indexRouter);
app.use("/staff",staffRouter)

models.sequelize.sync().then(function() {
  console.log("DB Sync'd up");
});

module.exports = app;
