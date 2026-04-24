import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const authentication = (req, res, next) => {
    const authHeader = req.headers["authentication"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res
            .status(401)
            .json({ message: "Token não fornecido. Acesso Negado" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        res.status(200).json({ decoded })
    } catch (error) {
        return res
            .status(403)
            .json({ message: "Token inválido. Acesso Negado" });
    }
};

export default authentication;
