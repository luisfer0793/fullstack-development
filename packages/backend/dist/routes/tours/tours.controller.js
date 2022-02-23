"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToursStatistics = exports.deleteTour = exports.patchTour = exports.postTour = exports.getTour = exports.getTours = void 0;
const Tour = require('../../models/tour/tour.model');
const { APIFeature } = require('../../utils/features.util');
const getTours = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { query } = request;
        // const { queryModel } = new APIFeature(Tour.find(), query)
        //   .filter()
        //   .sort()
        //   .exclude()
        //   .paginate();
        const tours = yield Tour.find();
        response.status(200).json({
            status: 'success',
            requestedAt: request.requestDate,
            data: {
                tours,
            },
        });
    }
    catch (error) {
        response.status(500).json({
            status: 'fail',
            requestedAt: request.requestDate,
            // message: error.message,
        });
    }
});
exports.getTours = getTours;
const getTour = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const tour = yield Tour.findById(id).exec();
        response.status(200).json({
            status: 'success',
            requestedAt: request.requestDate,
            data: {
                tour,
            },
        });
    }
    catch (error) {
        response.status(500).json({
            status: 'error',
            requestedAt: request.requestDate,
            // message: error.message,
        });
    }
});
exports.getTour = getTour;
const postTour = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = request;
        const tour = yield Tour.create(body);
        response.status(201).json({
            status: 'success',
            requestedAt: request.requestDate,
            data: {
                tour,
            },
        });
    }
    catch (error) {
        response.status(400).json({
            status: 'fail',
            requestedAt: request.requestDate,
            // message: error.message,
        });
    }
});
exports.postTour = postTour;
const patchTour = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = request;
        const tour = yield Tour.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        response.status(200).json({
            status: 'success',
            requestedAt: request.requestDate,
            data: { tour },
        });
    }
    catch (error) {
        response.status(500).json({
            status: 'error',
            requestedAt: request.requestDate,
            // message: error.message,
        });
    }
});
exports.patchTour = patchTour;
const deleteTour = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const tour = yield Tour.findByIdAndDelete(id);
        response.status(200).json({
            status: 'success',
            requestedAt: request.requestDate,
            data: { tour },
        });
    }
    catch (error) {
        response.status(500).json({
            status: 'error',
            requestedAt: request.requestDate,
            // message: error.message,
        });
    }
});
exports.deleteTour = deleteTour;
const getToursStatistics = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const statistics = yield Tour.aggregate([
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
    }
    catch (error) {
        response.status(500).json({
            status: 'error',
            requestedAt: request.requestDate,
            // message: error.message,
        });
    }
});
exports.getToursStatistics = getToursStatistics;
//# sourceMappingURL=tours.controller.js.map