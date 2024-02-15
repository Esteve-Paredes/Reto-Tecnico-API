import { query } from "../db/index";
import { User } from "../models/user";

export async function getUserByEmail(email: string) {
  return (await query("SELECT * FROM users WHERE email = $1", [email])).rows[0];
}

export async function createUser(
  username: string,
  hashedPassword: string
): Promise<User> {
  return (
    await query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
      [username, hashedPassword]
    )
  ).rows[0];
}
