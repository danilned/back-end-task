"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.posts = void 0;
const sequelize_1 = require("sequelize");
class posts extends sequelize_1.Model {
    static initModel(sequelize) {
        return posts.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            post_data: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            },
            post_status: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false
            },
            post_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'posts',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "posts_pkey",
                    unique: true,
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
    }
}
exports.posts = posts;
