import app from "./config/app.js"
import connectDB from "./config/database.js"

const PORT = process.env.PORT || 3000
connectDB().then(() => {
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
})
