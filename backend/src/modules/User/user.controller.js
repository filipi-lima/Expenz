import userService from "./user.service.js"

const userRegistration = async (req, res, next) => {
    try {
        const user = await userService.userRegistration(req.body)

        res.status(201).json(user)
    } catch (error) {
        next(error)
    }
}

export default {
    userRegistration
}
