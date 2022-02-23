"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
// const users = JSON.parse(fs.readFileSync(`${__dirname}/../../data/users.json`));
const getUsers = (request, response) => {
    response.status(200).json({
        status: 'success',
        requestedAt: request.requestDate,
        data: {
            users: [],
        },
    });
};
exports.getUsers = getUsers;
//# sourceMappingURL=users.controller.js.map