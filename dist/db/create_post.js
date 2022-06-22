"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("./index");
const posts_1 = require("../models/posts");
module.exports = function (data) {
    return posts_1.posts.create({ id: data.id, post_data: data.data, post_status: data.status });
    // return new Promise<void>((resolve, reject) => {
    //     db.query(`INSERT INTO posts(id, post_data, post_status) VALUES(${data.id}, '${data.data}', ${data.status})`, 
    //     (err:Error, data:any) => {
    //         err ? reject() : resolve();
    //     });
    // })
};
