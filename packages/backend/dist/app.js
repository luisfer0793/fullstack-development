"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const date_fns_1 = require("date-fns");
const morgan_1 = __importDefault(require("morgan"));
const tours_route_1 = __importDefault(require("./routes/tours/tours.route"));
const users_route_1 = __importDefault(require("./routes/users/users.route"));
const constants_util_1 = require("./utils/constants.util");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: '*',
}));
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.static(`${__dirname}/public`));
app.use((request, response, next) => {
    Object.defineProperty(request, 'requestDate', {
        value: (0, date_fns_1.format)(new Date(), 'PPPPpppp'),
    });
    next();
});
app.use(`${constants_util_1.BASE_URL}/${constants_util_1.RESOURCES.TOURS}`, tours_route_1.default);
app.use(`${constants_util_1.BASE_URL}/${constants_util_1.RESOURCES.USERS}`, users_route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map