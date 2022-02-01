const express = require('express');

const {
  getTour,
  getTours,
  postTour,
  patchTour,
  deleteTour,
} = require('./tours.controllers');

const router = express.Router();

router.route('/').get(getTours).post(postTour);

router.route('/:id').get(getTour).patch(patchTour).delete(deleteTour);

module.exports = router;
