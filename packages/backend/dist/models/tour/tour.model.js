"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TourSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'a name is required to create a tour'],
    },
    price: {
        type: Number,
        required: [true, 'price is required to create a tour'],
    },
    duration: {
        type: Number,
        default: 5,
    },
    maxGroupSize: {
        type: Number,
    },
    difficulty: {
        type: String,
    },
    ratingsAverage: {
        type: Number,
    },
    ratingsQuantity: {
        type: Number,
    },
    summary: {
        type: String,
    },
    description: {
        type: String,
    },
    imageCover: {
        type: String,
    },
    images: {
        type: Array,
    },
    startDates: {
        type: Array,
    },
}, { timestamps: true, versionKey: false });
const Tour = mongoose_1.default.model('Tour', TourSchema);
module.exports = Tour;
//# sourceMappingURL=tour.model.js.map