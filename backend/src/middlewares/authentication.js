import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const authentication = (token) => (req, res, next) => {
    try {
        if (!token) {
            return res
                .status(401)
                .json({ message: "Token não fornecido. Acesso Negado" });
        }
        jwt.verify(token, process.env.SECRET);
        next()
    } catch (error) {
        return res
            .status(403)
            .json({ message: "Token inválido. Acesso Negado" });
    }
};

export default authentication;
