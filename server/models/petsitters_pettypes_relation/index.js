import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../../database/mysql/index.js";

const PetSitterPetTypesRelation = sequelize.define(
  // no duplicate entries
  "PetSitterPetTypesRelation",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    petSitterID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    petTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default PetSitterPetTypesRelation;
