import { Request, Response, NextFunction } from 'express';

export const toursFilterHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log('No digas bromas');
  next();
};
