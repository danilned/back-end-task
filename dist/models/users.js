"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const sequelize_1 = require("sequelize");
class users extends sequelize_1.Model {
    static initModel(sequelize) {
        return users.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            login: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false,
                unique: "users_login_key"
            },
            password: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            },
            rights: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            email: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'users',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "users_login_key",
                    unique: true,
                    fields: [
                        { name: "login" },
                    ]
                },
                {
                    name: "users_pk",
                    unique: true,
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
    }
}
exports.users = users;
