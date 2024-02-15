import { z } from "zod";

export const UsersSchema = z.object({
  name: z.string().min(1, "El nombre no puede estar vacío."),
  email: z.string().email("El email no es válido."),
  age: z.number().min(0, "La edad no puede ser un número negativo."),
});

export type User = z.infer<typeof UsersSchema>;
