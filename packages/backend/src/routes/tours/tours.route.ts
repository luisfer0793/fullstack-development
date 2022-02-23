import express from 'express';

import {
  getTour,
  getTours,
  postTour,
  patchTour,
  deleteTour,
  getToursStatistics,
} from './tours.controller';

import { toursFilterHandler } from './tours.middleware';

const router = express.Router();

router.route('/').get(toursFilterHandler, getTours).post(postTour);

router.route('/statistics').get(getToursStatistics);

router.route('/:id').get(getTour).patch(patchTour).delete(deleteTour);

export default router;
