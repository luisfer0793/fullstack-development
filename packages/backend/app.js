const express = require("express");
const cors = require('cors');

const { format } = require("date-fns");
const morgan = require("morgan");

const tourRouter = require("./routes/tours/tours.route");
const usersRouter = require("./routes/users/users.route");

const { BASE_URL, RESOURCES } = require("./utils/constants.util");

const app = express();

app.use(cors({
  origin: '*'
}))
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((request, response, next) => {
  request.requestDate = format(new Date(), "PPPPpppp");
  next();
});
app.use(`${BASE_URL}/${RESOURCES.TOURS}`, tourRouter);
app.use(`${BASE_URL}/${RESOURCES.USERS}`, usersRouter);

module.exports = app;
