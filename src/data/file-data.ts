import { query } from "../db";
import { User } from "../models/users";

export async function getUserByEmail(user: User) {
  const { name, email, age } = user;
  return (await query("SELECT * FROM users WHERE email = $1", [email])).rows[0];
}

export async function postData(UserSuccess: User[]) {
  const results = await Promise.all(
    UserSuccess.map(async (user) => {
      const { name, email, age } = user;
      const result = await query(
        "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *",
        [name, email, age]
      );
      return result.rows[0];
    })
  );

  return results;
}

export async function postDataFixed(user: User) {
  const { name, email, age } = user;
  const result = await query(
    "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *",
    [name, email, age]
  );
  return result.rows[0];
}
