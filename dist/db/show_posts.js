"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("./index");
const posts_1 = require("../models/posts");
module.exports = function (data) {
    if (typeof data === 'number') {
        return posts_1.posts.findAll({ where: { id: data } });
    }
    return posts_1.posts.findAll({ where: { post_status: true } });
    // return new Promise((resolve, reject) => {
    //     db.query(`SELECT (post_id, post_data) FROM posts WHERE 
    //     ${typeof data === 'number' ? `id = ${data}` : 'post_status = true'}`,
    //     (err:Error, data:any) => {
    //         err ? reject() : resolve(data.rows);
    //     });
    // });
};
