import { Client, Pool } from "pg";
import { config } from "dotenv";
config();

export const pool = new Pool({
  host: process.env["PGHOST"],
  port: Number(process.env["PGPORT"]),
  database: process.env["PGDATABASE"],
  user: process.env["PGUSER"],
  password: process.env["PGPASSWORD"],
});

export const query = (text: string, params?: (string | number | boolean)[]) => {
  return pool.query(text, params);
};

export const adminClient = new Client({
  host: process.env["PGHOST"],
  port: Number(process.env["PGPORT"]),
  database: process.env["PGADMINDATABASE"],
  user: process.env["PGUSER"],
  password: process.env["PGPASSWORD"],
});
