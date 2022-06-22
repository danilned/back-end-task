const db = require("./index");
import { postId } from "../types/interfaces";
import { posts } from "../models/posts";
import { users } from "../models/users";
import { Op } from "sequelize";
import { sequelize } from "../index";
 
module.exports = async function(data:postId) {
    const post = await posts.findOne({
        where: {
            post_id: data.postId,
            post_status: true
        }
    });

    const user = await users.findByPk(data.id);

    if (post) {
        if (post.getDataValue('id') === data.id || user?.getDataValue('rights')) {
            post.destroy();
        }
        post.save();
        return true;
    }
    return false;

    // return new Promise<void>((resolve, reject) => {
    //     db.query(`DELETE FROM posts WHERE post_id = '${data.postId}' AND post_status = true AND (id = '${data.id}' OR (SELECT rights FROM users WHERE id = ${data.id}) = 1)`,
    //     (err:Error, data:any) => {
    //         err ? reject() : resolve(data.rowCount); 
    //     });
    // });
}