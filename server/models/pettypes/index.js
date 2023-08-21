import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../../database/mysql/index.js";

const PetsType = sequelize.define(
  "PetsType",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
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

export default PetsType;
