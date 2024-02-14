import { z } from "zod";

export const usersSchema = z.object({
  Name: z.string({
    invalid_type_error: "El campo 'name' no puede estar vacío.",
  }),
  Email: z.string({
    invalid_type_error: "El formato del campo 'email' es inválido.",
  }),
  Age: z.number({
    invalid_type_error: "El campo 'age' debe ser un número positivo.",
  }),
});

export type User = z.infer<typeof usersSchema>;
