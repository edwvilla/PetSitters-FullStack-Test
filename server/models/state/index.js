import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../../database/mysql/index.js";

const State = sequelize.define(
  "State",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

export default State;
