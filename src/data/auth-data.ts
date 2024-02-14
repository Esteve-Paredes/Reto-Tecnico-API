import { query } from "../db/index";
import { User } from "../models/user";

export async function getUserByuserName(username: string) {
  return (await query("SELECT * FROM users WHERE username = $1", [username]))
    .rows[0];
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
