import { z } from "zod";

export const userSchema = z.object({
  username: z.string({
    required_error: "username es requerido",
    invalid_type_error: "Username debe ser un string",
  }),
  password: z
    .string({
      required_error: "Password es requerido",
      invalid_type_error: "Password debe ser un string",
    })
    .min(6, "Password debe tener al menos 6 caracteres"),
});

export type userParams = z.infer<typeof userSchema>;
export type User = userParams & { id: number };
