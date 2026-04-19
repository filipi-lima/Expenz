import { z } from "zod";

export const registerSchema = z.object({
    name: z
        .string()
        .min(3, "O nome deve ter pelo menos 3 caracteres")
        .max(50, "Nome muito longo"),
    email: z
        .string()
        .min(1, "O e-mail é obrigatorio")
        .email("Formato de e-mail inválido")
        .trim(),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
    income: z
        .object({
            fixed: z.number().min(0).optional(),
            extra: z.number().min(0).optional(),
        })
        .optional(),
});

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "O e-mail é obrigatorio")
        .email("Formato de e-mail inválido")
        .trim(),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
});
