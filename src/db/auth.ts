const db = require("./index");
import { auth } from "../types/interfaces";
import { users } from "../models/users";

module.exports = function( data:auth ) {
    return users.findOne({ where: { login: data.login } });

    // return new Promise<void>((resolve, reject) => {
    //     db.query(`SELECT * FROM users WHERE login = '${data.login}'`,
    //     (err:Error, data:any) => {
    //         err ? reject() : resolve(data);
    //     });
    // });
}