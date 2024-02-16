import * as userDB from "../data/auth-data";
import { User, userParams } from "../models/user";

export async function validateCredentials(userData: userParams): Promise<User> {
  const { email, password } = userData;
  const user = await userDB.getUserByEmail(email);

  return user;
}
