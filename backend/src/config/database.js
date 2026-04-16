import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        return console.log("Banco de dados conectado com sucesso!")

    } catch (error) {
        return console.log("Erro ao se conectar com o banco de dados:", error)
    }
}

export default connectDB
