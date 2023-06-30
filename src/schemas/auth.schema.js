import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "El nombre de usuario es requerido.",
  }),
  email: z
    .string({
      required_error: "El correo es requerido",
    })
    .email({
      message: "El correo es inválido",
    }),
  password: z
    .string({
      required_error: "Se requiere de una contraseña",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 carácteres.",
    }),
});


export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Es requerido un correo.",
    })
    .email({
      message: "El correo es inválido.",
    }),
  password: z
    .string({
      required_error: "Es requerida una contraseña.",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 carácteres.",
    }),
});