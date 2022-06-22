import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface postsAttributes {
  id: number;
  post_data: string;
  post_status: boolean;
  post_id: number;
}

export type postsPk = "id";
export type postsId = posts[postsPk];
export type postsOptionalAttributes = "id" | "post_id";
export type postsCreationAttributes = Optional<postsAttributes, postsOptionalAttributes>;

export class posts extends Model<postsAttributes, postsCreationAttributes> implements postsAttributes {
  id!: number;
  post_data!: string;
  post_status!: boolean;
  post_id!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof posts {
    return posts.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    post_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    post_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
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
