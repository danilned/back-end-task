import express from 'express';
const db = require("./db/index");
const app = express();
const router = express.Router();
const routerUse = require("./router");
import { Sequelize, Model, DataTypes } from 'sequelize';
import { initModels } from "./models/init-models";

const sequelize = new Sequelize('back-end-task', 'postgres', '123456', {
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false
});

initModels(sequelize);

app.listen(80, () => {
    console.log("Server has started on the port 80");
});

app.use(routerUse);

db.connect();

export { router, sequelize }