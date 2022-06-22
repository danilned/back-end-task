"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("./index");
const posts_1 = require("../models/posts");
const sequelize_1 = require("sequelize");
module.exports = function (data) {
    const obj = {};
    if (data.data)
        obj.post_data = data.data;
    if (data.hasOwnProperty('status'))
        obj.status = data.status;
    return posts_1.posts.update(obj, {
        where: {
            [sequelize_1.Op.and]: {
                post_id: data.postId,
                id: data.id,
            }
        }
    });
    // return new Promise<void>((resolve, reject) => {
    //     let string:string = "";
    //     if (data.data) string += `post_data = '${data.data}',`;
    //     if (data.hasOwnProperty('status')) string += `post_status = ${data.status},`;
    //     string = string.slice(0, -1);
    //     db.query(`UPDATE posts SET ${string}
    //     WHERE post_id = ${data.postId} AND id = ${data.id}`,
    //     (err:Error, data:any) => {
    //         err ? reject() : resolve(data.rows.length);
    //     });
    // });
};
