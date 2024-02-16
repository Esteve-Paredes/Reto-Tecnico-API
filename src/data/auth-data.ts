import { query } from "../db/index";

export async function getUserByEmail(email: string) {
  return (await query("SELECT * FROM users WHERE email = $1", [email])).rows[0];
}
