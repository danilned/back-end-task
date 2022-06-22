const db = require("./index");
import { register } from "../types/interfaces";
import { users } from "../models/users";

module.exports = function( data:register ) {
    return users.create({login: data.login, password: data.password, email: data.email, rights: 0});
    
    // return new Promise<void>((resolve, reject) => {
    //     db.query(`INSERT INTO users(login, password, email, rights) 
    //     VALUES('${data?.login}', '${data?.password}', '${data?.email}', 1)`,
    //     (err:Error, data:any) => {
    //         err ? reject() : resolve();
    //     });
    // });
}