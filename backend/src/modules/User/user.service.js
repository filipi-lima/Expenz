import User from "./user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const userRegistration = async (data) => {
    const { email, password } = data;

    const emailExists = await User.findOne({ email });

    if (emailExists) {
        const error = new Error("Esse e-mail já está sendo utilizado");
        error.statusCode = 400;
        error.type = "email"
        throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = await User.create({ ...data, password: passwordHash });

    return {
        id: user._id,
        name: user.name,
        email: user.email,
    };
};

const userLogin = async (data) => {
    const { email, password } = data;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        const error = new Error("Usuário não encontrado");
        error.statusCode = 404;
        error.type = "email"
        throw error;
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        const error = new Error("Senha inválida");
        error.statusCode = 401;
        error.type = "password"
        throw error;
    }

    const SECRET = process.env.SECRET;
    const PAYLOAD = { id: user._id, name: user.name };

    const token = jwt.sign(PAYLOAD, SECRET, { expiresIn: "3h" });

    return token;
};

export default {
    userRegistration,
    userLogin,
};
