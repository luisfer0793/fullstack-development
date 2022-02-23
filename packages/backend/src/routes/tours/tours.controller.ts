import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

const Tour = require('../../models/tour/tour.model');

const { APIFeature } = require('../../utils/features.util');

interface CustomRequest extends Request {
  requestDate?: string;
}

export const getTours = async (request: CustomRequest, response: Response) => {
  try {
    // const { query } = request;
    // const { queryModel } = new APIFeature(Tour.find(), query)
    //   .filter()
    //   .sort()
    //   .exclude()
    //   .paginate();
    const tours = await Tour.find();
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
      // message: error.message,
    });
  }
};

export const getTour = async (request: CustomRequest, response: Response) => {
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
      status: 'error',
      requestedAt: request.requestDate,
      // message: error.message,
    });
  }
};

export const postTour = async (request: CustomRequest, response: Response) => {
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
      // message: error.message,
    });
  }
};

export const patchTour = async (request: CustomRequest, response: Response) => {
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
      // message: error.message,
    });
  }
};

export const deleteTour = async (
  request: CustomRequest,
  response: Response
) => {
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
      // message: error.message,
    });
  }
};

export const getToursStatistics = async (
  request: CustomRequest,
  response: Response
) => {
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
      // message: error.message,
    });
  }
};
