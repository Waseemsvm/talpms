import type { Knex } from "knex";

const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_PORT = process.env.MYSQL_PORT;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_CLIENT = process.env.DB_CLIENT;

const knex = require("knex");

export default class Database {
  private static instance: Database;
  private knexInstance: Knex;

  private constructor() {
    this.knexInstance = knex({
      client: DB_CLIENT,
      connection: {
        host: MYSQL_HOST,
        port: MYSQL_PORT,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: DB_NAME,
      },
    });
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public getConnection(): Knex {
    return this.knexInstance;
  }

  public async testConnection() {
    try {
      await this.knexInstance.raw("SELECT 1");
      console.log("Database connected");
    } catch (error) {
      console.error("Database connection failed:", error);
    }
  }
}
