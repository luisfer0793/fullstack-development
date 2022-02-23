import { Request, Response } from 'express';

import fs from 'fs';

interface CustomRequest extends Request {
  requestDate?: string;
}

// const users = JSON.parse(fs.readFileSync(`${__dirname}/../../data/users.json`));

export const getUsers = (request: CustomRequest, response: Response) => {
  response.status(200).json({
    status: 'success',
    requestedAt: request.requestDate,
    data: {
      users: [],
    },
  });
};
