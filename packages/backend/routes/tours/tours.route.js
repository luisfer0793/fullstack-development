const express = require('express');

const {
  getTourController,
  getToursController,
  postTourController,
  patchTourController,
  deleteTourController,
  getToursStatisticsController,
} = require('./tours.controller');

const router = express.Router();

router.route('/').get(getToursController).post(postTourController);

router.route('/statistics').get(getToursStatisticsController);

router
  .route('/:id')
  .get(getTourController)
  .patch(patchTourController)
  .delete(deleteTourController);

module.exports = router;
