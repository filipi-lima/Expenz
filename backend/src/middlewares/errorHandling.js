export default async (error, req, res, next) => {
    const statusCode = error.statusCode || 500
    const message = statusCode === 500 ? "Server Internal Error" : error.message
    
    console.error(`
        [ERROR]
        status: ${statusCode}
        error: ${message} 
    `)

    res.status(statusCode).json({ message })
}
