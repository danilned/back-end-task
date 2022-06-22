"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("./index");
const users_1 = require("../models/users");
module.exports = function (data) {
    return users_1.users.create({ login: data.login, password: data.password, email: data.email, rights: 0 });
    // return new Promise<void>((resolve, reject) => {
    //     db.query(`INSERT INTO users(login, password, email, rights) 
    //     VALUES('${data?.login}', '${data?.password}', '${data?.email}', 1)`,
    //     (err:Error, data:any) => {
    //         err ? reject() : resolve();
    //     });
    // });
};
