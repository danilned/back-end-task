"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("./index");
const posts_1 = require("../models/posts");
const users_1 = require("../models/users");
module.exports = function (data) {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield posts_1.posts.findOne({
            where: {
                post_id: data.postId,
                post_status: true
            }
        });
        const user = yield users_1.users.findByPk(data.id);
        if (post) {
            if (post.getDataValue('id') === data.id || (user === null || user === void 0 ? void 0 : user.getDataValue('rights'))) {
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
    });
};
