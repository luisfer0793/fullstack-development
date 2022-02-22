/**
 * @typedef {import('@types/express').Request} Request
 * @typedef {import('@types/express').Response} Response
 * @typedef {import('@types/express').NextFunction} Next
 */

/**
 * @param {Request} request
 * @param {Response} response
 * @param {Next} next
 */
const toursFilterHandler = (request, response, next) => {
  console.log('Se ejecutó el middleware de getTours');
  next();
};

module.exports = { toursFilterHandler };
