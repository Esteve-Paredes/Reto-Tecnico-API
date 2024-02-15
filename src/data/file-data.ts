import { query } from "../db";
import { User } from "../models/users";

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
