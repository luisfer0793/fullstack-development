const express = require('express');
const cors = require('cors');

const { format } = require('date-fns');
const morgan = require('morgan');

const tourRouter = require('./routes/tours/tours.route');
const usersRouter = require('./routes/users/users.route');

const { BASE_URL, RESOURCES } = require('./utils/constants.util');

const app = express();

app.use(
  cors({
    origin: '*',
  })
);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((request, response, next) => {
  request.requestDate = format(new Date(), 'PPPPpppp');
  next();
});
app.use(`${BASE_URL}/${RESOURCES.TOURS}`, tourRouter);
app.use(`${BASE_URL}/${RESOURCES.USERS}`, usersRouter);

/**
 * At this point in the app, all routes that reach this line of code, are routes that are not handled, so, in order to catch error we need to use middleware
 * */
app.all('*', (request, response, next) => {
  const error = new Error(
    `No se pudo realizar la consulta en el endpoint: ${request.originalUrl}`
  );
  error.statusCode = 404;
  error.status = 'error';
  next(error);
});

app.use((error, request, response, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || 'error';
  response.status(error.statusCode).json({
    status: error.status,
    message: error.message,
  });
  next();
});

module.exports = app;
