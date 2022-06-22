import type { Sequelize } from "sequelize";
import { posts as _posts } from "./posts";
import type { postsAttributes, postsCreationAttributes } from "./posts";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";

export {
  _posts as posts,
  _users as users,
};

export type {
  postsAttributes,
  postsCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const posts = _posts.initModel(sequelize);
  const users = _users.initModel(sequelize);


  return {
    posts: posts,
    users: users,
  };
}
