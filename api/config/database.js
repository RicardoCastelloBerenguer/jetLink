import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import mysql2 from "mysql2";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "postgres", // Supabase utiliza PostgreSQL
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    },
  },
});

export default sequelize;
