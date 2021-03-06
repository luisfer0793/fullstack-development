/**
 * @typedef {import('@types/express').Request} Request
 * @typedef {import('@types/express').Response} Response
 */

const Tour = require('../../models/tour/tour.model');

const { APIFeature } = require('../../utils/features.util');

/**
 * @param {Request} request
 * @param {Response} response
 */
const getToursController = async (request, response) => {
  try {
    const { query } = request;
    const { queryModel } = new APIFeature(Tour.find(), query)
      .filter()
      .sort()
      .exclude()
      .paginate();
    const tours = await queryModel;
    response.status(200).json({
      status: 'success',
      requestedAt: request.requestDate,
      data: {
        tours,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: 'fail',
      requestedAt: request.requestDate,
      message: error.message,
    });
  }
};

/**
 * @param {Request} request
 * @param {Response} response
 */
const getTourController = async (request, response) => {
  try {
    const { id } = request.params;
    const tour = await Tour.findById(id).exec();

    response.status(200).json({
      status: 'success',
      requestedAt: request.requestDate,
      data: {
        tour,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: 'success',
      requestedAt: request.requestDate,
      message: error.message,
    });
  }
};

/**
 * @param {Request} request
 * @param {Response} response
 */
const postTourController = async (request, response) => {
  try {
    const { body } = request;
    const tour = await Tour.create(body);
    response.status(201).json({
      status: 'success',
      requestedAt: request.requestDate,
      data: {
        tour,
      },
    });
  } catch (error) {
    response.status(400).json({
      status: 'fail',
      requestedAt: request.requestDate,
      message: error.message,
    });
  }
};

/**
 * @param {Request} request
 * @param {Response} response
 */
const patchTourController = async (request, response) => {
  try {
    const {
      params: { id },
      body,
    } = request;
    const tour = await Tour.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    response.status(200).json({
      status: 'success',
      requestedAt: request.requestDate,
      data: { tour },
    });
  } catch (error) {
    response.status(500).json({
      status: 'error',
      requestedAt: request.requestDate,
      message: error.message,
    });
  }
};

/**
 * @param {Request} request
 * @param {Response} response
 */
const deleteTourController = async (request, response) => {
  try {
    const { id } = request.params;
    const tour = await Tour.findByIdAndDelete(id);
    response.status(200).json({
      status: 'success',
      requestedAt: request.requestDate,
      data: { tour },
    });
  } catch (error) {
    response.status(500).json({
      status: 'error',
      requestedAt: request.requestDate,
      message: error.message,
    });
  }
};

/**
 * @param {Request} request
 * @param {Response} response
 */
const getToursStatisticsController = async (request, response) => {
  try {
    const statistics = await Tour.aggregate([
      { $match: { ratingsAverage: { $gte: 4.5 } } },
      {
        $group: {
          _id: { $toUpper: '$difficulty' },
          tours: { $sum: 1 },
          ratings: { $sum: '$ratingsQuantity' },
          averageRatings: { $avg: '$ratingsAverage' },
          minimunPrice: { $min: '$price' },
          maximumPrice: { $max: '$price' },
        },
      },
    ]);
    response.status(200).json({
      status: 'success',
      requestedAt: request.requestDate,
      data: { statistics },
    });
  } catch (error) {
    response.status(500).json({
      status: 'error',
      requestedAt: request.requestDate,
      message: error.message,
    });
  }
};

module.exports = {
  getToursController,
  getTourController,
  postTourController,
  patchTourController,
  deleteTourController,
  getToursStatisticsController,
};
