"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.router = void 0;
const express_1 = __importDefault(require("express"));
const db = require("./db/index");
const app = (0, express_1.default)();
const router = express_1.default.Router();
exports.router = router;
const routerUse = require("./router");
const sequelize_1 = require("sequelize");
const init_models_1 = require("./models/init-models");
const sequelize = new sequelize_1.Sequelize('back-end-task', 'postgres', '123456', {
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false
});
exports.sequelize = sequelize;
(0, init_models_1.initModels)(sequelize);
app.listen(80, () => {
    console.log("Server has started on the port 80");
});
app.use(routerUse);
db.connect();
