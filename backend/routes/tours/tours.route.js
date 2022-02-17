const express = require('express');

const {
  getTour,
  getTours,
  postTour,
  patchTour,
  deleteTour,
  getToursStatistics,
} = require('./tours.controller');

const { toursFilterHandler } = require('./tours.middleware');

const router = express.Router();

router.route('/').get(toursFilterHandler, getTours).post(postTour);

router.route('/statistics').get(getToursStatistics);

router.route('/:id').get(getTour).patch(patchTour).delete(deleteTour);

module.exports = router;
