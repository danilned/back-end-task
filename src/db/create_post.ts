const db = require("./index");
import { posts as postsType } from '../types/interfaces';
import { posts } from '../models/posts';
 
module.exports = function( data:postsType ) {
    return posts.create({id: data.id, post_data: data.data, post_status: data.status});

    // return new Promise<void>((resolve, reject) => {
    //     db.query(`INSERT INTO posts(id, post_data, post_status) VALUES(${data.id}, '${data.data}', ${data.status})`, 
    //     (err:Error, data:any) => {
    //         err ? reject() : resolve();
    //     });
    // })
}