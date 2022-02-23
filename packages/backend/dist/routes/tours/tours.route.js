"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tours_controller_1 = require("./tours.controller");
const tours_middleware_1 = require("./tours.middleware");
const router = express_1.default.Router();
router.route('/').get(tours_middleware_1.toursFilterHandler, tours_controller_1.getTours).post(tours_controller_1.postTour);
router.route('/statistics').get(tours_controller_1.getToursStatistics);
router.route('/:id').get(tours_controller_1.getTour).patch(tours_controller_1.patchTour).delete(tours_controller_1.deleteTour);
exports.default = router;
//# sourceMappingURL=tours.route.js.map