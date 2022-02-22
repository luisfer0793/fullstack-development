/**
 * @typedef {import('@types/express').Request} Request
 * @typedef {import('@types/express').Response} Response
 */

const fs = require("fs");

const users = JSON.parse(fs.readFileSync(`${__dirname}/../../data/users.json`));

/**
 * @param {Request} request
 * @param {Response} response
 */
const getUsers = (request, response) => {
  response.status(200).json({
    status: "success",
    requestedAt: request.requestDate,
    data: {
      users,
    },
  });
};

module.exports = { getUsers };
