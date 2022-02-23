import express from 'express';
import cors from 'cors';

import { format } from 'date-fns';
import morgan from 'morgan';

import tourRouter from './routes/tours/tours.route';
import usersRouter from './routes/users/users.route';

import { BASE_URL, RESOURCES } from './utils/constants.util';

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
  Object.defineProperty(request, 'requestDate', {
    value: format(new Date(), 'PPPPpppp'),
  });
  next();
});
app.use(`${BASE_URL}/${RESOURCES.TOURS}`, tourRouter);
app.use(`${BASE_URL}/${RESOURCES.USERS}`, usersRouter);

export default app;
