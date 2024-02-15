import { z } from "zod";
import { User, UsersSchema } from "../models/users";
import * as fileDB from "../data/file-data";

export async function postData(usersData: User[]) {
  const success: User[] = [];
  const errors: any[] = [];

  for (let i = 0; i < usersData.length; i++) {
    const user = usersData[i];

    try {
      UsersSchema.parse(user);
      success.push(user);
    } catch (error) {
      if (error instanceof z.ZodError) {
        let newData: { [key: string]: string | number } = {
          row: i + 1,
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
