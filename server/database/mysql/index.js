import Sequelize from "sequelize";
import mysql from "mysql2/promise";

const sequelize = new Sequelize("PetSitter", "evilla", "12345", {
  host: "mysql",
  port: 3306,
  dialect: "mysql",
  logging: false,
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

const connectToMySQL = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to MySQL");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
};

export { connectToMySQL, sequelize };
