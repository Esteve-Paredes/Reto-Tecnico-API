import { User, usersSchema } from "../models/users";

export async function postData(usersData: User[]) {
  const newArray: User[] = [];
  usersData.forEach((element) => {
    const body = usersSchema.parse(element);
    newArray.push(body);
  });
  return newArray;
}
