import { string, z } from "zod";
import { User, UsersSchema } from "../models/users";
import * as fileDB from "../data/file-data";

export async function postData(usersData: User[]) {
  const success: User[] = [];
  const errors: any[] = [];

  for (let i = 0; i < usersData.length; i++) {
    const user = usersData[i];

    try {
      const email = await fileDB.getUserByEmail(user);
      if (!email) {
        UsersSchema.parse(user);
        success.push(user);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        let newData: { [key: string]: string | number } = {
          row: i + 1,
          name: user.name,
          email: user.email,
          age: user.age,
        };
        for (const subError of error.errors) {
          newData[subError.path[0]] = subError.message;
        }
        errors.push(newData);
      }
    }
  }
  const response = await fileDB.postData(success);

  return { response, errors };
}

export async function postDataFixed(user: User) {
  const fixedUser = {
    name: user.name,
    email: user.email,
    age: Number(user.age),
  };

  let success: User;
  let errors: any;

  try {
    const email = await fileDB.getUserByEmail(fixedUser);
    if (!email) {
      UsersSchema.parse(fixedUser);
      success = fixedUser;
      return await fileDB.postDataFixed(success);
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      let newData: { [key: string]: string | number } = {
        name: user.name,
        email: user.email,
        age: user.age,
      };
      for (const subError of error.errors) {
        newData[subError.path[0]] = subError.message;
      }
      errors = newData;
      return errors;
    }
  }
}
