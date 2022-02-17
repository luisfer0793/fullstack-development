export interface ITour {
  _id: string;
  name: string;
  price: number;
  description: string;
  maxGroupSize: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  summary: string;
  imageCover: string;
  duration: number;
  difficulty: string;
  images: string[];
  startDates: string[];
}
