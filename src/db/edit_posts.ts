const db = require("./index");
import { postData } from "../types/interfaces";
import { posts } from "../models/posts";
import { Op } from "sequelize";

module.exports = function( data:postData ) {
    const obj:{post_data?: string, status?: boolean} = {};
    if (data.data) obj.post_data = data.data;
    if (data.hasOwnProperty('status')) obj.status = data.status;

    return posts.update(obj, {
        where: {
            [Op.and]: {
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
}