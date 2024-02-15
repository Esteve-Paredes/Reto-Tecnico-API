import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email("El email no es válido."),
  password: z
    .string({
      required_error: "Password es requerido",
      invalid_type_error: "Password debe ser un string",
    })
    .min(6, "Password debe tener al menos 6 caracteres"),
});

export type userParams = z.infer<typeof userSchema>;
export type User = userParams & { id: number; role: string };
