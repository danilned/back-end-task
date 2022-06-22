const db = require("./index");
import { posts } from '../models/posts';

module.exports = function(data:boolean | number) {
    if (typeof data === 'number') {
        return posts.findAll({ where: { id: data } });
    }
    return posts.findAll({ where: { post_status: true } });

    // return new Promise((resolve, reject) => {
    //     db.query(`SELECT (post_id, post_data) FROM posts WHERE 
    //     ${typeof data === 'number' ? `id = ${data}` : 'post_status = true'}`,
    //     (err:Error, data:any) => {
    //         err ? reject() : resolve(data.rows);
    //     });
    // });
}