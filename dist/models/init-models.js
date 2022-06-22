"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = exports.users = exports.posts = void 0;
const posts_1 = require("./posts");
Object.defineProperty(exports, "posts", { enumerable: true, get: function () { return posts_1.posts; } });
const users_1 = require("./users");
Object.defineProperty(exports, "users", { enumerable: true, get: function () { return users_1.users; } });
function initModels(sequelize) {
    const posts = posts_1.posts.initModel(sequelize);
    const users = users_1.users.initModel(sequelize);
    return {
        posts: posts,
        users: users,
    };
}
exports.initModels = initModels;
