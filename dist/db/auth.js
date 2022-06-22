"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("./index");
const users_1 = require("../models/users");
module.exports = function (data) {
    return users_1.users.findOne({ where: { login: data.login } });
    // return new Promise<void>((resolve, reject) => {
    //     db.query(`SELECT * FROM users WHERE login = '${data.login}'`,
    //     (err:Error, data:any) => {
    //         err ? reject() : resolve(data);
    //     });
    // });
};
