import bcrypt from "bcrypt";
import * as userDB from "../data/auth-data";
import { User, userParams } from "../models/user";
import { ApiError } from "../middleware/error";

export async function createUser(userData: userParams): Promise<User> {
  const { username, password } = userData;

  const user = await userDB.getUserByuserName(username);
  if (user) {
    throw new ApiError("El username ya está registrado", 400);
  }

  const costFactor = 4;
  const hashedPassword = await bcrypt.hash(password, costFactor);
  return await userDB.createUser(username, hashedPassword);
}

export async function validateCredentials(userData: userParams): Promise<User> {
  const { username, password } = userData;
  const user = await userDB.getUserByuserName(username);

  const isValid = await bcrypt.compare(password, user?.password || "");

  if (!user || !isValid) {
    throw new ApiError("Credenciales incorrectas", 400);
  }

  return user;
}
