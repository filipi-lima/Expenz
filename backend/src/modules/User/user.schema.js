import { z } from "zod";

export const registerSchema = z.object({
    name: z
        .string()
        .min(2, "O nome deve ter pelo menos 2 caracteres")
        .max(40, "Nome muito longo")
        .toLowerCase()
        .transform(name => {
            return name.trim().split(' ').map(word => {
                return word[0].toLocaleUpperCase().concat(word.substring(1))
            }).join(' ')
        }),
    email: z
        .string()
        .min(1, "O e-mail é obrigatorio")
        .email("Formato de e-mail inválido")
        .trim()
        .toLowerCase(),
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
        .trim()
        .toLowerCase(),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
});
