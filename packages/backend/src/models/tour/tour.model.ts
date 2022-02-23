import mongoose from 'mongoose';

const TourSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true, versionKey: false }
);

const Tour = mongoose.model('Tour', TourSchema);

module.exports = Tour;
