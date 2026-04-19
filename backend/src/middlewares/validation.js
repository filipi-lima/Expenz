import { ZodError } from "zod";

const validation = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        const message = error.issues[0].message;
        if (error instanceof ZodError) return res.status(400).json({ message });

        next(error);
    }
};

export default validation;
