import { query } from "../db/index";

export async function getUserByEmail(email: string, password: string) {
  return (
    await query("SELECT * FROM users WHERE email = $1 AND password = $2", [
      email,
      password,
    ])
  ).rows[0];
}
