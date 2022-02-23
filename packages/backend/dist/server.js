"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './.env' });
const { PORT, MONGO_URI = '' } = process.env;
mongoose_1.default
    .connect(MONGO_URI)
    .then(connection => {
    console.log('MongoDB connection stablished successfully: ', connection.connection.host);
})
    .catch(error => {
    console.error('Fail to connect MongoDB, details: ', error.message);
    process.exit(1);
});
const app_1 = __importDefault(require("./app"));
app_1.default.listen(PORT, () => {
    console.log(`App running in port: ${PORT}`);
});
//# sourceMappingURL=server.js.map